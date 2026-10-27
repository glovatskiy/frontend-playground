import imgAlex from "../assets/AlexJohnson.jpg";
import imgSarah from "../assets/SarahMiller.jpg";
import imgMike from "../assets/MikeWilson.jpg";
import TrainerCard from "./TrainerCard";

const Trainers = ({ heading, paragraph }) => {
  const trainers = [
    {
      img: imgAlex,
      name: "Alex Johnson",
      specialization: "Strength Training",
      description:
        "Helps members build muscle, improve strength, and develop proper lifting techniques.",
    },
    {
      img: imgSarah,
      name: "Sarah Miller",
      specialization: "Yoga &amp; Mobility",
      description:
        "Focuses on flexibility, balance, and improving overall mobility.",
    },
    {
      img: imgMike,
      name: "Mike Wilson",
      specialization: "HIIT &amp; Cardio",
      description:
        "Creates energetic workouts designed to improve endurance and burn calories.",
    },
  ];
  return (
    <section id="trainers">
      <h2>{heading}</h2>
      <p>{paragraph}</p>
      <div className="trainers-cards">
        {trainers.map((trainer) => {
          return (
            <TrainerCard
              key={trainer.name}
              img={trainer.img}
              name={trainer.name}
              specialization={trainer.specialization}
              description={trainer.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Trainers;
