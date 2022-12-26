import "./Title.css";

const Title = ({ title, eventColor }) => {
  return (
    <h1 className="title" style={{ color: eventColor }}>
      {title}
    </h1>
  );
};

export default Title;
