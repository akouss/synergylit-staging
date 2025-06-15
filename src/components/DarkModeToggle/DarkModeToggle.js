import { useContext } from "react";
import { Button } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";
import "bootstrap-icons/font/bootstrap-icons.css";

const DarkModeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Button
      variant="secondary"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="ms-2"
    >
      <i className={`bi ${theme === "light" ? "bi-moon-fill" : "bi-sun-fill"}`}></i>
    </Button>
  );
};

export default DarkModeToggle;
