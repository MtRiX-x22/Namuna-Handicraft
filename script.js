 // Function to load the header HTML
 function loadHeader() {
    fetch('header.html')
      .then(response => response.text())
      .then(data => {
        document.getElementById('header-container').innerHTML = data;
      })
      .catch(error => console.error('Error loading header:', error));
  }

  // Load the header when the page loads
  window.onload = loadHeader;