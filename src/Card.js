const Card = ({ name, price , image}) => {
  return (
    <div className="CARDDIV">
      <img src={image} alt="token" />
      <h4>{name}</h4>
      <h6>Price: {price}</h6>
    </div>
  );
};

export default Card;
