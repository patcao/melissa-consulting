(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const selector = document.querySelector("[data-layout-select]");
    if (!selector) {
      return;
    }

    const currentLayout = selector.dataset.currentLayout;
    const selectedOption = Array.from(selector.options).find((option) => option.dataset.layout === currentLayout);
    if (selectedOption) {
      selector.value = selectedOption.value;
    }

    selector.addEventListener("change", () => {
      if (selector.value) {
        window.location.href = selector.value;
      }
    });
  });
})();