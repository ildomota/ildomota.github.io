import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Resets scroll position on every route change so navigating to a new
// page always starts at the top instead of keeping the previous scroll.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
