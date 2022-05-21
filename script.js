const blockOfUSer = document.querySelector(".user_block");
const addUserItem = document.querySelector("#addUserItem");
const arrUsers = [{
        "id": 1,
        "name": "Veronika",
        "email": "vgroves0@vistaprint.com",
        "age": 50,
        "city": "Javhlant",
        "gender": "Female",
        "inn": 2604048463
    }, {
        "id": 2,
        "name": "Correy",
        "email": "cskidmore1@shop-pro.jp",
        "age": 50,
        "city": "Junglinster",
        "gender": "Male",
        "inn": 5396152028
    }, {
        "id": 3,
        "name": "Chrissie",
        "email": "csobieski2@go.com",
        "age": 40,
        "city": "Mercaderes",
        "gender": "Female",
        "inn": 7437115687
    }, {
        "id": 4,
        "name": "Adrianna",  
        "email": "awharrier3@hud.gov",
        "age": 33,
        "city": "Manuel Cavazos Lerma",
        "gender": "Non-binary",
        "inn": 6292774004
    }, {
        "id": 5,
        "name": "Fairlie",
        "email": "feliasen4@bing.com",
        "age": 34,
        "city": "Радовиш",
        "gender": "Female",  
        "inn": 5943534093 
}];

addUsers(arrUsers);

blockOfUSer.addEventListener('click', onBlockOfUserClick);

const itemHeaders = document.querySelectorAll(".user_item-header");
const itemBodies = document.querySelectorAll(".user_item-body");

function onBlockOfUserClick(event){
    for(let i = 0; i < itemHeaders.length; i++){
        if(event.target == itemHeaders[i]){
            itemBodies[i].classList.toggle('show');
        }
    }
}

function addUsers(arrOfUsers){
    for(let userData of arrOfUsers){
        addUserData(userData);
    }
}

function addUserData(obj){
    const addItem = addUserItem.innerHTML
    .replace(/{{name}}/g, obj['name'])
    .replace(/{{inn}}/g, obj['inn'])
    .replace(/{{age}}/g, obj['age'])
    .replace(/{{email}}/g, obj['email'])
    .replace(/{{city}}/g, obj['city'])
    .replace(/{{gender}}/g, obj['gender']);
    blockOfUSer.insertAdjacentHTML("beforeend", addItem);
}