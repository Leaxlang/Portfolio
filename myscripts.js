
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// function openMenu() {
//   var navi = document.getElementsByClassName("navi");
//   var menuBurger = document.getElementById("burger");
//   var menuCross = document.getElementById("burgerCross");
  
//   menuBurger.style.display = "none !important";
//   menuCross.style.display = "block !important";

//   for (var i = 0; i < navi.length; i++) {
//     var element = navi[i];
//       element.style.display = "block !important";
//   }
//  }

//  function closeMenu(){
//   var navi = document.getElementsByClassName("navi");
//   var menuBurger = document.getElementById("burger");
//   var menuCross = document.getElementById("burgerCross");
  
//   menuBurger.style.display = "block !important";
//   menuCross.style.display = "none !important";

//   for (var i = 0; i < navi.length; i++) {
//     var element = navi[i];
//       element.style.display = "none !important";
//   }
//  }
 

document.addEventListener('DOMContentLoaded', initNav);

function initNav() {
 const burger = document.querySelector('#burger');
//  const cross = document.querySelector('#burgerCross');
 const nav = document.querySelector('.navi'); // renamed from 'nav' to 'navElement'



 burger.addEventListener('click', () => {
   nav.classList.add('show');
   nav.classList.remove('unshow');
   burger.classList.add('show');
   burger.classList.remove('unshow');
  //  cross.classList.add('show');
  //  cross.classList.remove('unshow');
 });
 

 cross.addEventListener('click', () => {
   nav.classList.add('unshow');
   nav.classList.remove('show');
   
   burger.classList.remove('show');
   burger.classList.add('unshow');
   
  //  cross.classList.add('unshow');
  //  cross.classList.remove('show');
 });

  nav.addEventListener('click', () => {
  nav.classList.add('unshow');
  nav.classList.remove('show');
  
  burger.classList.remove('show');
  burger.classList.add('unshow');
  
  // cross.classList.add('unshow');
  // cross.classList.remove('show');
});
}

document.addEventListener('click', function(e) {
  var navElement = document.querySelector('.navi');
  var burger = document.querySelector('#burger');
  // var cross = document.querySelector('#burgerCross');
  
  // Check if the clicked target is not the menu, the burger icon, or the cross icon
  if (!navElement.contains(e.target) && !burger.contains(e.target) ) {
      // If the clicked target is outside of these elements, close the menu
      navElement.classList.add('unshow');
      navElement.classList.remove('show');
      burger.classList.add('unshow');
      burger.classList.remove('show');
      // cross.classList.add('unshow');
      // cross.classList.remove('show');
  }
});


//  document.addEventListener('DOMContentLoaded', nav)
 
//  function nav(){
//   const burger = document.querySelector('.burger');
//   const burgerCross = document.querySelector('.burgerCross');
  
  
//   burger.addEventListener('click', ()=>{
//     nav.classList.add('show');
//     nav.classList.remove('unshow');
//     burger.classList.add('unshow');
//     burger.classList.remove('show');
//     cross.classList.add('show');
//     cross.classList.remove('unshow');
//   })
// }


// document.addEventListener('DOMContentLoaded', navClose)
 
// function navClose(){
//  const burger = document.querySelector('.burger');
//  const burgerCross = document.querySelector('.burgerCross');
//  const nav = document.querySelector('.navi');
//  burgerCross.addEventListener('click', ()=>{
//   nav.classList.add('unshow');
//   nav.classList.remove('show');
//   burger.classList.add('show');
//   burger.classList.remove('unshow');
//   cross.classList.add('unshow');
//   cross.classList.remove('show');
//  })
// }


// const burger = document.querySelector('#burger');
// const cross = document.querySelector('#burgerCross');
// const nav = document.querySelector('.navi');

// burger.addEventListener('click', () => {
//    nav.classList.add('show');
//    nav.classList.remove('unshow');
//    burger.classList.add('unshow');
//    burger.classList.remove('show');
//    cross.classList.add('show');
//    cross.classList.remove('unshow');
// });

// cross.addEventListener('click', () => {
//    nav.classList.add('unshow');
//    nav.classList.remove('show');
//    burger.classList.add('show');
//    burger.classList.remove('unshow');
//    cross.classList.add('unshow');
//    cross.classList.remove('show');
// });


// burger.addEventListener('click', () => {
//   nav.classList.toggle('show');
//   if(nav.classList.contains('show')) {
//     burger.style.display = 'none';
//     cross.style.display = 'block';
//   } else {
//     burger.style.display = 'block';
//     cross.style.display = 'none';
//   }
//  });
 

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
