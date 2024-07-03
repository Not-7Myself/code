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
              <Map />
              <span class="sr-only">Google Maps Location</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
