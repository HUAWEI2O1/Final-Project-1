import '../App.css';
import '../css/website.css';
import Background from '../img/background.jpg';

function header () {
    return (
        <div className="background">
            <img src={Background} />
            <div className="color-overlay">
        </div>
    </div>
    )
}

export default header