///////////////////////////////////////////////////////////
// Getting and setting the copyright year to the current year

const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

///////////////////////////////////////////////////////////
//Getting mobile navigation to work

const navBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

navBtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
//Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    //Scoll to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    //Scoll to selected section
    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }

    //Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      header.classList.toggle("nav-open");
    }
  });
});

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();
