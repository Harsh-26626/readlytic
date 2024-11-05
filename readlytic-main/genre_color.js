// Function to get URL parameters
function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Get color from the URL
  const color = getURLParameter("color");
  const button = getURLParameter("button");
  const hover = getURLParameter("hover");
  const text = getURLParameter("text");

  if (color) {
    document.documentElement.style.setProperty("--primary-color", color);
  }
  
  if (button) {
    document.documentElement.style.setProperty("--button-color", button);
  }
  
  if (button) {
    document.documentElement.style.setProperty("--hover-color", hover);
  }
  
  if (text) {
    document.documentElement.style.setProperty("--text-color", text);
  }
