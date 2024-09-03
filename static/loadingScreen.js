function activateLoader(boolean) {
  if (boolean == "true") {
    setTimeout(() => {
      document.getElementById('loading-container').style.display = 'none';
      document.getElementById('content').style.display = 'block';
      setTimeout(() => {
        document.getElementById('content').style.opacity = 1;
      }, 200);
    }, 1000);
  } else {
    document.getElementById('loading-container').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('content').style.opacity = 1;
  }
}