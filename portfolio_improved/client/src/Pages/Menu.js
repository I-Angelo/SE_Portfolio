//Menu.js
import React, { useEffect, useState } from 'react';
import '../Styles/Menu.css';
import LoginToggle from '../layouts/LoginToggle';
import GreetingMessage from '../layouts/GreetMessage';
import MenuToggle from '../layouts/MenuToggle';
import IsometricImages from '../layouts/IsometricImages';
import image1 from "../static/Image1.png";

const Menu = () => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // Set the mounting state to true when the component is mounted

    return () => {
      setIsMounted(false); // Set the mounting state to false when the component is unmounted
    };
  }, []);

  

  return (
    <>
    {isMounted && (
      <>
          <GreetingMessage />

          <LoginToggle />

          <IsometricImages>
              <div
                className="image1"
                style={{ backgroundImage: `url(${image1})`, backgroundSize: 'cover' }} />
              <div
                className="image2"
                style={{ backgroundImage: 'url(path_to_your_image_2)' }}
              />
              <div
                className="image3"
                style={{ backgroundImage: 'url(path_to_your_image_3)' }}
              />
              <div
                className="image4"
                style={{ backgroundImage: 'url(path_to_your_image_4)' }}
              />
          </IsometricImages>

          <MenuToggle />
        </>
          )}
      </>
);
};

export default Menu;


