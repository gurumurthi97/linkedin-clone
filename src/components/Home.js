import React from "react";
import Post from "./Post";
function Home() {
  return (
    <div>
      <Post
        author={{
          name: "Dylan Sanusi-Goh",
          avatar:
            "https://media-exp1.licdn.com/dms/image/C5603AQFm6ACatS_3yg/profile-displayphoto-shrink_200_200/0/1616742471486?e=1671062400&v=beta&t=U2OZGKcozoSQy0NyX26i1fxGzEh5NBw9IAQ-svV1kWU",
          title:
            "Intelligent Technologies Engineer | AFR Top 100 Future Leader",
        }}
        content="I'm experienced and passionate about developing disruptive technologies - notably having delivered impact across large scale transport to medium scale internet of things, cloud, software development, data applications, and autonomous robotics projects .. 🥰."
        time="1d"
      />
    </div>
  );
}

export default Home;
