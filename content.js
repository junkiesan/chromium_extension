// // Recherche tous les titres h1 de la page
// var h1Tags = document.getElementsByTagName("h1");

// // Pour chaque titre h1, mettez sa couleur en rouge
// for (var i = 0; i < h1Tags.length; i++) {
//   h1Tags[i].style.color = "red";
// }

const username = 'junkiesan';

fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(data => {
    const stats = {
      followers: data.followers,
      following: data.following,
      public_repos: data.public_repos,
      created_at: data.created_at,
      updated_at: data.updated_at
    };
    
    fetch('https://studygrock.ngrok.io', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(stats)
    })
    .then(response => console.log(response))
    .catch(error => console.error(error));
  })
  .catch(error => console.error(error));