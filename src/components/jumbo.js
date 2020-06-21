import React from "react";

const styles = {
  card: {
    fontFamily: "times",
    fontSize: "68px",
    fontWeight: "bold"
  },
  background: {
    backgroundColor: "brown"
  }
  
};

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid" style={styles.background}>
      <div className="container">
        <h1 className="display-4 text-center" style={styles.card}>Vinnie's Employee Directory</h1>       
      </div>
    </div>
  );
}

export default Jumbotron;
