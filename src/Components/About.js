
import React, { useState } from 'react';

export default function About(props) {

  const myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#244a68' : 'white'
  };

  return (

    <div className="container">

      <h1
        className="my-3"
        style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}
      >
        About TextUtils
      </h1>

      <div className="accordion" id="accordionExample">

        {/* First Accordion */}

        <div className="accordion-item">

          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <strong>Analyze Your Text</strong>
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils helps you analyze your text quickly and efficiently.
              You can check the total number of words, characters and
              estimated reading time.
            </div>
          </div>

        </div>

        {/* Second Accordion */}

        <div className="accordion-item">

          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>

          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free text manipulation tool.
              It allows you to convert text into uppercase or lowercase,
              remove extra spaces and copy text with just one click.
            </div>
          </div>

        </div>

        {/* Third Accordion */}

        <div className="accordion-item">

          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>

          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils works in modern web browsers such as Chrome,
              Firefox, Edge and Safari. You can use it to manage
              your text anytime, anywhere.
            </div>
          </div>

        </div>

      </div>

    </div>

  );
}









