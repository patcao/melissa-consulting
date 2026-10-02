(() => {
  const storageKey = "melissa-consulting-theme";
  const themes = new Set([
    "quiet-editorial",
    "warm-studio",
    "structured-advisor",
    "modern-contrast"
  ]);

  const readTheme = () => {
    try {
      const savedTheme = localStorage.getItem(storageKey);
      return themes.has(savedTheme) ? savedTheme : "quiet-editorial";
    } catch (error) {
      return "quiet-editorial";
    }
  };

  const saveTheme = (theme) => {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      return;
    }
  };

  const currentTheme = readTheme();
  document.documentElement.dataset.theme = currentTheme;

  document.addEventListener("DOMContentLoaded", () => {
    const selector = document.querySelector("[data-theme-select]");
    if (!selector) {
      return;
    }

    selector.value = currentTheme;
    selector.addEventListener("change", () => {
      const nextTheme = themes.has(selector.value) ? selector.value : "quiet-editorial";
      document.documentElement.dataset.theme = nextTheme;
      saveTheme(nextTheme);
    });
  });
})();
