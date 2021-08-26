import "./Post.scss";

const Post = () => {
  return (
    <div className="post">
      <img
        src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
        className="post-Img"
      />
      <div className="post-Info">
        <div className="post-Cati">
          <span className="post-Cati-Cat">Tech</span>
          <span className="post-Cati-Cat">Music</span>
        </div>
        <span className="post-Title">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="post-Date">36 minutes ago</span>
      </div>
      <p className="post-Desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab laboriosam
        eum et eligendi voluptate, laudantium enim debitis consectetur commodi
        vitae, sed corporis amet dolor provident at perferendis neque expedita
        in.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
        laboriosam eum et eligendi voluptate, laudantium enim debitis
        consectetur commodi vitae, sed corporis amet dolor provident at
        perferendis neque expedita in.Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Ab laboriosam eum et eligendi voluptate, laudantium
        enim debitis consectetur commodi vitae, sed corporis amet dolor
        provident at perferendis neque expedita in.
      </p>
    </div>
  );
};

export default Post;
