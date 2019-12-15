// wertical menu handler
(function() {
  const aboutMeMenuWrapper = document.querySelector(".vertical-menu-container");
  const aboutMeMenuItems = document.querySelectorAll(".list-item");
  const descriptionBoxes = document.querySelectorAll(".description-box");
  const handleHover = e => {
    aboutMeMenuItems.forEach((menuItem, i) => {
      if (e.target === menuItem) {
        descriptionBoxes.forEach((box, index) => {
          box.classList.add("hide");
          // box.classList.remove("show");
          if (i === index) {
            box.classList.remove("hide");
            // box.classList.remove("show");
          }
        });
      }
    });
  };
  aboutMeMenuWrapper.addEventListener("mouseover", handleHover);
})();

//onResize, onload  class manipulation

// (function() {
//   const descriptionBoxes = document.querySelectorAll(".description-box");

//   const handleClassChangeOnLoad = () => {
//     descriptionBoxes.forEach(box => {
//       box.classList.add("hide");
//       descriptionBoxes[0].classList.remove("hide");
//     });
//   };

//   const handleResize = () => {
//     const screenWidth = window.innerWidth;
//     descriptionBoxes.forEach(box => {
//       if (screenWidth <= 1000) {
//         box.classList.remove("hide");
//       } else {
//         box.classList.add("hide");
//         descriptionBoxes[0].classList.remove("hide");
//       }
//     });
//   };
//   // window.addEventListener("load", handleClassChangeOnLoad);
//   window.addEventListener("resize", handleResize);
// })();

//onResize, onLoad class manipulation
(function() {
  const descriptionBoxes = document.querySelectorAll(".description-box");

  const manipulateBoxClasses = () => {
    const screenWidth = window.innerWidth;
    descriptionBoxes.forEach(box => {
      if (screenWidth <= 1000) {
        box.classList.remove("hide");
      } else {
        box.classList.add("hide");
        descriptionBoxes[0].classList.remove("hide");
      }
    });
  };
  window.addEventListener("load", manipulateBoxClasses);
  window.addEventListener("resize", manipulateBoxClasses);
})();
// Navbar onScroll handler

(function() {
  const navbar = document.querySelector(".navbar");
  const introContainer = document.querySelector(".introContainer");
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
      navbar.classList.add("sticky");
      introContainer.style.paddingTop = "50px";
    } else {
      navbar.classList.remove("sticky");
      introContainer.style.paddingTop = "0";
    }
  });
})();
// Hamburger menu handler

(function() {
  const button = document.querySelector(".hamburger");
  const navList = document.querySelector(".navbar-list");
  const body = document.querySelector("body");
  const handleHamburgerClick = e => {
    if (e.target === button) {
      console.log("button");
      navList.classList.add("mobile");
    } else if (e.target !== navList) {
      console.log("nie button");
      navList.classList.remove("mobile");
    }
  };

  body.addEventListener("click", handleHamburgerClick);
})();

// Owl-corousel handler
(function() {
  $(document).ready(function() {
    var owl = $(".owl-carousel");

    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true
      // nav: true
      // dots: true
    });
  });
})();
