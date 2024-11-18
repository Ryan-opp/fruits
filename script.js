// Smooth scrolling to sections
function scrollToSection(id) {
    const section = document.getElementById(id);
    window.scrollTo({
      top: section.offsetTop - 20,
      behavior: 'smooth'
    });
  }
  

  