
document.addEventListener("DOMContentLoaded", function() {
  // Check if dark mode preference is stored in localStorage
  const darkMode = localStorage.getItem("darkMode");

  // If dark mode preference is found, update the UI accordingly
  if (darkMode === "enabled") {
      enableDarkMode();
  }

  // Toggle dark mode when the dark mode toggle button is clicked
  const darkModeToggle = document.getElementById("darkbtn");
  if (darkModeToggle) {
      darkModeToggle.addEventListener("change", function() {
          if (this.checked) {
              enableDarkMode();
          } else {
              disableDarkMode();
          }
      });
  }

  function enableDarkMode() {
      // Enable dark mode by adding a class to the document body
      document.body.classList.add("dark-mode");
      // Store the dark mode preference in localStorage
      localStorage.setItem("darkMode", "enabled");
  }

  function disableDarkMode() {
      // Disable dark mode by removing a class from the document body
      document.body.classList.remove("dark-mode");
      // Remove the dark mode preference from localStorage
      localStorage.setItem("darkMode", null);
  }
});




function setDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    const darkBtn = document.getElementById('darkbtn');
    if (darkMode === 'enabled') {
      document.body.classList.add('dark-mode');
      darkBtn.checked = true;
    } else {
      document.body.classList.remove('dark-mode');
      darkBtn.checked = false;
    }
  }
  
  // Function to toggle dark mode
  function toggleDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
    setDarkMode();
  }
  
  // Event listener for dark mode toggle
  document.getElementById('darkbtn').addEventListener('change', toggleDarkMode);
  
  // Set dark mode initially
  setDarkMode();








 


