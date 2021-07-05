import "./footer_style.css";
function Footer() {
  return (
    <div className="footer-wrapper">
      <footer>
        <div className="footer-top">
          <div className="top-texts">
            <img src="https://i.imgur.com/3zENtSD.png" alt="img" />
            <img src="https://i.imgur.com/ghbTAw7.png" alt="img" />
            <img src="https://i.imgur.com/ypYQf5f.png" alt="img" />
            <img src="https://i.imgur.com/6Q7z5Ae.png" alt="img" />
          </div>
          <div className="middle-texts">
            <span>HOME</span>
            <span>MENU</span>
            <span>STORY</span>
            <span>LOCATIONS</span>
            <span>CONTACT</span>
          </div>
          <div className="bottom-texts">
            <span>CONTACT</span>
            <span>BLOG</span>
            <span>CATEGORIES</span>
            <span>INFO</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt.
          </span>
          <span>© LOREM IPSUM | ALL RIGHTS RESERVED </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
