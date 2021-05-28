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
    //create element 
    let img = document.createElement('img');
    //write the content of the element
    img.setAttribute('src',element);
    //append the element to HTML
    document.querySelector('#dog-image-container').append(img);
}



//Challenge 2
//fetch data via jsons
function dogBreed(url) {
    return fetch(url)
    .then(res => res.json())
    //make the keys of data['message'] an array
    .then(data => Object.keys(data['message']).map(displayBreed))
    // .then(data => console.log(Object.keys(data['message'])))
    .catch(error => console.error('Error: ', error))
}

//good resource for listing object and keys: https://masteringjs.io/tutorials/fundamentals/foreach-object#:~:text=JavaScript's%20Array%23forEach()%20function,an%20array%20first%2C%20using%20Object.&text=values()%20%2C%20or%20Object.


dogBreed('https://dog.ceo/api/breeds/list/all');

//function that put the breeds in the page
let li;
let ul;
function displayBreed (elem) {
    //create element 
    li = document.createElement('li');
    //write the content of the element
    li.textContent = elem;
    // console.log(elem);
    //append the element to HTML
    li.className = 'item';
    document.querySelector('#dog-breeds').append(li);


    //Challenge 3
    // useful site on how to addeventlistener on a list: https://www.codeinwp.com/snippets/add-event-listener-to-multiple-elements-with-javascript/
    ul = document.querySelectorAll('.item');
    // console.log(ul);
    for (sublist of ul) {
        sublist.addEventListener('click', e => e.target.style.color = 'red')};



}



// //Challenge 4
// //select drop down :https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onchange
// //setAttubrite onchange


// // // console.log(dropDownMenu);

// // //drop down : https://www.w3schools.com/jsref/prop_select_value.asp
// // // .fliter()
// // //select with starting letter
// // //addEventListener 


function onChange () {
    let breed = document.getElementById('breed-dropdown'); 
    let letter = breed.value;
    // console.log('breed:', breed, 'letter:', letter);
    ul = document.querySelectorAll('.item');
    for (sublist of ul) {
//   console.log(typeof sublist.textContent)
        if (sublist.textContent.startsWith(`${letter}`) === false) {
        sublist.style.display = 'none'
       } else { sublist.style.display = ''}
    // console.log(sublist)
    }
}

// logic: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_onchange
function fliterBreed () {
    document.getElementById('breed-dropdown').setAttribute('onchange','onChange()');
    }

fliterBreed ();





// addEventListener("DOMContentLoaded", Challenge4());

