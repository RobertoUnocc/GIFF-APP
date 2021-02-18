import React, { useState } from 'react'
import PropTypes from 'prop-types'


const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const hadleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length> 2){
            setCategories(cat => [inputValue,...cat])
            setInputValue('');
        }
    }
    

    return (
        <form onSubmit={hadleSubmit}>
            <h1>{inputValue}</h1>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

export default AddCategory;

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}

