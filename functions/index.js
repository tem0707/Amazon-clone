const { onRequest } = require("firebase-functions/v2/https"); // Firebase Functions
const logger = require("firebase-functions/logger"); // Firebase Logger
const express = require("express"); // Express
const cors = require("cors"); // CORS
const dotenv = require("dotenv");
const { Message } = require("firebase-functions/pubsub");
const { setGlobalOptions } = require("firebase-functions");
dotenv.config(); // Load environment variables

const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();
setGlobalOptions({ maxInstances: 10 });
app.use(cors({ origin: true }));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Success !");
});

app.post("/payment/create", async (req, res) => {
  const total = parseInt(req.query.total);

  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({
      message: "total must be greater than 0",
    });
  }
});

exports.api = onRequest(app);
