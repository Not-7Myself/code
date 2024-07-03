import Insta from "../icons/Insta";
import Discord from "../icons/Discord";
import YT from "../icons/YT";
import Map from "../icons/Map";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-bottom">
          <div class="footer-logo">
            <a href="https://flowbite.com/" class="footer-logo-link">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                class="footer-logo-img"
                alt="FlowBite Logo"
              />
              <span class="footer-logo-text">CODE</span>
            </a>
          </div>
          <div class="footer-social">
            <a href="#" class="footer-social-link">
              <Insta />
              <span class="sr-only">Instagram page</span>
            </a>
            <a href="#" class="footer-social-link">
              <Discord />
              <span class="sr-only">Discord community</span>
            </a>
            <a href="#" class="footer-social-link">
              <YT />
              <span class="sr-only">Youtube Channel</span>
            </a>
            <a href="#" class="footer-social-link">
              <svg
                class="footer-social-icon"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <span class="sr-only">Google Maps Location</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
