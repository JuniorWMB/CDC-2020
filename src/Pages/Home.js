import React from "react";
import BackgroundPicture from "../Components/BackgroundPicture";
import Header from "../Components/Header";

function Home() {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <BackgroundPicture />
    </div>
  );
}

export default Home;
