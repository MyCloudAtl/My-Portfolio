import { Link } from "react-router-dom"
import MyPic from "/Users/meganmashburn/code/ga/labs/my-portfolio/portfolio/src/assets/MyPic.jpeg"
// Hello, it's a pleasure to meet you! My name is Megan Mashburn, and I'm a dedicated Junior Full-Stack Software Engineer driven by a passion for creating elegant solutions that solve complex problems and make a meaningful impact.

//  Recently, I completed the rigorous General Assembly Software Engineering Immersive Program, honing my skills in HTML, CSS, Javascript, React, Django, SQL, and Python.
// In the world of software engineering, I thrive on the ever-evolving challenges that push me to grow. It’s this tenacity that drives me to continuously improve and innovate in my work.
// Beyond the code, you’ll find me unwinding with my beloved dog, exploring new sights, and whipping up delicious dishes in the kitchen. These moments recharge me and inspire fresh perspectives in my work.
// My journey into software engineering was driven by a desire for constant challenge and the opportunity for continuous growth. Looking ahead, I aim to contribute meaningfully to projects that make a positive impact while furthering my skills in this dynamic field.
// Let’s connect and explore how we can innovate together!

//  I recently completed the rigorous General Assembly Software Engineering Immersive Program, honing my skills in HTML, CSS, JavaScript, React, Django, SQL, and Python. This immersive experience has equipped me with a solid foundation to tackle diverse challenges in software development.
// In the Industry:
// I thrive in the dynamic and ever-evolving world of software engineering, where every day presents new opportunities to innovate and grow. My tenacious personality drives me to solve complex problems and deliver robust solutions that exceed expectations.
// Outside of Work:
// When I'm not coding, you'll find me exploring new sights with my beloved dog, experimenting with new recipes in the kitchen, or simply enjoying the beauty of nature. These moments recharge my creativity and keep me balanced.
// Future Goals:
// My journey into software engineering stemmed from a desire for constant challenge and continuous personal growth. I am excited to contribute to cutting-edge projects that push boundaries and redefine possibilities. My goal is to cultivate a career where innovation meets purpose, making a meaningful impact every step of the way.
// Thank you for visiting my page. Let's connect and explore how we can collaborate to create something amazing together!

//  Recently, I completed the rigorous Software Engineering Immersive Program at General Assembly, where I honed my skills in HTML, CSS, Javascript, React, Django, SQL, and Python. This intensive training has equipped me with the technical prowess and problem-solving mindset needed to thrive in the fast-paced world of software development.
// In the realm of technology, I thrive on the ever-evolving challenges that demand creativity and persistence—qualities that define my approach to both life and work. I am driven by the opportunity to continuously learn and improve, pushing the boundaries of what's possible in each project I undertake.
// Beyond the confines of code, you'll often find me exploring new places with my faithful canine companion, experimenting with flavors in the kitchen, or simply enjoying the beauty of the world around me. These passions rejuvenate me and provide a balanced perspective that enhances my professional endeavors.
// My journey into software engineering stems from a deep-seated desire for constant growth and challenge. I embarked on this path to ensure that every day brings new opportunities to learn, innovate, and contribute meaningfully to projects that make a difference.
// I am excited about what the future holds as I continue to evolve in my career, tackling new technologies and contributing to innovative solutions. Let's connect and explore how we can collaborate to bring ideas to life and make a lasting impact together.

//  Recently, I completed the rigorous General Assembly Software Engineering Immersive Program, where I honed my skills in HTML, CSS, JavaScript, React, Django, SQL, and Python. This intensive experience has equipped me with the tools and confidence to tackle challenges head-on, pushing me to constantly learn and grow in this dynamic field.
// In the work industry, I thrive on the ever-evolving nature of technology. It's the perfect match for my tenacious personality, as I relish the opportunity to innovate and refine my craft with each project I undertake. I'm driven by the desire to contribute meaningfully to impactful projects and to continually improve my skills.
// Beyond the screen, you'll often find me indulging my passions outside of work. Whether I'm exploring new sights with my dog by my side, experimenting with new recipes in the kitchen, or embarking on spontaneous adventures, I find joy in the simple moments that life has to offer.
// My journey into software engineering stemmed from a deep-seated desire for constant challenge and growth. I sought a career where I could leverage my problem-solving skills while being part of a community that values creativity and collaboration. As I continue to evolve in this field, my goal is to contribute meaningfully to projects that make a difference, all while nurturing my passion for learning and development.
// Thank you for taking the time to get to know me. I'm excited about the future and eager to connect with others who share my enthusiasm for technology and innovation. Let's create something amazing together!








const AboutMe = () => {
    return (
        <div className="AboutMe">
        <Link className="ProjectsRTNHome" to="/"><button className="LinkBTN">Home</button></Link>
        <h1>About Me Introduction</h1>
        <div className="img-and-heading">
            <img src={MyPic} alt="Megan Mashburn" />
            <h2>Hello, it's a pleasure to meet you!</h2>
        </div>
        <h3>My name is Megan Mashburn, and I'm a dedicated Junior Full-Stack Software Engineer. I have a tenacious personality and a passion for creating elegant solutions to solve complex problems. Recently, I completed a demanding Software Engineering Immersive Program with General Assembly, where I grew and developed skills in HTML, CSS, Javascript, React, Django, SQL, and Python. My previous professional development has helped me build strong communication skills and the skill to prioritize tasks based on their importance. My need for constant challenge and growth was the driving force to this career change. I believe I would be a great asset for any company, one you could cultivate and grow. Thank you for your time and consideration. Please feel free to reach out for any further questions via email or I can be reached directly at (706)455-7075.</h3>
    </div>
)
}
export default AboutMe
