var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-us",
      start: "0% 95%",
      end: "40% 50%",
      scrub: 1,
      // markers: true,
    }
  });
  
  tl.to("#fanta", {
    top: "150%",
    left:"28%",
  },'orange');
  
  tl.to("#orange-cut", {
    top: "155%",
    left:"28%",
    width:"20%",
  },'orange');
  
  tl.to("#oranges", {
    top: "166%",
    left:"75%",
  },'orange');
  
  tl.to("#leaf2", {
    top: "107%",
    left: "87%",
    rotate:"-100deg",
  },'orange');
  
  tl.to("#leaf3", {
    top: "115%",
    right: "81%",
    rotate:"520deg",
    width:"18%",
  },'orange');
  

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".cans-cards",
      start: "10% 95%",
      end: "50% 50%",
      scrub: 1,
      // markers: true,
    }
  });
  tl2.from("#lorem", {
    rotate:"520deg",
    left:"50%",
    top:"50%",
  },'sec2');
  
  tl2.from("#sprite", {
    left:"50%",
    top:"50%",
  },'sec2');
  
  tl2.to("#orange-cut", {
    top:"206%",
    left:"36%",
    width:"22%",
    rotate:"520deg",
  },'sec2');
  
  
  tl2.to("#fanta", {
    top:"249%",
    left:"47%",
    width:"29%",
  },'sec2');
  
  

  
