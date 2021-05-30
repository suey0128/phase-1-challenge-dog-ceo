addEventListener("DOMContentLoaded", (e) => { 
    console.log('fullyloaded')
    getDogPhoto()
    .then(data => data['message'].forEach(dogPhotoUrl => displayPhoto(dogPhotoUrl)))
    .catch(error => console.error('Error: ', error))
    dogBreed() 
})
console.log('%c HI', 'color: firebrick')



//Challenge 1 
//fetch data via jsons
function getDogPhoto() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    
}


// function that display the photo every photo
function displayPhoto (dogPhotoUrl) {
    let img = document.createElement('img');
    img.setAttribute('src',dogPhotoUrl);
    document.querySelector('#dog-image-container').append(img);
}


//Challenge 2
//fetch data via jsons
function dogBreed() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => Object.keys(data['message']).map(displayBreed))
    .catch(error => console.error('Error: ', error))
}


//function that put the breeds on the page
function displayBreed (dogBreed) {
    const li = document.createElement('li');
    li.textContent = dogBreed;
    li.className = 'item'
    document.querySelector('#dog-breeds').append(li)
}


//add event listener to make the dog breed name red
document.querySelector('#dog-breeds').addEventListener('click', (e) => {
        e.target.style.color = 'red'
})


//Challenge 4, select breeds by the starting letter with add event listener
document.querySelector('#breed-dropdown').addEventListener('change', (e) => {
    const ul = document.querySelectorAll('#dog-breeds li')
    for (sublist of ul) {
        if (sublist.textContent.startsWith(`${e.target.value}`) === false) {
        sublist.style.display = 'none'
        } else { sublist.style.display = ''}
    }
})


// //Challenge 4, select breeds by the starting letter with onchange attribute
// function onChange() {
//     const breed = document.getElementById('breed-dropdown'); 
//     const letter = breed.value;
//     const ul = document.querySelectorAll('#dog-breeds li')
//     for (sublist of ul) {
//         if (sublist.textContent.startsWith(`${letter}`) === false) {
//         sublist.style.display = 'none'
//        } else { sublist.style.display = ''}
//     }
// }


// function fliterBreed () {
//     document.getElementById('breed-dropdown').setAttribute('onchange','onChange()');
//     }

// fliterBreed ();