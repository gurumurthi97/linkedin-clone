import React from "react";
import { useState } from "react";
const NavLink = {
  textAlign: "center",
  fontSize: 12,
  minWidth: 60,
  padding: 6,
  marginLeft: 10,
  marginRight: 10,
};
const selected = {
  borderBottom: "1.5px solid #555555",
};
function Navbar() {
  const [text, setText] = useState("");
  return (
    <div
      style={{
        backgroundColor: "white",
        height: 52,
        width: "100%",
        position: "fixed",
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
        <div style={NavLink}>
          <img src="home.png" alt="home" style={{ height: 20 }} />
          <br />
          <span>Home</span>
        </div>
        <div style={NavLink}>
          <img src="home.png" alt="home" style={{ height: 20 }} />
          <br />
          <span>My Network</span>
        </div>
        <div style={NavLink}>
          <img src="home.png" alt="home" style={{ height: 20 }} />
          <br />
          <span>Jobs</span>
        </div>
        <div style={NavLink}>
          <img src="home.png" alt="home" style={{ height: 20 }} />
          <br />
          <span>Messageing</span>
        </div>
        <div style={NavLink}>
          <img src="home.png" alt="home" style={{ height: 20 }} />
          <br />
          <span>Notification</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
