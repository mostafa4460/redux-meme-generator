import {useDispatch} from 'react-redux';
import './Meme.css';

const Meme = ({id, top, bot, url}) => {
    const dispatch = useDispatch();
    const removeMeme = () => dispatch({ type: "REMOVE_MEME", payload: id });

    return (
        <div className="Meme" onClick={removeMeme}>
            <p className="Meme-top">{top}</p>
            <img className="Meme-img" src={url} alt="meme" />
            <p className="Meme-bot">{bot}</p>
        </div>
    );
}

export default Meme;