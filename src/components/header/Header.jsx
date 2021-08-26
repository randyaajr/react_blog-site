import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-Title">
        <span className="header-Title-Sm">React & Node</span>
        <span className="header-Title-Lg">Blog</span>
      </div>
      <img
        src="https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
        className="header-Img"
      />
    </div>
  );
};

export default Header;
