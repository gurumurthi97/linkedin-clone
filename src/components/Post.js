import React from "react";
const container = {
  backgroundColor: "white",
  width: 450,
  borderRadius: 8,
};
function Post({ author, content, time }) {
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
      <div style={{ padding: "10px" }}>
        <img src="lady.jpg" width="100%" alt="lady" />
      </div>
    </div>
  );
}

export default Post;
