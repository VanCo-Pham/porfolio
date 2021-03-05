import icon from '../images/pvc.ico'
import MouseMove from './MouseMove'


const Intro = () => {
    
    return (
        <div className="intro">
            <h1>Designer, Front-end Developer & Mentor </h1>
            <h2>
                I design and code beautifully simple things, and I love what I do.
            </h2>
            <div className="myIcon">
                <img src={icon} alt=""/>
            </div>
            <MouseMove />
        </div>
    );
}

export default Intro