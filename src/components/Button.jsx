import React from "react";
function Button({ isLoading }) {
  return (
    <button
      className="submit-button"
      name="submit-button"
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? (
        <div className="spinner-border spinner-border-sm" role="status">
          <span className="sr-only"></span>
        </div>
      ) : (
        "Konversi"
      )}
    </button>
  );
}
export default Button;
