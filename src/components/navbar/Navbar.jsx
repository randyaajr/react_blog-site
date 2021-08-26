import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-bar-Left">
        <i className="nav-bar-Item fab fa-facebook-square"></i>
        <i className="nav-bar-Item fab fa-twitter-square"></i>
        <i className="nav-bar-Item fab fa-instagram-square"></i>
        <i className="nav-bar-Item fab fa-pinterest-square"></i>
        <i className="nav-bar-Item fab fa-reddit-square"></i>
        <i className="nav-bar-Item fab fa-github-square"></i>
      </div>
      <div className="nav-bar-Center">
        <ul className="nav-bar-Center-List">
          <li className="nav-bar-Center-Item">Home</li>
          <li className="nav-bar-Center-Item">About</li>
          <li className="nav-bar-Center-Item">Contact</li>
          <li className="nav-bar-Center-Item">Post</li>
          <li className="nav-bar-Center-Item">Logout</li>
        </ul>
      </div>
      <div className="nav-bar-Right">
        <img
          src="https://images.pexels.com/photos/2954496/pexels-photo-2954496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          className="nav-bar-Right-Image"
        />
        <i class="nav-bar-Right-Search fas fa-search"></i>
      </div>
    </div>
  );
};

export default Navbar;
