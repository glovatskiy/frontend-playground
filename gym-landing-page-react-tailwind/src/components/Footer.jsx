const Footer = () => {
  return (
    <>
      <footer>
        <a href="/">GYM</a>
        <a href="#about">About</a>
        <a href="#trainers">Trainers</a>
        <a href="#classes">Classes</a>
        <a href="#memberships">Membership</a>
        <address>
          <a href="mailto:info@gym.example" className="footer-email">
            info@gym.example
          </a>
          <p className="footer-address">Prague, Czech Republic</p>
        </address>
        <p className="footer-copyright">© 2026 GYM. All rights reserve</p>
      </footer>
    </>
  );
};

export default Footer;