import React from "react";
import { useState } from "react";
const NavLink = {
  textAlign: "center",
  fontSize: 12,
  minWidth: 60,
  padding: 6,
  marginLeft: 10,
  marginRight: 10,
  cursor: "pointer",
};
const selected = {
  borderBottom: "1.5px solid #555555",
  textAlign: "center",
  fontSize: 12,
  minWidth: 60,
  padding: 6,
  marginLeft: 10,
  marginRight: 10,

  cursor: "pointer",
};
function Navbar(props) {
  const [text, setText] = useState("");
  return (
    <div
      style={{
        backgroundColor: "white",
        height: 52,
        width: "100%",
        position: "fixed",
        top: 0,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: 900,
        }}
      >
        <div>
          <img src="linkedinlogo.png" alt="logo" style={{ height: 32 }} />
        </div>
        <div style={{ flex: 1 }}>
          <input
            placeholder="Search"
            style={{
              height: 32,
              width: 300,
              paddingLeft: 20,
              border: "0px",
              borderRadius: 5,
              backgroundColor: "#EEF3F8",
              marginLeft: "10px",
            }}
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
        <div
          style={props.content === "Home" ? selected : NavLink}
          onClick={() => props.setContent("Home")}
        >
          <img src="home.png" alt="home" style={{ height: 20 }} />
          <br />
          <span>Home</span>
        </div>
        <div
          style={props.content === "My Network" ? selected : NavLink}
          onClick={() => props.setContent("My Network")}
        >
          <img src="home.png" alt="home" style={{ height: 20 }} />
          <br />
          <span>My Network</span>
        </div>
        <div
          style={props.content === "Jobs" ? selected : NavLink}
          onClick={() => props.setContent("Jobs")}
        >
          <img src="home.png" alt="home" style={{ height: 20 }} />
          <br />
          <span>Jobs</span>
        </div>
        <div
          style={props.content === "Messaging" ? selected : NavLink}
          onClick={() => props.setContent("Messaging")}
        >
          <img src="home.png" alt="home" style={{ height: 20 }} />
          <br />
          <span>Messaging</span>
        </div>
        <div
          style={props.content === "Notification" ? selected : NavLink}
          onClick={() => props.setContent("Notification")}
        >
          <img src="home.png" alt="home" style={{ height: 20 }} />
          <br />
          <span>Notification</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
