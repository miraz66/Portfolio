import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";

export default function Button({ name, css, link }) {
  // const navigate = useNavigate();
  return (
    <a href={link} className={css}>
      {name}
    </a>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  css: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
