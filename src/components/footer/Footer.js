import { useState } from "react";
import rsLogo from "../../assets/img/rs_school_js.svg";
import ModalWindow from "../modal/modal";
import "./Footer.css";
const Footer = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className='footer'>
      <div
        className='faq'
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        F.A.Q
      </div>
      <a href='https://rs.school/js/' target='_blank'>
        {" "}
        <img src={rsLogo} alt='rslogo' width='80' height='80' />
      </a>
      {isOpen ? <ModalWindow closeModal={setOpen} /> : ""}
      <a className='git' href='https://github.com/sheVadead' target='_blank'>
        Dmitry Shevchenok
      </a>
    </div>
  );
};

export default Footer;
