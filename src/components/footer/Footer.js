import rsLogo from "../../assets/img/rs_school_js.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <div className='footer'>
      <a href='https://rs.school/js/' target='_blank'>
        {" "}
        <img src={rsLogo} alt='rslogo' width='80' height='80' />
      </a>
      <a className='git' href='https://github.com/sheVadead' target='_blank'>
        Dmitry Shevchenok
      </a>
    </div>
  );
};

export default Footer;
