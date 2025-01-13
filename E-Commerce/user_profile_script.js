function toggleSublist(event) {
  event.preventDefault();
  const listItem = event.target.closest("li");
  const sublist = listItem.querySelector(".sublist");
  const mainLink = event.target.closest("a");

  if (sublist) {
    sublist.style.display =
      sublist.style.display === "block" ? "none" : "block";
    mainLink.classList.toggle("active");
  }
}
