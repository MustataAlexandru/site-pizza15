import styles from './App.module.css';
import Login from "./components/Login";
import Navigation from "./components/UI/Navigation";


function App() {

    const users = [{
        email: 'alex@yahoo.com',
        password: '1234567'
    },
    {
        email: 'alex2@yahoo.com' , password: '1234567'
    },
        {
        email: 'alex3@yahoo.com' , password: '1234567'
        }
    ]


    return (<div>

        <Login></Login>
    </div>)
}

export default App;
