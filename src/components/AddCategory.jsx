import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length === 0) {
            return;
        }
        onNewCategory(inputValue.trim());
        setInputValue('');
    };
    
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar GIFS" value={inputValue} onChange={handleInputChange} />
        </form>
    )
}