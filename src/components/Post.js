import React, { useState } from "react";
const container = {
  backgroundColor: "white",
  width: 650,
  borderRadius: 8,
  margin: "auto",
  marginTop: "10px",
  marginButtom: "10px",
};
function Post({ author, content, time, likeCount }) {
  const [like, setLike] = useState(false);
  return (
    <div style={container}>
      <div
        style={{ display: "flex", alignItems: "center", paddingBottom: "10px" }}
      >
        <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <img
            src="gon.jpg"
            alt="gon"
            style={{ height: 50, borderRadius: "50px" }}
          />
        </div>
        <div>
          <span style={{ fontSize: "1.3rem", fontWeight: 600, color: "#222" }}>
            {author.name}
          </span>
          <br />
          <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "#aaa" }}>
            {author.title}
          </span>
          <br />
          <span>{time}</span>
        </div>
      </div>
      <div style={{ textAlign: "justify", padding: "10px" }}>{content}</div>
      <div style={{ padding: "10px", textAlign: "center" }}>
        <img src="lady.jpg" width="50%" alt="lady" />
      </div>
      <div style={{ textAlign: "justify", padding: "10px", color: "#777" }}>
        {like ? (
          <span>You and other {likeCount} people like this post</span>
        ) : (
          <span>{likeCount} People liked the post</span>
        )}
      </div>
      <div style={{ display: "flex", padding: "10px", textAlign: "center" }}>
        <div
          style={{ flex: 1, cursor: "pointer", color: like ? "blue" : "black" }}
          onClick={() => {
            setLike((prevLike) => !prevLike);
          }}
        >
          <strong>Like</strong>
        </div>
        <div style={{ flex: 1, cursor: "pointer" }}>Commit</div>
        <div style={{ flex: 1, cursor: "pointer" }}>Share</div>
        <div style={{ flex: 1, cursor: "pointer" }}>Send</div>
      </div>
    </div>
  );
}

export default Post;
