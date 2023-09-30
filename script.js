const dropdownButton = document.getElementById("dropdown-button");
const dropdownMenu = document.getElementById("dropdown-menu");

dropdownButton.addEventListener("click", function () {
  const expanded = this.getAttribute("aria-expanded") === "true";
  this.setAttribute("aria-expanded", !expanded);
  dropdownMenu.classList.toggle("hidden");
});

// Close the dropdown when clicking outside
document.addEventListener("click", function (event) {
  if (
    !dropdownButton.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    dropdownButton.setAttribute("aria-expanded", "false");
    dropdownMenu.classList.add("hidden");
  }
});
