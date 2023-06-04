
import Login from "./components/Login";



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

        <Login users={users}></Login>

    </div>)
}

export default App;
