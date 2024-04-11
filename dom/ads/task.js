document.addEventListener("DOMContentLoaded", function() {

    function rotateText() {

      const currentActive = document.querySelector(".rotator__case_active");
      const nextActive = currentActive.nextElementSibling || document.querySelector(".rotator__case");
      currentActive.classList.remove("rotator__case_active");
      nextActive.classList.add("rotator__case_active");
      const textColor = nextActive.getAttribute("data-color") || "black";
      const rotatorCases = document.querySelectorAll(".rotator__case");
      rotatorCases.forEach(caseElement => {
        caseElement.style.color = textColor;
      });

      const rotationSpeed = parseInt(nextActive.getAttribute("data-speed")) || 1000;
      setTimeout(rotateText, rotationSpeed);
    }

    rotateText();
});