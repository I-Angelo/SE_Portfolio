// ScrollControl.js
import { useEffect } from 'react';

export function useScrollControl(enableScrolling) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow; // Save the original overflow value

    if (enableScrolling) {
      document.body.style.overflow = 'auto !important'; // Enable scrolling
    } else {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    }

    return () => {
      // Reset overflow to its original state when the component unmounts
      document.body.style.overflow = originalOverflow;
    };
  }, [enableScrolling]);
}
