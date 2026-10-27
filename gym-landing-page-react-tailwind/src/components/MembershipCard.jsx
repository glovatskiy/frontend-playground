const MembershipCard = ({ name, price, features }) => {
  return (
    <div className="membership-card">
      <h3>{name}</h3>
      <p>{price}</p>
      <ul>
        {features.map((feature) => {
          return <li key={feature}>{feature}</li>;
        })}
      </ul>
    </div>
  );
};
export default MembershipCard;
