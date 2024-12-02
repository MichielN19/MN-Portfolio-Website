document.addEventListener("DOMContentLoaded", () => {
  const textareas = document.querySelectorAll("textarea");

  textareas.forEach((textarea) => {
    //textarea.style.height = textarea.scrollHeight + "px";
    textarea.style.height = "80px";
    textarea.addEventListener("input", (event) => {
      // if there is input then the height style is set to auto + the content
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    });
  });
});
