import React, { useEffect } from 'react';

const OnlineSessionPage = () => {
  const openZoomApp = () => {
    window.location.href = 'zoommtg://zoom.us/join';
  };

  useEffect(() => {
    openZoomApp();
  }, []);

  return (
    <div>
      <h1>Online Session Page</h1>
      <p>Opening Zoom application...</p>
    </div>
  );
};

export default OnlineSessionPage;
