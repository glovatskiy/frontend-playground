const TrainerCard = ({ img, name, specialization, description }) => {
  return (
    <div className="trainer-card">
          <img src={img} alt={ name} />
      <h3>{name}</h3>
      <p>{specialization}</p>
      <p>{description}</p>
    </div>
  );
};

export default TrainerCard;