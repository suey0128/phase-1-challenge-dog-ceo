addEventListener("DOMContentLoaded", (e) => { console.log('fullyloaded')});
console.log('%c HI', 'color: firebrick')


//Challenge 1 
//fetch data via jsons
function dogPhoto(url) {
    return fetch(url)
    .then(res => res.json())
    // .then(data => console.log(data['message']))
    .then(data => data['message'].forEach(displayPhoto))
    .catch(error => console.error('Error: ', error))
}

dogPhoto('https://dog.ceo/api/breeds/image/random/4');

// function that display the photo every photo
function displayPhoto (element) {
    let img = document.createElement('img');
    img.setAttribute('src',element);
    document.querySelector('#dog-image-container').append(img);
}


//Challenge 2
//fetch data via jsons
function dogBreed(url) {
    return fetch(url)
    .then(res => res.json())
    .then(data => Object.keys(data['message']).map(displayBreed))
    .catch(error => console.error('Error: ', error))
}

dogBreed('https://dog.ceo/api/breeds/list/all');

//function that put the breeds in the page
let li;
let ul;
function displayBreed (elem) {
    li = document.createElement('li');
    li.textContent = elem;
    li.className = 'item';
    document.querySelector('#dog-breeds').append(li)

    li.addEventListener('click', e => e.target.style.color = 'red');
    // //Challenge 3
    // ul = document.querySelectorAll('.item');
    // for (sublist of ul) {
    //     sublist.addEventListener('click', e => e.target.style.color = 'red')};


}



//Challenge 4
function onChange () {
    let breed = document.getElementById('breed-dropdown'); 
    let letter = breed.value;
    ul = document.querySelectorAll('.item');
    for (sublist of ul) {
        if (sublist.textContent.startsWith(`${letter}`) === false) {
        sublist.style.display = 'none'
       } else { sublist.style.display = ''}
    }
}


function fliterBreed () {
    document.getElementById('breed-dropdown').setAttribute('onchange','onChange()');
    }

fliterBreed ();

// document.addEventListener('DOMContentLoaded', function fliterBreed () {
//     document.getElementById('breed-dropdown').setAttribute('onchange','onChange()');
//     fliterBreed ();
// }
