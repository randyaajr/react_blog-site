import "./NewPost.scss";

const NewPost = () => {
  return (
    <div className="newPost">
      <img
        className="newPost-Image"
        src="https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        alt=""
      />
      <form className="newPost-Form" action="">
        <div className="newPost-Form-Group">
          <label htmlFor="fileInput">
            <i class="fas fa-plus newPost-Form-Group-Icon"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="newPost-Form-Group-Input"
            autoFocus={true}
          />
        </div>
        <div className="newPost-Form-Group">
          <textarea
            placeholder="Create a story..."
            type="text"
            name=""
            id=""
            cols="30"
            rows="10"
            className="newPost-Form-Group-Input newPost-Form-Group-Write"
          ></textarea>
        </div>
        <button className="newPost-Form-Button">Publish</button>
      </form>
    </div>
  );
};

export default NewPost;
