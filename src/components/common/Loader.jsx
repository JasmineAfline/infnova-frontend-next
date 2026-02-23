import React from "react";

const Loader = () => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner}></div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #ccc",
    borderTop: "4px solid #007bff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default Loader;