import React , {useState} from 'react';
import styles from './SearchBar.module.css'
const SearchBar = (props) => {
     const [searchInput , setSearchInput] = useState('');

let pizzas = props.elements;
console.log(pizzas);
    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        if(searchInput.length > 0) {
            pizzas.filter((pizza) => {
                return pizza.name.match(searchInput);
            })

        }
    }

    return (<div className={styles.searchBar}>
        <input
            type="text"
            placeholder="Search for pizzas"
            onChange={handleChange}
            value={searchInput} />

    </div>)

}

export default SearchBar;