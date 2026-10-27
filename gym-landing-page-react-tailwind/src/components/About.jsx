import aboutImage from "../assets/about.jpg"
const About = () => {
    return (
      <section id="about">
        <p>
          We believe fitness is for everyone. Whether you're a beginner or an
          experienced athlete, our gym provides everything you need to improve
          your strength, endurance, and overall health.
            </p>
            <img src={aboutImage } alt="Gym photo"/>
      </section>
    );
}
export default About;