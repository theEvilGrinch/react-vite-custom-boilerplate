import { useEffect } from 'react';
import setCookies from '../../utils/cookies.js';

function CookieDialog() {
  useEffect(() => {
    setCookies();
  }, []);

  return (
    <dialog data-cookie-dialog>
      <p>
        This website uses cookies to improve its performance and user experience. By continuing, you agree to their use.
      </p>
      <button data-cookie-close>Accept</button>
    </dialog>
  );
}

export default CookieDialog;