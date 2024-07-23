import React from "react";

export const About = () => {
  return (
    <div style={{ paddingTop: '-90px' }}> {/* Adjust padding-top based on your navbar height */}
      <h1 style={{
        textAlign: 'center', // Center align the text
        fontFamily: 'Open Sans, sans-serif',
        fontWeight: '600',
        fontSize: '36px',
        color: '#000000',
        marginBottom: '20px'
      }}>
        <span style={{ color: 'darkorange' }}>Live</span> Score
      </h1>

      {/* Option 2: CricketScore */}
      <iframe
        src="https://www.flashscore.com//widget"
        width="100%"
        height="500"
        frameBorder="0" // Correct JSX property
        scrolling="yes"
      /> 
    </div>
  );
};
