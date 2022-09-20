import "./ScrollableDivs.css";

const ScrollableDivs = () => {
  return (
    <>
      <div
        className="scrollableDiv firstScrollableDiv"
        style={{ backgroundColor: "#ff00c836" }}
      >
        <h1>SCROLLABLE DIV 1</h1>
      </div>
      <div className="scrollableDiv" style={{ backgroundColor: "#e4ee2c36" }}>
        <h1>SCROLLABLE DIV 2</h1>
      </div>
      <div className="scrollableDiv" style={{ backgroundColor: "#2d899936" }}>
        <h1>SCROLLABLE DIV 3</h1>
      </div>
      <div className="scrollableDiv" style={{ backgroundColor: "#9d02f736" }}>
        <h1>SCROLLABLE DIV 4</h1>
      </div>
      <div className="scrollableDiv" style={{ backgroundColor: "#304d6336" }}>
        <h1>SCROLLABLE DIV 5</h1>
      </div>
      <div className="scrollableDiv" style={{ backgroundColor: "#4ae90036" }}>
        <h1>SCROLLABLE DIV 6</h1>
      </div>
      <div
        className="scrollableDiv lastDiv"
        style={{ backgroundColor: "#e7f70836" }}
      >
        <h1>SCROLLABLE DIV 7</h1>
      </div>
    </>
  );
};

export default ScrollableDivs;
