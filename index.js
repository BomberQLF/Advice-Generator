const adviceApi = function callApi() {
    return fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data.slip.advice;
        })
        .catch(error => {
            console.error("L'appel de l'API n'a pas fonctionné comme il se doit :", error);
            return "Erreur lors de la récupération du conseil.";
        });
}

// Appel initial pour afficher un conseil au chargement de la page
adviceApi().then(advice => {
    const citation = document.querySelector('p');
    citation.innerHTML = advice;
});

// Génération d'un nouveau conseil lors du clic sur le bouton
const button = document.getElementById('generate');
button.addEventListener('click', () => {
    adviceApi().then(advice => {
        const citation = document.querySelector('p');
        citation.innerHTML = advice;
    });
});