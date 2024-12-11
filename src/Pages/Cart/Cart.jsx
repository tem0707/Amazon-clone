import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "./cart.module.css"
import { Type } from "../../Utility/action.type";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
function Cart() {
  const [{ basket}, dispatch] = useContext(DataContext);
  
    const total = basket.reduce((amount, item) => {
      return item.price * item.amount + amount;
    }, 0);

    const increment = (item)=>{
      dispatch({
        type: Type.ADD_TO_BASKET,item
      })
    }

    const decrement = (id)=>{
      dispatch({
        type: Type.REMOVE_FROM_BASKET,id
      })
    }
  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h3>Your shopping basket</h3>
          <hr />

          {basket?.length == 0 ? (
            <p>Opps ! No item in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <section className={classes.cart_product}>
                  <ProductCard
                    key={i}
                    product={item}
                    render_desc={true}
                    renderAdd={false}
                    flex={true}
                  />
                  <div className={classes.btn_container}>
                    <button onClick={() => increment(item)}>
                      <MdOutlineKeyboardArrowUp size={30}/>
                    </button>
                    <span>{item.amount}</span>
                    <button onClick={() => decrement(item.id)}>
                      <MdKeyboardArrowDown size={30}/>
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>Subtotal ({basket?.length}items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This Order Contains a Gift</small>
            </span>
            <Link to={"/payments"}>Continue to CheckOut</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart;
