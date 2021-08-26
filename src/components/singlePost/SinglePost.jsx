import "./SinglePost.scss";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePost-Wrapper">
        <img
          src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
          className="singlePost-Img"
        />
        <h1 className="singlePost-Title">
          Lorem ipsum dolor sit amet
          <div className="singlePost-Edit">
            <i className="singlePost-Edit-Icon far fa-edit"></i>
            <i className="singlePost-Edit-Icon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePost-Info">
          <span className="singlePost-Author">
            Author: <b>Randy</b>
          </span>
          <span className="singlePost-Date">36 minutes ago..</span>
        </div>
        <p className="singlePost-Desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ut
          laborum fugit ullam repudiandae consequatur, debitis saepe quia vel at
          architecto! Repellendus tenetur libero reiciendis dolores aut, veniam
          corporis qui! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Eligendi ut laborum fugit ullam repudiandae consequatur, debitis
          saepe quia vel at architecto! Repellendus tenetur libero reiciendis
          dolores aut, veniam corporis qui! Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Eligendi ut laborum fugit ullam
          repudiandae consequatur, debitis saepe quia vel at architecto!
          Repellendus tenetur libero reiciendis dolores aut, veniam corporis
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi ut
          laborum fugit ullam repudiandae consequatur, debitis saepe quia vel at
          architecto! Repellendus tenetur libero reiciendis dolores aut, veniam
          corporis qui! qui!
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
