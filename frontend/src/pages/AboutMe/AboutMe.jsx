import React from "react";
import "./AboutMe.css";
import { useNavigate } from "react-router-dom";
import ariel from "../AboutAssets/ariel.png";


const AboutMe = () => {
  const navigate = useNavigate();
  document.body.style.backgroundColor = "black";
  return (
    <div class="hero-image">
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div class="hero-text">
        <h1>I am Ariel Lord</h1>
        <p>And I'm a Photographer</p>
        <p>
          Hi! My name is Ariel and I am a self-taught video creator,
          photographer, and digital artist based in Dallas, TX. I created HAYI
          as a movement to capture the visuals of life. I have a passion for
          storytelling and inspiring an open mind. Whatever you choose to do
          with your life I believe it should be documented.
        </p>

        <p>
          I first fell in love with video editing and film as a kid. I have
          recently realized that it is my passion and I want to pursue it!
          Videography is my first love, my baby, but I have decided to get into
          photography as well. I get excited to capture raw moments that tend to
          go unnoticed. Moments where you can look back and think, "wow, this
          life really is beautiful". Happiness is the goal and I am here to
          bring it to you!
        </p>
        <p>
          My brand is here to help remind us that judgment comes from
          misunderstanding. So let's try to understand one another and spread
          the love!{" "}
        </p>
        <br />
        <br />
        <button
          className="btn btn-outline-danger"
          onClick={() => navigate("/calendar")}
        >
          Book Me
        </button>
        <br />
        <br />
        <img
          src={ariel}
          alt="Avatar"
          class="rounded"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default AboutMe;
