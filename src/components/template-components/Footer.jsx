function Footer() {
  return (
  <footer>
    <p className="copyright">
      &copy; Project Author, <span data-copyright-year="">2024</span>
    </p>

    <section className="badges">
      <h3 className="visually-hidden">Badges</h3>
      <a href="humans.txt">
        <img src="/humanstxt.gif" width="88" height="31" loading="lazy" alt="humans.txt badge"/>
          Made by human
      </a>

      <a href="LICENSE">
        <img src="/license.svg" width="125" height="28" loading="lazy" alt="GitHub License"/>
      </a>

      <img src="/html5-badge.png" width="229" height="64" alt="HTML5 badge" loading="lazy"/>
    </section>

    <dialog data-cookie-dialog="">
      <p>
        This website uses cookies to improve its performance and user experience. By continuing, you agree to their use.
      </p>
      <button data-cookie-close="">Accept</button>
    </dialog>
  </footer>
  )
}

export default Footer