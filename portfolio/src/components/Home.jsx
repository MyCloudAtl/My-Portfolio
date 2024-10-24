import { Link } from "react-router-dom"

const Home = () => {
    return (
    <div className="Main">   
        <div className="Header">
            <h1>Megan Mashburn</h1>
            <h2 className="Title">Full-Stack Developer</h2>
        </div>
        <div className="LinkBar">
                <Link to="/AboutMe">
                    <button className="LinkBTN">About Me</button>
                </Link>
                <Link to="/Projects">
                    <button className="LinkBTN">Projects</button>
                </Link>
                <Link to="/Resume">
                    <button className="LinkBTN">Resume</button>
                </Link>
        </div>
        <div className="Footer">
            <h3>Contact Me: 
            <br></br>
            <a href="https://github.com/MyCloudAtl/"><img src="./src/assets/githubLogo.png" alt="Github-Logo" id="Git" width='43' /></a> &nbsp; 
            <a href="https://linkedin.com/in/megan-mashburn-075598194/"><img src="./src/assets/In-Blue-40-┬«.png" alt="Linked-Logo" width='50' /></a>
            </h3>
            <h4>Phone: 📞 706-455-7075</h4>
            <h4>Email: megandmashburn@gmail.com</h4>
        </div>
      </div>
    )
}
export default Home