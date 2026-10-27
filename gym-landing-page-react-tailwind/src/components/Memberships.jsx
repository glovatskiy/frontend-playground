import MembershipCard from "./MembershipCard";
const Memberships = () => {
  const memberships = [
    {
      name: "Basic",
      price: "$29",
      features: [
        "Gym Access",
        "Locker Rooms",
        "Standard Equipment",
        "Free Wi-Fi",
      ],
    },
    {
      name: "Standard",
      price: "$49",
      features: [
        "Unlimited Gym Access",
        "Group Fitness Classes",
        "Personal Fitness Assessment",
        "Access to Sauna",
      ],
    },
    {
      name: "Premium",
      price: "$79",
      features: [
        "24/7 Gym Access",
        "Unlimited Group Classes",
        "Personal Training Sessions",
        "Personalized Nutrition Plan",
      ],
    },
  ];
  return (
    <section id="memberships">
          {memberships.map((membership) => {
              return (<MembershipCard
                  key={membership.name}
                  name={membership.name}
                  price={membership.price}
                  features={membership.features}
              />)
          })}
    </section>
  );
};

export default Memberships;
