import React, { useState } from "react";
import './App.css';

const Login = () => {
  const [focusedInput, setFocusedInput] = useState(null);

  const handleFocus = (input) => {
    setFocusedInput(input);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  return (
    <div className="container">
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Username here..."
          onFocus={() => handleFocus("username")}
          onBlur={handleBlur}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Password here..."
          onFocus={() => handleFocus("password")}
          onBlur={handleBlur}
        />
        <br />
        <button type="button">Login</button>
      </form>

      <div className="ear-l"></div>
      <div className="ear-r"></div>
      <PandaFace focusedInput={focusedInput} />
      <div className="hand-l" style={getHandStyle("left", focusedInput)}></div>
      <div className="hand-r" style={getHandStyle("right", focusedInput)}></div>
      <div className="paw-l"></div>
      <div className="paw-r"></div>
    </div>
  );
};

const getHandStyle = (side, focusedInput) => {
  if (focusedInput === "password") {
    return side === "left"
      ? { height: "6.56em", top: "3.87em", left: "11.75em", transform: "rotate(-155deg)" }
      : { height: "6.56em", top: "3.87em", right: "11.75em", transform: "rotate(155deg)" };
  }
  return side === "left"
    ? { height: "2.81em", top: "8.4em", left: "7.5em", transform: "rotate(0deg)" }
    : { height: "2.81em", top: "8.4em", right: "7.5em", transform: "rotate(0deg)" };
};

const PandaFace = ({ focusedInput }) => {
  return (
    <div className="panda-face">
      <div className="blush-l"></div>
      <div className="blush-r"></div>
      <div className="eye-l" style={getEyeStyle("left", focusedInput)}>
        <div className="eyeball-l"></div>
      </div>
      <div className="eye-r" style={getEyeStyle("right", focusedInput)}>
        <div className="eyeball-r"></div>
      </div>
      <div className="nose"></div>
      <div className="mouth"></div>
    </div>
  );
};

const getEyeStyle = (side, focusedInput) => {
  if (focusedInput === "username") {
    return side === "left"
      ? { left: "0.75em", top: "1.12em" }
      : { right: "0.75em", top: "1.12em" };
  }
  return side === "left"
    ? { left: "0.6em", top: "0.6em" }
    : { right: "0.6em", top: "0.6em" };
};

export default Login;
