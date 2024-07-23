import React from 'react';

export default function Winner() {
  return (
    <div>
      <h1 style={{
        textAlign: 'center',
        fontFamily: 'Open Sans, sans-serif', // Ensure the font is loaded
        color: 'darkorange',                // Corrected property name
        fontWeight: '600',
        fontSize: '36px',
        marginBottom: '20px'
      }}>
        Click the <span style={{color:'black'}}>below button</span>
      </h1>
      <a
        href="https://iplwinner.streamlit.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
        }}
      >
        <button
          style={{
            backgroundColor: 'darkorange',
            border: 'none',
            color: 'white',
            padding: '15px 32px',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'inline-block',
            fontSize: '16px',
            margin: '4px 2px',
            cursor: 'pointer',
            borderRadius: '12px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#e68a00')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'darkorange')}
        >
          Winner Predictor
        </button>
      </a>
    </div>
  );
}
