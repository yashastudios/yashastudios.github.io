/* ==========================================================================
   Yasha Studios — Theme Toggle
   --------------------------------------------------------------------------
   Handles light/dark mode behavior.

   Theme priority:
   1. Use the visitor's saved preference if one exists.
   2. Otherwise, use the visitor's system preference.
   3. Keep the toggle button's accessible label/state in sync.

   The active theme is stored on the <html> element as:
   <html data-theme="light">
   or
   <html data-theme="dark">
   ========================================================================== */

(() => {
  const STORAGE_KEY = "yasha-studios-theme";
  const THEME_LIGHT = "light";
  const THEME_DARK = "dark";

  const root = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");
  const systemDarkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  /*
    localStorage can fail in some privacy modes or unusual browser contexts.
    These helpers keep the theme script from breaking the page if that happens.
  */
  const getSavedTheme = () => {
    try {
      const savedTheme = window.localStorage.getItem(STORAGE_KEY);

      if (savedTheme === THEME_LIGHT || savedTheme === THEME_DARK) {
        return savedTheme;
      }
    } catch (error) {
      return null;
    }

    return null;
  };

  const saveTheme = (theme) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      /*
        If saving fails, the visual theme can still change for this page view.
        There is no need to interrupt the visitor.
      */
    }
  };

  /* Use system preference only when the visitor has not chosen a theme. */
  const getSystemTheme = () => {
    return systemDarkQuery.matches ? THEME_DARK : THEME_LIGHT;
  };

  const getInitialTheme = () => {
    return getSavedTheme() || getSystemTheme();
  };

  /*
    Keep the visible theme, aria-pressed state, and accessible button label
    synchronized.
  */
  const applyTheme = (theme) => {
    const isDark = theme === THEME_DARK;

    root.dataset.theme = theme;

    if (!themeToggle) {
      return;
    }

    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light theme" : "Switch to dark theme"
    );
  };

  const getNextTheme = () => {
    return root.dataset.theme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
  };

  /* Apply the best available theme as soon as the script runs. */
  applyTheme(getInitialTheme());

  if (!themeToggle) {
    return;
  }

  themeToggle.addEventListener("click", () => {
    const nextTheme = getNextTheme();

    applyTheme(nextTheme);
    saveTheme(nextTheme);
  });

  /*
    If the visitor has not manually chosen a theme, keep following system
    preference changes while the page is open.
  */
  systemDarkQuery.addEventListener("change", () => {
    if (!getSavedTheme()) {
      applyTheme(getSystemTheme());
    }
  });
})();
