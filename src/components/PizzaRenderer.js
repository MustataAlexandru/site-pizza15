import React from "react";
import styles from './PizzaRenderer.module.css'

const PizzaRenderer = (props) => {


    const pizzaItems = props.pizzas.map((pizza) => (
        <li  key={pizza.id}>
           <div className={styles.boxContainer}>

            <p>{pizza.name}</p>
               <img src="https://www.pizzaibiza.ro/upload/shop/products/pizza-ibiza-specialitatea-casei@2x.jpg"></img>

            <div >
                <p>Ingredients</p></div>

                <ul className={styles.ingredientsContainer}>
                    {pizza.ingredients.map((ingredient) => (
                        <li>{ingredient}</li>
                    ))}
                </ul>

           </div>
        </li>
    ));

    return <div className={styles.pizzasContainer}>{pizzaItems}</div>;
}

export default PizzaRenderer;