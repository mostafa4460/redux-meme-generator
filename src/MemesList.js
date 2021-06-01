import {useSelector} from 'react-redux';
import Meme from './Meme';
import './MemesList.css';

const MemesList = () => {
    const memes = useSelector(store => store.memes);
    
    return (
        <div className="MemesList">
            {memes.map(m => <Meme key={m.id} {...m} />)}
        </div>
    );
};

export default MemesList;