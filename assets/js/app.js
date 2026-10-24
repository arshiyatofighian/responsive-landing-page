let menu = document.querySelector(".mobileMenu");
let properties = document.querySelector(".properties");
let properties2 = document.querySelector(".searchLocation");
let btnMenu = document.getElementById("btnMenu");
let rentbtn = document.getElementById("rentbtn");
let buytbtn = document.getElementById("buytbtn");
let selltbtn = document.getElementById("selltbtn");
let rentbtn2 = document.getElementById("rentbtn2");
let buybtn2 = document.getElementById("buybtn2");
let sellbtn2 = document.getElementById("sellbtn2");
// const mobileMenu = () => {
//   menu.classList.add("show");
//   btnMenu.style.transform = "rotate(90deg)";
//   //   e.stopPropagation();
// };
btnMenu.addEventListener("click", () => {
  menu.classList.toggle("show");
  if (menu.classList.contains("show"))
    btnMenu.style.transform = "rotate(90deg)";
  else {
    btnMenu.style.transform = "rotate(0deg)";
  }
  //   e.stopPropagation();
});

document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !btnMenu.contains(e.target)) {
    console.log(btnMenu.contains(e.target));
    console.log(menu.contains(e.target));

    menu.classList.remove("show");
    btnMenu.style.transform = "rotate(0deg)";
  }
});

rentbtn.addEventListener("click", () => {
  rentbtn.classList.toggle("clickbtn");
  buytbtn.classList.remove("clickbtn");
  selltbtn.classList.remove("clickbtn");

  if (rentbtn.classList.contains("clickbtn")) {
    properties.classList.add("show");
    properties2.classList.add("showSearch");
  } else {
    properties.classList.remove("show");
    properties2.classList.remove("showSearch");
  }
});

buytbtn.addEventListener("click", () => {
  buytbtn.classList.toggle("clickbtn");
  rentbtn.classList.remove("clickbtn");
  selltbtn.classList.remove("clickbtn");
  if (buytbtn.classList.contains("clickbtn")) {
    properties.classList.add("show");
    properties2.classList.add("showSearch");
  } else {
    properties.classList.remove("show");
    properties2.classList.remove("showSearch");
  }
});

selltbtn.addEventListener("click", () => {
  selltbtn.classList.toggle("clickbtn");
  rentbtn.classList.remove("clickbtn");
  buytbtn.classList.remove("clickbtn");

  if (selltbtn.classList.contains("clickbtn")) {
    properties.classList.add("show");
    properties2.classList.add("showSearch");
  } else {
    properties.classList.remove("show");
    properties2.classList.remove("showSearch");
  }
});

rentbtn2.addEventListener("click", () => {
  rentbtn2.classList.add("click");
  buybtn2.classList.remove("click");
  sellbtn2.classList.remove("click");
});

buybtn2.addEventListener("click", () => {
  buybtn2.classList.add("click");
  rentbtn2.classList.remove("click");
  sellbtn2.classList.remove("click");
});

sellbtn2.addEventListener("click", () => {
  sellbtn2.classList.add("click");
  buybtn2.classList.remove("click");
  rentbtn2.classList.remove("click");
});
