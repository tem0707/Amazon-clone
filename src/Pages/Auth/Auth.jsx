import React, { useContext, useState } from "react";
import styles from "./Signup.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/sign-logo.png";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
import { ClipLoader } from "react-spinners";
const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState({
    SignIn: false,
    SignUP: false,
  });

  const [{ user }, dispatch] = useContext(DataContext);
  const navigate = useNavigate();
  const navStateData = useLocation();
  console.log(navStateData);

  const authHandler = async (e) => {
    e.preventDefault();

    if (e.target.name == "Signin") {
      // firebase auth
      setLoading({ ...loading, SignIn: true });

      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, SignIn: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, SignIn: false });
        });
    } else {
      setLoading({ ...loading, SignUP: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...loading, SignUP: false });
          navigate(navStateData?.state?.redirect || "/");
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, SignUP: false });
        });
    }
  };

  return (
    <>
      <section className={styles.login}>
        {/* logo */}
        <Link to={"/"}>
          <img src={logo} alt="amazon-logo" />
        </Link>

        {/* form */}

        <div className={styles.login__container}>
          <h1>Sign In</h1>
          {navStateData?.state?.msg && (
            <small
              style={{
                padding: "5px",
                textAlign: "center",
                color: "red",
                fontWeight: "bold",
              }}
            >
              {navStateData?.state?.msg}
            </small>
          )}
          <form action="" className={styles.signUP_Form}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="password"
              />
            </div>
            <button
              type="submit"
              onClick={authHandler}
              name="Signin"
              className={styles.login__signInButton}
            >
              {loading.SignIn ? (
                <ClipLoader color="#000" size={15}></ClipLoader>
              ) : (
                "Sign In"
              )}
            </button>
          </form>
          {/* agreement */}

          <p>
            By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
            Sale. Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p>

          {/* create accoun btn */}
          <button
            type="submit"
            onClick={authHandler}
            name="Signup"
            className={styles.login__registerButton}
          >
            {loading.SignUP ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              " Create Your Amazon Account"
            )}
          </button>
          {error && (
            <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
          )}
        </div>
      </section>
    </>
  );
};

export default Auth;
