// Recherche tous les titres h1 de la page
var h1Tags = document.getElementsByTagName("h1");

// Pour chaque titre h1, mettez sa couleur en rouge
for (var i = 0; i < h1Tags.length; i++) {
  h1Tags[i].style.color = "red";
}
