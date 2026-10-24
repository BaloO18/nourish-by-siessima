/* Applique le thème (jour/nuit) avant l'affichage pour éviter un clignotement */
try {
  var t = localStorage.getItem("theme");
} catch (e) {}
document.documentElement.dataset.theme =
  t || (matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
