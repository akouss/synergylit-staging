import { Toast, ToastContainer } from "react-bootstrap";

// * Style
import "./style.css";

import logo from "../../assets/Logo.png";

const CustomToast = ({ showToast, setShowToast, toastMessage, toastType }) => {
  return (
    <ToastContainer
      position="top-end"
      style={{
        position: "fixed",
      }}
    >
      <Toast
        className="d-inline-block m-2"
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000}
        autohide
        animation
        bg={toastType.toLowerCase()}
      >
        <Toast.Header>
          <img
            src={logo}
            className="rounded me-2 "
            alt=""
            style={{ maxHeight: "30px" }}
          />
          <strong className="me-auto">Synergy Litigation Services</strong>
          <small>Now</small>
        </Toast.Header>
        <Toast.Body className={toastType === "Dark" && "text-white"}>
          {toastMessage}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default CustomToast;
