import React from "react";
import BackgroundPicture from "../Components/BackgroundPicture";
import Header from "../Components/Header";
import Posts from "../Components/Posts";
import Resultat from "../Components/Resultat";
import TextConquerant from "../Components/TextConquerant";

function Home() {
  return (
    <div>
      <Header />
      <BackgroundPicture />
      <TextConquerant />
      <Resultat />
      <Posts />
    </div>
  );
}

export default Home;
