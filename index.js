document.addEventListener("DOMContentLoaded", () => {
  /**
   * Animates a numeric counter from start to end when the element enters the viewport.
   * @param {string} id - The ID of the element to update.
   * @param {number} start - The starting number.
   * @param {number} end - The final number to reach.
   * @param {number} duration - Total time (ms) over which to animate.
   * @param {string} suffix - Optional suffix to append (e.g., %, +).
   */
  function animateCounter(id, start, end, duration, suffix = '') {
    const element = document.getElementById(id);
    let currentValue = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const intervalId = setInterval(() => {
            currentValue += increment;
            element.textContent = currentValue + suffix;

            if (currentValue === end) {
              clearInterval(intervalId);
            }
          }, stepTime);

          observer.unobserve(element); // Run animation once
        }
      });
    });

    observer.observe(element);
  }

  // Initialize counters with their respective values
  animateCounter("count1", 0, 31, 3000, '%');
  animateCounter("count2", 0, 22, 2500, '%');
  animateCounter("count3", 0, 500, 3000, '+');
});
