document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy]");

  if (!button) {
    return;
  }

  try {
    await navigator.clipboard.writeText(button.dataset.copy);
    const previousText = button.textContent;
    button.textContent = "Kopyalandı";
    window.setTimeout(() => {
      button.textContent = previousText;
    }, 1400);
  } catch {
    button.textContent = button.dataset.copy;
  }
});
