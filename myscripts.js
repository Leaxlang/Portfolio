// // function isElementInViewPort(element){
// //   let rect = element.getBoundingClientRect();
// //   console.log("The bounding Rect of element is ", rect)
// //   // get the height of the window 
// //   let viewPortBottom = window.innerHeight || document.documentElement.clientHeight;
// //   // get the width of the window 
// //   let viewPortRight = window.innerWidth || document.documentElement.clientWidth;

// //   let isTopInViewPort = rect.top >= 0,
// //       isLeftInViewPort = rect.left >= 0,
// //       isBottomInViewPort = rect.bottom <= viewPortBottom,
// //       isRightInViewPort = rect.right <= viewPortRight;

// //  // check if element is completely visible inside the viewport
// //  return (isTopInViewPort && isLeftInViewPort && isBottomInViewPort && isRightInViewPort);

// // } 
// // // let topEle = document.getElementById("Work");
// // let topEle = document.getElementsByClassName("code")
// //     console.log("Is top element visible:  ", isElementInViewPort(topEle) )

// // if(topEle === null){
// //   console.log("This has failed")
// // }else{
// //   console.log("Success!")
// // }

// var homeElement = document.getElementById("home");
// var differentObject = document.getElementById("differentObject");

// var observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.intersectionRatio > 0) {
//       // The "home" element is visible, change the appearance of the different object
//       differentObject.style.backgroundColor = "red";
//     }
//   });
// });

// observer.observe(homeElement);

// differentObject.style.backgroundColor = "red";

var sidebarLinks = document.querySelectorAll('.navi a');
var sections = document.querySelectorAll('.intro, .code.grid, .project-box.about, .project-box.contact');

window.onscroll = function() {
  sections.forEach(function(section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var sectionId = section.getAttribute('id');
    var sidebarLink = document.querySelector('.navi a[href="#' + sectionId + '"]');

    if (window.pageYOffset >= sectionTop && window.pageYOffset <= sectionTop + sectionHeight) {
      sidebarLinks.forEach(function(link) {
        link.style.color = 'black';
      });
      sidebarLink.style.color = 'green';
    }
  });
};


window.onscroll = function() {
  var sections = document.querySelectorAll('section');
  var sidebarLinks = document.querySelectorAll('.sidebar a');

  sections.forEach(function(section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var sectionId = section.getAttribute('id');
    var sidebarLink = document.querySelector('.sidebar a[href="#' + sectionId + '"]');

    if (window.pageYOffset >= sectionTop && window.pageYOffset <= sectionTop + sectionHeight) {
      sidebarLinks.forEach(function(link) {
        link.style.color = 'black';
      });
      sidebarLink.style.color = 'green';
    }
  });
};
