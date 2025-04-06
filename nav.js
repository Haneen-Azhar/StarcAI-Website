// Smoothly scrolls to #section2 when the feature button is clicked
document.getElementById("feature-button").addEventListener("click", () => {
    const targetElement = document.getElementById("section2");
  
    // Get the element's position relative to the top of the viewport
    const elementTop = targetElement.getBoundingClientRect().top;
  
    // Scroll to the element smoothly
    window.scrollTo({
      top: elementTop,
      behavior: "smooth"
    });
  });
  