import ScrollableDivs from "./components/ScrollableDivs";
import "./Main.css";

const Main = () => {
  return (
    <main id="main">
      <div id="video">
        <h1>AWESOME VIDEO</h1>
      </div>
      <div className="breadcrumbs">
        <p>AWESOME BREADCRUMBS</p>
      </div>

      <div id="parentScrollDiv">
        <div
          className="scrollToContinue"
          style={{ backgroundColor: "rgb(119 196 255 / 37%)" }}
        >
          <h1>AWESOME SCROLL TO CONTINUE</h1>
          <h2>that vertical line</h2>
        </div>

        <ScrollableDivs />
      </div>
      <div className="content">
        <h1>AWESOME CONTENT</h1>
      </div>
      <div className="cards">
        <h1>AWESOME CARDS</h1>
      </div>
    </main>
  );
};

export default Main;
