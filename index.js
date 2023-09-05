const menuBar = document.getElementById("icon-style");
const webHeaderInner = document.getElementsByClassName("webHeaderInner")[0];
const container = document.getElementsByClassName("container")[0];
const logo = document.getElementById("logoPic");
let flag = true;

//navitems hover effect
function navIterate(){
  Array.from(document.querySelectorAll("#navItems li a")).forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.color="#005FF9";
    });
    element.addEventListener("mouseout", () => {
      element.style.color="#2B3467";
    });
  });
}
navIterate();
//navbar mobile flipping
function listIterate() {
  Array.from(document.getElementsByClassName("listItems")).forEach((element) => {
    element.addEventListener("click", () => {
      webHeaderInner.style.transform = "rotateY(0deg)";
      menuBar.innerHTML = '<i class="fa-solid fa-bars"></i>';
      flag = true;
    });
  });
}
menuBar.addEventListener("click", () => {
  if (flag) {
    webHeaderInner.style.transform = "rotateY(-180deg)";
    menuBar.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  }
  else {
    webHeaderInner.style.transform = "rotateY(0deg)";
    menuBar.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
  flag = !flag;
  listIterate();
});

logo.addEventListener("click", () => {
  // const hi = document.getElementById("hiPic");
  // hi.style.visibility = "visible";
  // hi.style.marginLeft = "0%";
  // hi.style.transform = "rotateZ(0deg)";
  // container.style.opacity = "0.5";
  // setTimeout(() => {
  //   hi.style.marginLeft = "-85%";
  //   hi.style.transform = "rotateZ(-45deg)";
  //   container.style.opacity = "1";
  //   hi.style.visibility = "hidden";
  // }, 2000);
  location.reload();
})
// Certificates 
const minBox1 = document.getElementsByClassName('certBox1')[0];
const minBox2 = document.getElementsByClassName('certBox2')[0];
const mainBox = document.getElementsByClassName('certBoxMain')[0];
minBox1.addEventListener('click', () => {
  let temp = mainBox.innerHTML;
  mainBox.innerHTML = minBox1.innerHTML;
  minBox1.innerHTML = temp;
})
minBox2.addEventListener('click', () => {
  let temp = mainBox.innerHTML;
  mainBox.innerHTML = minBox2.innerHTML;
  minBox2.innerHTML = temp;
})

//coding profile
let activeScanner = document.getElementsByClassName("scanner")[0];
let profilectn = document.getElementsByClassName("codingProfilectn")[0];
let codingLogo = document.getElementsByClassName("codingLogo")[0];
let cbTitle = document.getElementsByClassName("cbTitle")[0];
let rating = document.getElementById("ratingCount");
let problems = document.getElementById("problemCount");
let cbBtn = document.getElementsByClassName("cbBtn")[0];

ScannerIterate();
function ScannerIterate() {
  Array.from(document.getElementsByClassName("scanner")).forEach((element) => {
    element.addEventListener("click", () => {
      activeScanner.classList.remove("activeScanner");
      profilectn.style.animation = "codingProfileAnimation 0.8s linear 1";
      setTimeout(() => {
        let siblingElement = element.nextElementSibling.innerHTML;
        if (siblingElement == "LeetCode") {
          codingLogo.innerHTML='<img src="./images/leetcode-icon.png">';
          cbTitle.innerHTML='<div>Leetcode</div>';
          rating.innerHTML='1431';
          problems.innerHTML='300+';
          rating.nextElementSibling.innerHTML="Contest Rating";
          cbBtn.innerHTML='<button><a href="https://leetcode.com/19R01A0457/" target="_blank">View Profile</a></button>';
        }
        if (siblingElement == "GeeksForGeeks") {
          codingLogo.innerHTML='<img src="./images/gfg-icon.png">';
          cbTitle.innerHTML='<div>Geeks For Geeks</div>';
          rating.innerHTML='558';
          problems.innerHTML='260+';
          rating.nextElementSibling.innerHTML="Coding Score";
          cbBtn.innerHTML='<button><a href="https://auth.geeksforgeeks.org/user/19r01a0457/practice" target="_blank">View Profile</a></button>';
        }
        if (siblingElement == "CodeChef") {
          codingLogo.innerHTML='<img src="./images/codechef-icon.png">';
          cbTitle.innerHTML='<div>Code Chef</div>';
          rating.innerHTML='1554(2⭐)';
          problems.innerHTML='120+';
          rating.nextElementSibling.innerHTML="Contest Rating";
          cbBtn.innerHTML='<button><a href="https://www.codechef.com/users/vignesh_457" target="_blank">View Profile</a></button>';
        }
      }, 400);
      element.classList.add("activeScanner");
      activeScanner = element;
      setTimeout(() => {
        profilectn.style.animation = "";
      }, 1000);
    });
  });
}
