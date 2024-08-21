import profilePic from './assets/subhome-ai.jpg'

function Card(){
    return(
   <div className="card">
    <img className="card-image" src={profilePic} alt="Profile Picture" />
    <h2 className="card-tittle">Maria An</h2>
    <p className="card-text">I am Front-End Developer</p>
   </div>
    );
    }
    export default Card