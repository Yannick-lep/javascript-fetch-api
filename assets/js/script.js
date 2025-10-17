fetch("./assets/js/data.json")
  .then((reponse) => reponse.json())
  .then((data) => {
    console.log(data);
    let outputHtml = '';
    data.results.forEach(
      user => {
        outputHtml += `
        <figure class="user">
          <h4>${user.name.first} ${user.name.last}</h4>
          <img src="${user.picture.thumbnail}" alt="${user.name.first} ${user.name.last}">
          <figcaption>${user.email}</figacaption>
        </figure>
        `;
      }
    );
    document.getElementById("users").innerHTML = outputHtml
  })
  .catch((error) => {
    console.log(error);
  });
