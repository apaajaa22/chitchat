function Button({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      className="bg-button text-white w-72 h-12 rounded-md hover:scale-105 transform-gpu duration-300"
    >
      {label}
    </button>
  );
}

export default Button;
