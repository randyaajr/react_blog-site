import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-Item">
        <span className="sidebar-Title">About Me</span>
        <img
          src="https://scontent.fybz2-2.fna.fbcdn.net/v/t1.18169-9/18839198_774392032739587_8368906821817282117_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=fvkgOZJeL_sAX-owfF2&_nc_ht=scontent.fybz2-2.fna&oh=e0eaae67f74600ed11d780b9364631a9&oe=614BC325"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita est
          architecto error? Ut consequatur natus eius repudiandae eum delectus
          facilis est esse earum nulla unde, tempora, ipsa, autem molestias
          distinctio!
        </p>
      </div>
      <div className="sidebar-Item">
        <span className="sidebar-Title">Categories</span>
        <ul className="sidebar-List">
          <li className="sidebar-List-Item">Life</li>
          <li className="sidebar-List-Item">Tech</li>
          <li className="sidebar-List-Item">Music</li>
          <li className="sidebar-List-Item">Fun Stuff</li>
          <li className="sidebar-List-Item">Green Thumb</li>
          <li className="sidebar-List-Item">Green Thumb</li>
          <li className="sidebar-List-Item">Sports</li>
          <li className="sidebar-List-Item">Gaming</li>
        </ul>
      </div>
      <div className="sidebar-Item">
        <span className="sidebar-Title">Follow Me</span>
        <div className="sidebar-Social">
          <i className="sidebar-Social-Icon fab fa-facebook-square"></i>
          <i className="sidebar-Social-Icon fab fa-twitter-square"></i>
          <i className="sidebar-Social-Icon fab fa-instagram-square"></i>
          <i className="sidebar-Social-Icon fab fa-reddit-square"></i>
          <i className="sidebar-Social-Icon fab fa-github-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
