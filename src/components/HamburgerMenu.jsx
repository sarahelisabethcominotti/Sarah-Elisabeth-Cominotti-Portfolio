function HamburgerMenu() {
  function hamburgerToggle() {
    var x = document.getElementById("myLinks");
    var hamburger = document.getElementById("hamburger");
    var cross = document.getElementById("cross");
    if (x.style.display === "block") {
      x.style.display = "none";
      cross.style.display = "none";
      hamburger.style.display = "block";

      hamburger.style.color = "#fff";
    } else {
      x.style.display = "block";
      cross.style.display = "block";
      hamburger.style.display = "none";

      hamburger.style.color = "#ff00c8";
    }
  }
  return (
    <div className="topnav">
      {/* <a href="#home" className="active">Logo</a> */}
      <div id="myLinks">
        <a aria-label="Navigate to the About Me section of the page"
          // href="#about-me"
          onClick={() => {
            var element = document.getElementById('about-me');
            var headerOffset = 100;
              var elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.scrollY - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            }); 
          }}
        >
          About Me
        </a>
        <a aria-label="Navigate to the Work section of the page"
          // href="#work"
          onClick={() => {
            var element = document.getElementById('work');
            var headerOffset = 100;
              var elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.scrollY - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            }); 
          }}
        >
          Work
        </a>
        <a aria-label="Navigate to the Skills section of the page"
          // href="#skills"
          onClick={() => {
            var element = document.getElementById('skills');
            var headerOffset = 100;
              var elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.scrollY - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            }); 
          }}
        >
          Skills
        </a>
        <a aria-label="Navigate to the contact me section of the page"
          // href="#skills"
          onClick={() => {
            var element = document.getElementById('contact-me');
            var headerOffset = 100;
              var elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.scrollY - headerOffset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            }); 
          }}
        >
          Contact Me
        </a>
      </div>
      <a aria-label="Open hamburger menu" href="javascript:void(0);" className="icon" onClick={hamburgerToggle}>
        <i className="fa fa-bars" id="hamburger"></i>
        <p id="cross">X</p>
      </a>
    </div>
  );
}

export default HamburgerMenu;
