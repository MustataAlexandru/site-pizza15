import React, {useState} from "react";
import styles from './Navigation.module.css'
import Button from "./Button";
import UserAvatar from "./UserAvatar";
import SearchBar from "../SearchBar";

const Navigation = (props) => {

    const [userData, setUserData] = useState(null);


    const handleUserClick = () => {

        if (!userData)
            setUserData({name: 'Alex', email: props.matchedUser.email});
        else setUserData(null);
    };

    return (<div>
            <nav className={styles.nav}>
                <ul className={styles.navbar}>
                    <li>
                        <img className={styles.logo}
                             src="https://dvs.md/wp-content/uploads/2021/05/dummy-logo-5b.png"></img>
                    </li>
                    <li><SearchBar elements={props.pizzas}/></li>
                    <li>
                        <div className={styles.dropDownRelative}>
                            <UserAvatar onClick={handleUserClick}/>
                        </div>
                    </li>
                </ul>
            </nav>
            {userData && (
                <div className={styles.dropDown}>
                    <div className={!userData ? styles.hidden : styles.visible}>
                        <p>Name: {userData.name}</p>
                        <p>Email: {userData.email}</p>
                        <a href="/"><Button onLogout={props.onLogout}>Logout</Button></a>
                    </div>
                </div>)}
        </div>
    )
}
export default Navigation;