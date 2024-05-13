import React from "react";
import "./workshop.css";

function Workshop() {
  return (
    <div className="workshop">
      <div className="abt-workshop">
        <div className="event-abt">
          <h1>Game designing and 3D Animation worshop</h1>
          <p>
            This game designing and 3D animation workshop typically involves
            teaching participants the fundamental concepts and skills required
            to create interactive digital experiences and visually stunning
            animations. Participants will learn about game mechanics, level
            design, storytelling, character development, and user experience
            design in the context of game design. In the realm of 3D animation,
            they would delve into modeling, texturing, rigging, animation
            principles, lighting, and rendering techniques.
          </p>
        </div>
        <center>
          <img
            className="workshopimg"
            src="https://tribunescript.com/wp-content/uploads/2023/09/biggestgames2023-blogroll-1671736997619-1671751842262.jpeg"
            alt="not"
          />
        </center>
      </div>
    </div>
  );
}

export default Workshop;
