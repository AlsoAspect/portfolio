console.log("frrr")

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });
  
    const fadeInElements = document.querySelectorAll('.coolanimation');
    fadeInElements.forEach(element => {
      observer.observe(element);
    });
  });