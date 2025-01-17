const searchButton = document.querySelector('#search-submit-btn');

window.addEventListener( 'load', () => {
     createCard('Test','English','Beginner','This is just a test');
     createCard('Test','English','Beginner','This is just a test');
     createCard('Test','English','Beginner','This is just a test');
    }
)

function createCard(name, language, level, contentPreview){

    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('width', '18rem');

    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    cardTitle.textContent = name;
    const cardSubtitle = document.createElement('h6');
    cardSubtitle.className = 'card-subtitle mb2 text-muted';
    cardSubtitle.textContent = `${level} ${language}`;

    const cardText = document.createElement('p');
    cardText.textContent = contentPreview;

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardSubtitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);

    document.body.appendChild(card);

    console.log('card created');
}