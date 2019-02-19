import forestParkOptions from './routes/forest-park.js';

const runContainerAll = document.getElementById('run-container-all');
const userNameDisplay = document.getElementById('user-name-display');
const search = window.location.search;
const searchParams = new URLSearchParams(search);
const routeUrl = searchParams.get('destination');
const userJson = window.localStorage.getItem('user');

if(!userJson) {
    window.location = './index.html';
}
const user = JSON.parse(userJson);
userNameDisplay.textContent = user.name;

let routeOptions = null;

if(routeUrl === 'forest-park') {
    routeOptions = forestParkOptions;
}

const routeOptionsJson = JSON.stringify(routeOptions);
window.localStorage.setItem('destination-array', routeOptionsJson);


// $(function() {
//     $('#slider-range').slider({
//         range: true,
//         min: 1,
//         max: 50,`
//         values: [1, 15],
//         slide: function(event, ui) {
//             $('#amount').val(ui.values[ 0 ] + '- ' + ui.values[ 1 ] + 'mi.');
//         }
//     });
//  //   $('#amount').val(('#slider-range').slider('values', 0) +
//       '- ' + $('#slider-range').slider('values', 1));
// });

//get values from mile sliders
//get values from bathroom and kid friendly
//elevation slider
//button to filter
//event listener to listen for check boxes and range values to display results
const bathroomFilter = document.getElementById('bathroom');
const familyFilter = document.getElementById('family');

function filter() {
    const routes = document.getElementsByClassName('run-container');
    
    let filterByBathrooms = false;
    let filterByFamily = false;
    
    if(bathroomFilter.checked) {
        filterByBathrooms = true;
    }
    if(familyFilter.checked) {
        filterByFamily = true;
    }
    for(let i = 0; i < routes.length; i++){
        routes[i].classList.remove('hidden');
        console.log(routes[i]);
        const route = routeOptions[i];
        console.log(route);
        
        if(filterByFamily){``
            if(!route.familyFriendly) {
                console.log('filterbyfamily');
                routes[i].classList.add('hidden');
            }
        }
        if(filterByBathrooms){
            if(!route.bathroom) {
                routes[i].classList.add('hidden');
                console.log('filterbybroom');
            }
        }
    }
        //target the run-container within run filter
        // get all elements of run container
        // unhide all run containers
        // run containers through for loop to add or remove class of hidden

}


for(let i = 0; i < routeOptions.length; i++) {
    const route = routeOptions[i];



    const runContainer = document.createElement('section');
    runContainer.classList.add('run-container');
    
    const runImage = document.createElement('img');
    runImage.src = route.imageMapPage;
    runImage.alt = 'image of run';
    runImage.classList.add('display-photo');
    const imageContainer = document.createElement('section');
    imageContainer.classList.add('image-container');
    const imageLink = document.createElement('a');
    imageLink.href = 'route.html?routeid=' + encodeURIComponent(route.id);
    imageContainer.appendChild(runImage);
    imageLink.appendChild(imageContainer);
    runContainer.appendChild(imageLink);
    
    const link = document.createElement('a');
    link.href = 'route.html?routeid=' + encodeURIComponent(route.id);
    const runName = document.createElement('h3');
    runName.textContent = route.name;
    link.appendChild(runName);
    const distance = document.createElement('h4');
    distance.textContent = route.distance + ' miles';
    const elevation = document.createElement('h4');
    elevation.textContent = route.elevation + ' feet';
    const description = document.createElement('p');
    description.textContent = route.description;
    const runInfoContainer = document.createElement('section');
    runInfoContainer.classList.add('run-info-container');
    runInfoContainer.appendChild(link);
    runInfoContainer.appendChild(distance);
    runInfoContainer.appendChild(elevation);
    runInfoContainer.appendChild(description);
    runContainer.appendChild(runInfoContainer);
    
    const runIcons = document.createElement('section');
    runIcons.classList.add('run-icon-container');
    const completedIcon = document.createElement('img');
    completedIcon.classList.add('completed-icon');
    const favoriteIcon = document.createElement('img');
    favoriteIcon.classList.add('favorite-icon');
    const thumbnailMap = document.createElement('img');
    thumbnailMap.classList.add('thumbnail-map');
    
    completedIcon.src = './assets/completed.png';
    if(route.favorite) {
        favoriteIcon.src = './assets/favorite.png';
    }
    else {
        favoriteIcon.src = './assets/not-favorite.png';
    }
    thumbnailMap.src = route.thumbnailMap;
    runIcons.appendChild(completedIcon);
    runIcons.appendChild(favoriteIcon);
    runIcons.appendChild(thumbnailMap);
    
    runContainer.appendChild(runIcons);
    runContainerAll.appendChild(runContainer);
}
    


    

// filter();

bathroomFilter.addEventListener('change', function(){
    // location.reload();
    filter();
});

familyFilter.addEventListener('change', function(){
    // location.reload();
    filter();
});

