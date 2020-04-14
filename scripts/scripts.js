// wertical menu handler
(function () {
  const aboutMeMenuWrapper = document.querySelector(".vertical-menu-container");
  const aboutMeMenuItems = document.querySelectorAll(".list-item");
  const descriptionBoxes = document.querySelectorAll(".description-box");

  const handleHover = (e) => {
    aboutMeMenuItems.forEach((menuItem, i) => {
      if (e.target === menuItem) {
        //before doing anything - remove the "secondary" and "primary" classes
        aboutMeMenuItems.forEach((element) => {
          element.classList.remove("secondary");
          element.classList.remove("primary");
        });
        menuItem.classList.add("primary");
        changeNextAndPreviousItems(i);
        showParticularBox(i);
      }
    });
    function showParticularBox(i) {
      descriptionBoxes.forEach((box, index) => {
        box.classList.add("hide");
        if (i === index) {
          box.classList.remove("hide");
        }
      });
    }
    // based on the hovered menu index - manipulate the next and previous ones
    function changeNextAndPreviousItems(i) {
      if (aboutMeMenuItems[i - 1] && aboutMeMenuItems[i + 1]) {
        aboutMeMenuItems[i - 1].classList.add("secondary");
        aboutMeMenuItems[i + 1].classList.add("secondary");
      } else if (!aboutMeMenuItems[i - 1]) {
        aboutMeMenuItems[i + 1].classList.add("secondary");
      } else if (!aboutMeMenuItems[i + 1]) {
        aboutMeMenuItems[i - 1].classList.add("secondary");
      }
    }
  };
  aboutMeMenuWrapper.addEventListener("mouseover", handleHover);
})();

//onResize, onLoad class manipulation
(function () {
  const descriptionBoxes = document.querySelectorAll(".description-box");

  const manipulateBoxClasses = () => {
    const screenWidth = window.innerWidth;
    descriptionBoxes.forEach((box) => {
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
(function () {
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
(function () {
  const button = document.querySelector(".hamburger");
  const navList = document.querySelector(".navbar-list");
  const body = document.querySelector("body");
  const handleHamburgerClick = (e) => {
    if (e.target === button) {
      navList.classList.add("mobile");
    } else if (e.target !== navList) {
      navList.classList.remove("mobile");
    }
  };
  body.addEventListener("click", handleHamburgerClick);
})();

// Owl-corousel handler
(function () {
  $(document).ready(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      loop: true,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      onInitialized: () => {
        let navDotButtons = document.querySelectorAll(".owl-dot");
        navDotButtons.forEach((button) => {
          button.setAttribute("aria-label", "switch-reference");
        });
      },
    });
  });
})();
// loader handler
(function () {
  const overlay = document.querySelector(".overlay");
  window.addEventListener("load", () => {
    overlay.classList.add("hidden");
  });
  overlay.addEventListener("animationend", () => {
    overlay.style.display = "none";
  });
})();
//get the data from stackoverflow
(function () {
  const repValue = document.querySelector(".reputation .counter-value");
  const silverBadgeValue = document.querySelector(".silver .counter-value");
  const bronzeBadgeValue = document.querySelector(".bronze .counter-value");

  const stackDataHandler = (apiData) => {
    repValue.textContent = apiData.reputation;
    silverBadgeValue.textContent = apiData.badge_counts.silver;
    bronzeBadgeValue.textContent = apiData.badge_counts.bronze;
  };

  fetch(
    "https://api.stackexchange.com/2.2/users/12259643?order=desc&sort=reputation&site=stackoverflow"
  )
    .then((res) => res.json())
    .then((data) => stackDataHandler(data.items[0]))
    .catch((err) => console.log(err));
})();
