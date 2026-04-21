const Card = ({ children, bg }) => {
  // prettier-ignore
  return <div className={`${bg} rounded-lg p-6`}>{children}</div>;
};

export default Card;
