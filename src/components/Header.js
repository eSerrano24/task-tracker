import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log("Click");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onClick} color="green" text="Add" />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

//not used
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
