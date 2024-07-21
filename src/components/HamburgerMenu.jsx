
function HamburgerMenu() {

    function hamburgerToggle() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
  return (
<div className="topnav">
  {/* <a href="#home" className="active">Logo</a> */}
  <div id="myLinks">
    <a href="#about-me">About Me</a>
    <a href="#work">Work</a>
    <a href="#skills">Skills</a>
  </div>
  <a href="javascript:void(0);" className="icon" onClick={hamburgerToggle}>
    <i className="fa fa-bars"></i>
  </a>
</div>
  )
}

export default HamburgerMenu