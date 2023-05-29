import styles from './Login.module.css';
import Button from "./UI/Button";

const Login = (props) => {


    return <div>
        <form className ={styles.flexForm}>
            <div >
            <label htmlFor="email">Email:</label>
            <input type="text"/>
            </div>
            <div >
            <label htmlFor="password">Password:</label>
            <input type="password"/>
            </div>
            <Button>Login</Button>
        </form>
    </div>

}

export default Login;