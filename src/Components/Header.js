import './Header.css';
import logo from "../images/logo.png"

function Header() {
  return (
    <div className="Header">
      <img 
        className='logo' 
        src={logo} 
        alt="logo backstage talks"
        width="260px"
      />
        <p className="mail">info@backstagetalks.com</p>
    </div>
  );
}
export default Header;