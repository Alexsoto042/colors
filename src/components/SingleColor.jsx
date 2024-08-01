import { useState } from "react";

const SingleColor = ({ hexColor }) => {
  const [copy, setCopy] = useState(false);
  const handleCopy = (color) => () => {
    const colorNew = `#${color}`;
    navigator.clipboard.writeText(colorNew);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 1000);
  };

  return (
    <div className="single-card" style={{ backgroundColor: `#${hexColor}` }}>
      <div className="content">
        <p>#{hexColor}</p>
        <button onClick={handleCopy(hexColor)}>
          <img src="./clipTransparent.png" alt="copy" />
        </button>
      </div>
      {copy ? <p className="copy-alert">Copied to Clipboard</p> : null}
    </div>
  );
};

export default SingleColor;
