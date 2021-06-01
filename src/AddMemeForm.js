import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {v4 as uuid} from 'uuid';
import './AddMemeForm.css';

const AddMemeForm = () => {
    const dispatch = useDispatch();
    const INITIAL_STATE = {top: "", bot: "", url: ""};
    const [form, setForm] = useState(INITIAL_STATE);
    const handleChange = e => {
        const {name, value} = e.target;
        setForm(f => ({ ...form, [name]: value }));
    };
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: "ADD_MEME", payload: {id: uuid(), ...form} });
        setForm(INITIAL_STATE);
    }

    return (
        <form className="AddMemeForm" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="top">Top Text: </label>
                <input
                    id="top" 
                    type="text"
                    name="top"
                    value={form.top}
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="bot">Bottom Text: </label>
                <input
                    id="bot" 
                    type="text"
                    name="bot"
                    value={form.bot}
                    onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="url">URL: </label>
                <input
                    id="url" 
                    type="text"
                    name="url"
                    value={form.url}
                    onChange={handleChange} />
            </div>
            <button
                className="AddMemeForm-submit" 
                type="submit">ADD MEME</button>
        </form>
    );
}

export default AddMemeForm;