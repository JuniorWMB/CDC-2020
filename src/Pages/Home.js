import React from "react";
import BackgroundPicture from "../Components/BackgroundPicture";
import Header from "../Components/Header";
import TextConquerant from "../Components/TextConquerant";

function Home() {
  return (
    <div style={{ height: "100vh" }}>
      <Header />
      <BackgroundPicture />
      <TextConquerant />
    </div>
  );
}

export default Home;
