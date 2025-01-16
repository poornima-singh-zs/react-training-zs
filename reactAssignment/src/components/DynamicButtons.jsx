import React, { useState ,useEffect} from "react";
import "./DynamicButtons.css"; 

const DynamicButtons = () => {
  const initialArray=Array.from({ length: 12}, (_, index) => ({
    id: `Button-${index + 1}`,
    clicked: false,
  }))
  const [buttons, setButtons] = useState(initialArray);
  const [clickCount, setClickCount] = useState(0);
  const [popArray,setPopArray] = useState([]);


  const handleClick = (id) => {
    const flag = buttons.find((button) => button.id === id);
    if (clickCount >= 4 || flag.clicked) return; 
    popArray.push(id);
      setButtons((prevButtons) =>
            prevButtons.map((button) =>
              button.id === id && !button.clicked
                ? { ...button, clicked: true }
                : button
            )
          );
    
    setPopArray((prevOrder) => [...prevOrder, id]);

    setClickCount(clickCount + 1); 
        flag.clicked= true;

    // console.log("Poornima");

  };
  useEffect(() => {
   
    if (clickCount === 4) {
  
      const timeout = setTimeout(() => {
        reversePop();
      }, 2000); 
      return () => clearTimeout(timeout);
    }
    
  }, [clickCount]);

  const reversePop = () => {
    if (popArray.length > 0) {
      const interval = setInterval(() => {
        setPopArray((prevOrder) => {
          const lastClickedId = prevOrder[prevOrder.length - 1];

          setButtons((prevButtons) =>
            prevButtons.map((button) =>
              button.id === lastClickedId
                ? { ...button, clicked: false }
                : button
            )
          );
          const updatedPopArray = prevOrder.slice(0, -1);

          if (updatedPopArray.length === 0) {
            clearInterval(interval);
            setClickCount(0); 
          }

          return updatedPopArray;
        });
      }, 1000); 
    }
  };
  console.log("Poornima")
  return (
    <div className="container">
      <div className="buttons-container">
        {buttons.map((button) => (
          <button
            // disabled = {button.clicked && clickCount<=4 }
            key={button.id}
            onClick={() => handleClick(button.id)}
            className={`button ${button.clicked ? "clicked" : ""}`}
          >
            {button.id}
          </button>
        ))}
      </div>
    
    </div>
  );
};

export default DynamicButtons;


