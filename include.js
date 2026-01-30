document.addEventListener("DOMContentLoaded", () => {

  /* HEADER */
  fetch("includes/header.html")
    .then(r => r.text())
    .then(d => document.getElementById("header").innerHTML = d);

  /* FOOTER */
  fetch("includes/footer.html")
    .then(r => r.text())
    .then(d => document.getElementById("footer").innerHTML = d);

  /* POPUP */
  if (!localStorage.getItem("popupSeen")) {
    fetch("includes/popup.html")
      .then(r => r.text())
      .then(d => {
        document.body.insertAdjacentHTML("beforeend", d);

        setTimeout(() => {
          document.getElementById("popup-ad").style.display = "flex";
        }, 3000);

        document.getElementById("close-popup").addEventListener("click", () => {
          document.getElementById("popup-ad").style.display = "none";
          localStorage.setItem("popupSeen", "true");
        });
      });
  }

});
