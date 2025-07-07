// import React from "react";

const DisplayButtons = ({ text, onClick, color = "blue" }) => {
  const colorStyle = {
    blue: "bg-blue-500",
    green: "bg-green-500",
  }[color];

  return (
    <button
      className={`px-4 py-2 rounded ${colorStyle} text-white`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default DisplayButtons;
