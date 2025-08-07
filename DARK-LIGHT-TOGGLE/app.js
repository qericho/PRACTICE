  const checkbox = document.getElementById("checkbox");
    const container = document.getElementById("container");
    const myH1 = document.getElementById("h1");

    // Load saved mode on page load
    window.addEventListener("DOMContentLoaded", () => {
      const savedMode = localStorage.getItem("mode");
      if (savedMode === "light") {
        checkbox.checked = true;
        setLightMode();
      } else {
        checkbox.checked = false;
        setDarkMode();
      }
    });

    // Toggle mode on checkbox change
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        setLightMode();
        localStorage.setItem("mode", "light");
      } else {
        setDarkMode();
        localStorage.setItem("mode", "dark");
      }
    });

    // Functions to apply styles
    function setLightMode() {
      container.style.backgroundColor = "#fff";
      myH1.style.color = "#000";
      myH1.textContent = "LIGHT MODE";
    }

    function setDarkMode() {
      container.style.backgroundColor = "#333";
      myH1.style.color = "#fff";
      myH1.textContent = "DARK MODE";
    }