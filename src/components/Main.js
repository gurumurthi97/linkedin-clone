import React from "react";

function Main(props) {
  if (props.content === "Home") {
    return <div>Home</div>;
  } else if (props.content === "My Network") {
    return <div>My Network</div>;
  } else if (props.content === "Jobs") {
    return <div>Jobs Page</div>;
  } else if (props.content === "Messaging") {
    return <div>Messaging</div>;
  } else {
    return <div>Notification</div>;
  }
}

export default Main;
