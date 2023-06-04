import styles from './Login.module.css';
import Button from "./UI/Button";
import React, {useState} from "react";
import Navigation from "./UI/Navigation";
import PizzaRenderer from "./PizzaRenderer";


const Login = (props) => {
    const pizzas = [
        {
            id: 1,
            name: "Pepperoni",
            ingredients: ["Tomato sauce", "Mozzarella cheese", "Pepperoni"]
        },
        {
            id: 2,
            name: "Margherita",
            ingredients: ["Tomato sauce", "Mozzarella cheese", "Fresh basil leaves"]
        },
        {
            id: 3,
            name: "Vegetarian",
            ingredients: ["Tomato sauce", "Mozzarella cheese", "Mushrooms", "Bell peppers", "Onions", "Olives"]
        },
        {
            id: 4,
            name: "BBQ Chicken",
            ingredients: ["BBQ sauce", "Mozzarella cheese", "Grilled chicken", "Red onions"]
        },
        {
            id: 5,
            name: "Hawaiian",
            ingredients: ["Tomato sauce", "Mozzarella cheese", "Ham", "Pineapple"]
        }
    ]
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        console.log(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value)
        console.log(event.target.value);
    }


        const handleSubmit = (event) => {
            event.preventDefault();

            const matchedUser = props.users.find((user) => user.email === enteredEmail && user.password === enteredPassword);

            if (matchedUser) {

                console.log('Logged in successfully!');
                setIsLoggedIn(true);
            } else {

                console.log('Incorrect email or password!');
                setIsLoggedIn(false);
            }
        }
        if (isLoggedIn) return (<div>
            <Navigation pizzas={pizzas} matchedUser={{email: enteredEmail, password: enteredPassword}}></Navigation>

            <PizzaRenderer pizzas={pizzas}/>

        </div>)
    else return (
            <form onSubmit={handleSubmit} className={styles.flexForm} type='submit'>
                <div>
                    <label htmlFor="email">Email</label>
                </div>
                <div className={styles.element}>
                    <input value={enteredEmail} onChange={emailChangeHandler} type="text"/>
                </div>
                <div>

                    <label htmlFor="password">Password</label>
                </div>
                <div className={styles.element}>
                    <input value={enteredPassword} onChange={passwordChangeHandler} type="password"/>
                </div>
                <div className={styles.margin}>
                    <Button >Login</Button></div>
            </form>)

}
export default Login;