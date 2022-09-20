/*

const [init, setInit] = useState(false);

Scroll to top on full Load Page
useEffect(() => {
  window.scrollTo({ top: 0 });
  setInit(true);
}, []);

useEffect(() => {
  if (init) {
    const styckyElement = document.querySelector(".scrollToContinue");
    const mainElement = document.getElementById("main");
    let trashholdBottomPropert = 0;

    const setSticky = () => {
      let propertyOfElement = window
        .getComputedStyle(styckyElement, null)
        .getPropertyValue("position");

      // const elDistanceToTop = mainElement.getBoundingClientRect().top;

      console.log({
        pageOffset: window.pageYOffset,
        window: window.innerHeight,
      });

      if (window.pageYOffset > window.innerHeight) {
        styckyElement.style.position = "sticky";
        if (propertyOfElement === "sticky") {
          if (trashholdBottomPropert >= -styckyElement.scrollHeight) {
            styckyElement.style.transform = `translateY(${trashholdBottomPropert}px)`;
          }
          trashholdBottomPropert =
            trashholdBottomPropert <= -100
              ? -100
              : trashholdBottomPropert - 4;
        }
      } else {
        if (window.pageYOffset <= 700) {
          // trashholdBottomPropert -= 4;
          console.log({ trashholdBottomPropert: -trashholdBottomPropert });
          styckyElement.style.transform = `translateY(${-trashholdBottomPropert}px)`;
        }
        styckyElement.style.position = "";
        trashholdBottomPropert = 0;
      }
    };

    // window.addEventListener("scroll", setSticky);
  }
  // return window.removeEventListener("scroll", setSticky);
}, [init]);

<main id="main">
  <div id="video">
    <h1>AWESOME VIDEO</h1>
  </div>
  <div className="breadcrumbs">
    <p>AWESOME BREADCRUMBS</p>
  </div>

  <div id="parentScrollDiv">
    <div className="scrollDiv">
      <ScrollableDivs />
    </div>
  </div>

  <div className="content">
    <h1>AWESOME CONTENT</h1>
  </div>
  <div className="cards">
    <h1>AWESOME CARDS</h1>
  </div>
</main>;

let bottomProperty = window
  .getComputedStyle(styckyElement, null)
  .getPropertyValue("bottom");

const main_container_top = mainContainer.getBoundingClientRect().top;

return true is element is visible
function isElementVisible(el) {
  var rect = el.getBoundingClientRect(),
    vWidth = window.innerWidth || document.styckyElement.clientWidth,
    vHeight = window.innerHeight || document.styckyElement.clientHeight,
    efp = function (x, y) {
      return document.elementFromPoint(x, y);
    };

  // Return false if it's not in the viewport
  if (
    rect.right < -100 ||
    rect.bottom < -100 ||
    rect.left > vWidth ||
    rect.top > vHeight
  )
    return false;

  // Return true if any of its four corners are visible
  return (
    el.contains(efp(rect.left, rect.top)) ||
    el.contains(efp(rect.right, rect.top)) ||
    el.contains(efp(rect.right, rect.bottom)) ||
    el.contains(efp(rect.left, rect.bottom))
  );
}

console.log({
  trashholdBottomPropert: trashholdBottomPropert,
  scrollHeight: styckyElement.scrollHeight,
  isElementVisible: isElementVisible(lastDiv),
});

const yolooo = (e) => {
  const window_top = window.pageYOffset;
  const main_container_top = mainContainer.getBoundingClientRect().top;

  console.log("height", {
    sticky_top: main_container_top,
    height: translatable.offsetHeight,
    sticky_height: main_container_height,
    window_height: window_height,
  });

  console.log({ window_top: window_top, lastScrollTop: lastScrollTop });

  // if scrolling DOWN
  if (window_top > lastScrollTop) {
    console.log({
      main_scroll_height: mainContainer.scrollHeight,
      main_client_height: mainContainer.clientHeight,
      main_container_top: main_container_top,
    });

    console.log(
      `the start: if (${window_top} > ${lastScrollTop}) -> ${
        window_top > lastScrollTop
      } : 
      ${window_top + main_container_top}(${
        window_top + main_container_top !== 0
      }) && (${
        main_container_top + main_container_height > window_top + window_height
      }) ${main_container_top} + ${main_container_height} > ${window_top} + ${window_height}`
    );

    console.log(
      `the start: if (${window_top} > ${lastScrollTop}) -> ${
        window_top > lastScrollTop
      } : (${
        main_container_top + main_container_height >
        window_top + window_height
      }) ${main_container_top} + ${main_container_height} > ${window_top} + ${window_height}`
    );
    if (
      main_container_top < window_top &&
      main_container_top + main_container_height >
        window_top + window_height
    ) {
    if (
      window_top + main_container_top !== 0 &&
      main_container_top + main_container_height > window_top + window_height
    ) {
      const translate_muh_shit_up =
        -(
          (window_top -
            main_container_top -
            (window_height / translatable.offsetHeight) *
              (window_top - main_container_top)) /
          10
        ).toFixed(1) + "%";
      console.log("pass first if", { tras_shit: translate_muh_shit_up });

      translatable.style.transform = `translateY(${translate_muh_shit_up})`;
    }
  } else {
    console.log("the continuee");
    if (
      main_container_top + main_container_height > window_top &&
      main_container_top < window_top
    ) {
      const translate_muh_shit_up =
        -(
          (window_top -
            main_container_top -
            (window_height / translatable.offsetHeight) *
              (window_top - main_container_top)) /
          10
        ).toFixed(1) + "%";
      // translatable.style.transform = `translateY(${translate_muh_shit_up})`;
      // console.log("pass second if", { tras_shit: translate_muh_shit_up });
    }
  }
  lastScrollTop = window_top <= 0 ? 0 : window_top; // For Mobile or negative scrolling
};

function freezeContainerOnWheel(event) {
  // if (event.deltaY > -1 && event.deltaY < 53) {
  //   event.preventDefault();
  //   mainContainer.removeEventListener("onwheel", mainContainerOnWheel);
  // }

  delay =
    delay > -1
      ? delay > freezeContainer.scrollTop
        ? (delay = freezeContainer.scrollTop)
        : (delay += event.deltaY)
      : 0;

  freezeContainer.scrollTop = delay;
  console.log({
    delay: delay,
    freezeContainer: freezeContainer.scrollTop,
    window: window.scrollY,
    parent: freezeContainer.offsetParent,
  });
}

const mainContainer = document.getElementById("main");

const freezeContainer = document.getElementById("parentScrollDiv");
const translatable = document.querySelector(".scrollDiv");

const main_container_height = mainContainer.offsetHeight;
const window_height = window.innerHeight;

const height = mainContainer.scrollHeight - mainContainer.clientHeight;

let lastScrollTop = 0;

window.addEventListener("scroll", yolooo);
mainContainer.onwheel = mainContainerOnWheel;
window.addEventListener("scroll", yolooo, { passive: false });
window.onwheel = yolooo;
freezeContainer.onwheel = yolooo;

return () => document.removeEventListener("onwheel", yolooo());

function mainContainerOnWheel(event) {
  console.log({
    scrollY: window.scrollY,
    pageYOffset: window.pageYOffset,
  });

  if (window.pageYOffset > 735 && window.pageYOffset < 743) {
    console.log("aki");
    // event.preventDefault();

    // freezeContainer.onwheel = freezeContainerOnWheel;
    freezeContainer.removeEventListener("onwheel", mainContainerOnWheel);
  }

  // works !
  mainDelay =
    mainDelay > -1
      ? mainDelay > mainContainer.clientHeight - freezeContainer.clientHeight
        ? (mainDelay =
            mainContainer.clientHeight - freezeContainer.clientHeight)
        : (mainDelay += window.scrollY)
      : 0;

  // mainContainer.scrollTop = mainDelay;
  console.log({
    delay: delay,
    mainDelay: mainDelay,
    window: window.scrollY,
    mainContainerTOP: freezeContainer.scrollTop,
  });
}

*/
