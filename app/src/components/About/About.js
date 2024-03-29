import image from "../../images/image-03.svg";

function About() {
  return (
    <section className="about">
      <img className="about__image" src={image} alt="profile pic" />
      <div className="about__content">
        <h2 className="about__header">About the author</h2>
        <p className="about__description">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
          <br></br>
          <br></br>
          You can also talk about your experience with Practicum, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
