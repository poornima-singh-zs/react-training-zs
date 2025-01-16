
import React, { useRef, useEffect, useContext } from "react";
import Counter from "./Counter";
import { ThemeContext } from "./ThemeChanger";
import "./BottomComponent.css";

const BottomComponent = () => {
  const bottomRef = useRef();
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleDoubleClick = (e) => {
    setTheme();
  };

  return (
    <div
      className="bottom-container"
      ref={bottomRef}
      onDoubleClick={handleDoubleClick}
      style={{ backgroundColor: theme }}
    >
      <p className="para">
        Theme Color: <span style={{color: "black" }}>{theme}</span>
      </p>
      <Counter />
    </div>
  );
};



export default BottomComponent;

