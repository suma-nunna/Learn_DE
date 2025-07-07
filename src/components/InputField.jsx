// import React from "react";

export default function InputField({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Enter English traslation."
      className="w-full p-2 border rounded mb-4"
    />
  );
}

// export default InputField;
