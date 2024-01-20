//RootLayOut.js
import { Outlet } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import HomeButton from './HomeButton';
import "../Styles/RootLayout.css"

export default function RootLayout({ children }) {
  const [isHomeButtonRendered, setIsHomeButtonRendered] = useState(false);

  // Use useEffect to set the state when HomeButton is rendered
  useEffect(() => {
    setIsHomeButtonRendered(true);
  }, [children]);

  return (
    <div className='MainProjectContainer'>
      <Outlet />
      <div>
        <div>{children}</div>
          <div className='layout'>
            <div className='itemButton'>
              {isHomeButtonRendered && <HomeButton />}
            </div>
          </div>
      </div>
    </div>
  );
}
