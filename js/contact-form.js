document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("user-email");

  input.addEventListener("input", function () {
    if (input.value.trim() !== "") {
      input.classList.add("filled");
    } else {
      input.classList.remove("filled");
    }
  });

  input.addEventListener("blur", function () {
    if (input.value.trim() === "") {
      input.classList.remove("filled");
    }
  });
});
