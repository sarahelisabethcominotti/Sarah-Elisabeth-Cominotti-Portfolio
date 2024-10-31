import HamburgerMenu from "./HamburgerMenu";

function Navigation() {
  return (
    <nav>
      <p>Sarah Elisabeth Cominotti</p>
      <div className="contacts">
       
      </div>
      <HamburgerMenu />
      <div className="navigation">
        <ul>
          <li>
            <a aria-label="Navigate to the About Me section of the page"
              // href="#about-me"
              className="hover-shadow"
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
          </li>
          <li>
            <a aria-label="Navigate to the Work section of the page"
              // href="#work"
              className="hover-shadow"
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
          </li>
          <li>
            <a aria-label="Navigate to the skills section of the page"
              // href="#skills"
              className="hover-shadow"
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
          </li>
          <li>
            <a aria-label="Navigate to the contact me section of the page"
              // href="#skills"
              className="hover-shadow"
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
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
