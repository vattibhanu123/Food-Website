import LOGO_URL from "../utils/constants"
const Header = () => {
    return (
      <div className="head_bar">
        <div className="img_cnt">
          <img
            className="img_logo"
            src={LOGO_URL}
            alt="logo_image"
          ></img>
        </div>
        <nav className="nav_cnt">
          <ul className="Nav_items">
            <li>Home </li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Log out</li>
          </ul>
        </nav>
      </div>
    );
  };

  export default Header;