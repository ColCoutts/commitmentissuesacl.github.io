import forestParkOptions from './routes/forest-park.js';

const routeMap = document.getElementById('route-map');
const elevationChart = document.getElementById('elevation-chart');
const routeDetails = document.getElementById('route-details');
const detailPhoto1 = document.getElementById('detail-photo-1');
const detailPhoto2 = document.getElementById('detail-photo-2');
const detailPhoto3 = document.getElementById('detail-photo-3');
const moreInfoSection = document.getElementById('more-info-section');


const userJson = window.localStorage.getItem('user');
if(!userJson) {
    window.location = 'index.html';
}

const user = JSON.parse(userJson);
let routeOptions = null;
console.log(user.destination);

if(user.destination === 'forest-park') {
    routeOptions = forestParkOptions;
}
console.log(routeOptions);
const urlParams = new URLSearchParams(window.location.search);
const routeId = urlParams.get('routeid');

let route = null;
for(let i = 0; i < routeOptions.length; i++) {
    if(routeOptions[i].id === routeId) {
        route = routeOptions[i];
        break;
    }
}

routeMap.src = route.largeMap;
elevationChart.src = route.elevationChart;


const runName = document.createElement('h3');
runName.textContent = route.name;
const distance = document.createElement('h4');
distance.textContent = route.distance + ' miles';
const elevation = document.createElement('h4');
elevation.textContent = route.elevation + ' feet';
const gpsCoordinates = document.createElement('h5');
gpsCoordinates.textContent = route.gpsCoordinates;
const description = document.createElement('p');
description.textContent = route.description;
const routeDetailsContainer = document.createElement('section');
routeDetailsContainer.classList.add('route-details-container');
routeDetailsContainer.appendChild(runName);
routeDetailsContainer.appendChild(distance);
routeDetailsContainer.appendChild(elevation);
routeDetailsContainer.appendChild(gpsCoordinates);
routeDetailsContainer.appendChild(description);
routeDetails.appendChild(routeDetailsContainer);

detailPhoto1.src = route.imageOne;
detailPhoto2.src = route.imageTwo;
detailPhoto3.src = route.imageThree;

const moreInfo = document.createElement('p');
moreInfo.textContent = route.extraInfo;
moreInfoSection.appendChild(moreInfo);


