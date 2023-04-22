const myForm = document.querySelector('form');
const professionArray = [];
let idCounter = 1;
myForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const profession = document.getElementById('profession').value;
    const dataObject = {
        id: idCounter,
        name: name,
        profession: profession,
        age: age
    };
    professionArray.push(dataObject);
    idCounter++;
    createCard();
    myForm.reset();

});

const container = document.getElementById('container');

function createCard() {
    let lastElement = professionArray[professionArray.length - 1]
    const card = document.createElement('div');
    card.classList.add('card');
    const idElement = document.createElement('p');
    idElement.textContent = lastElement.id;
    card.appendChild(idElement);
    const nameElement = document.createElement('p');
    nameElement.textContent = lastElement.name;
    card.appendChild(nameElement);
    const professionElement = document.createElement('p');
    professionElement.textContent = lastElement.profession;
    card.appendChild(professionElement);
    const ageElement = document.createElement('p');
    ageElement.textContent = lastElement.age;
    card.appendChild(ageElement);
    container.appendChild(card);
}



