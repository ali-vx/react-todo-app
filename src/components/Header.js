import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title,onAdd,showAdd }) => {
  
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button onClick={onAdd} color={!showAdd ? 'green' : 'red'} text={!showAdd ? 'Add' : 'Close'}/>
    </header>
  );
};

Header.defaultProps = {
  title: "Todo List",
};
Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
