import React from "react";

function TextInput({ label, placeholder, type }) {
  return (
    <div className="w-2/5 flex flex-col space-y-2">
      <p className="text-white">{label}</p>
      <input
        placeholder={placeholder}
        className="pl-3 h-14 rounded-md bg-input text-white"
        type={type ?? "text"}
      />
    </div>
  );
}

export default TextInput;
