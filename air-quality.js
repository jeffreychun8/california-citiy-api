async function fetchAQI(zip) {
    var apiKey = "E3228C70-922F-4BB9-91A4-3123D1B03BE7";
    var url = "https://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=" 
              + zip + "&distance=25&API_KEY=" + apiKey;

    try {
        var response = await fetch(url);      
        var data = await response.json();     
        console.log(data);                    
        return data;                          
    } catch (error) {
        console.error("Error fetching AQI data:", error);
        return null;
    }
}

async function fetchForecast(zip){
    var apiKey = "E3228C70-922F-4BB9-91A4-3123D1B03BE7";
    //endpoint line
    var url = "https://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode="
            + zip + "&distance=25&API_KEY=" + apiKey;

    try {
        var response = await fetch(url);
        var data = await response.json();
        console.log("Forecast:", data); 
        return data;
    } catch (error) {
        console.error("Error fetching forecast:", error);
        return null;
    }
    }





const cities = [
  { name: "Arden Arcade-Del Paso Manor", zip: "95815" },
  { name: "Auburn", zip: "95603" },
  { name: "Colfax", zip: "95713" },
  { name: "Cool", zip: "95614" },
  { name: "Davis", zip: "95616" },
  { name: "Elk Grove", zip: "95758" },
  { name: "Folsom", zip: "95630" },
  { name: "Natomas", zip: "95834" },
  { name: "North Highlands", zip: "95660" },
  { name: "Placerville", zip: "95667" },
  { name: "Rio Vista", zip: "94571" },
  { name: "Roseville-Rocklin", zip: "95678" },
  { name: "Sacramento", zip: "95814" },
  { name: "Sloughhouse", zip: "95683" },
  { name: "Vacaville", zip: "95687" },
  { name: "Woodland", zip: "95776" },
  { name: "Fairfield", zip: "94533" },
  { name: "Fremont", zip: "94536" },
  { name: "Livermore", zip: "94550" },
  { name: "Napa", zip: "94558" },
  { name: "Oakland", zip: "94601" },
  { name: "Redwood City", zip: "94061" },
  { name: "San Francisco", zip: "94102" },
  { name: "San Jose", zip: "95112" },
  { name: "San Rafael", zip: "94901" },
  { name: "Santa Rosa", zip: "95401" },
  { name: "Antelope Vly", zip: "93535" },
  { name: "Anza Vly", zip: "92539" },
  { name: "Banning", zip: "92220" },
  { name: "Barstow", zip: "92311" },
  { name: "Big Bear Lake", zip: "92315" },
  { name: "C San Bernardino M", zip: "92401" },
  { name: "C San Bernardino", zip: "92410" },
  { name: "Capistrano Vly", zip: "92675" },
  { name: "Central Coastal", zip: "93401" },
  { name: "Central LA CO", zip: "90012" },
  { name: "Central Orange", zip: "92868" },
  { name: "Coachella Vly", zip: "92201" },
  { name: "E San Bernardino", zip: "92404" },
  { name: "E San Fernando Vly", zip: "91352" },
  { name: "E San Gabriel Vly", zip: "91776" },
  { name: "East Riverside CO", zip: "92501" },
  { name: "Hesperia", zip: "92345" },
  { name: "Lake Elsinore", zip: "92530" },
  { name: "Metro Riverside CO", zip: "92507" },
  { name: "N Coastal Orange", zip: "92660" },
  { name: "North Orange CO", zip: "92865" },
  { name: "NW Coastal LA", zip: "90066" },
  { name: "NW San Bernardino", zip: "92407" },
  { name: "Perris Vly", zip: "92570" },
  { name: "Phelan", zip: "92371" },
  { name: "S Central LA CO", zip: "90011" },
  { name: "S San Gabriel Vly", zip: "91754" },
  { name: "Saddleback Vly", zip: "92688" },
  { name: "San Gabriel Mts", zip: "91011" },
  { name: "Santa Clarita Vly", zip: "91351" },
  { name: "South Coastal LA", zip: "90045" },
  { name: "Southeast LA CO", zip: "90022" },
  { name: "SW Coastal LA", zip: "90034" },
  { name: "SW San Bernardino", zip: "92376" },
  { name: "Temecula Vly", zip: "92590" },
  { name: "Trona", zip: "93562" },
  { name: "Twentynine Palms", zip: "92277" },
  { name: "Victorville", zip: "92392" },
  { name: "W San Bernardino M", zip: "92373" },
  { name: "W San Fernando Vly", zip: "91367" },
  { name: "W San Gabriel Vly", zip: "91789" },
  { name: "San Diego Coast", zip: "92101" },
  { name: "San Diego Foothills", zip: "92119" },
  { name: "San Diego Mesa and Inland Valley", zip: "92120" },
  { name: "Ojai", zip: "93023" },
  { name: "Oxnard", zip: "93030" },
  { name: "Piru", zip: "93040" },
  { name: "Simi Valley", zip: "93063" },
  { name: "Thousand Oaks", zip: "91360" },
  { name: "Atascadero", zip: "93422" },
  { name: "Carrizo Plains", zip: "93426" },
  { name: "Morro Bay", zip: "93442" },
  { name: "Nipomo", zip: "93444" },
  { name: "Paso Robles", zip: "93446" },
  { name: "Red Hills", zip: "93452" },
  { name: "San Luis Obispo", zip: "93401" },
  { name: "Carmel Valley", zip: "93924" },
  { name: "Davenport", zip: "95017" },
  { name: "Hollister", zip: "95023" },
  { name: "King City", zip: "93930" },
  { name: "Monterey Peninsula", zip: "93940" },
  { name: "Pinnacles National Monument", zip: "95043" },
  { name: "Salinas", zip: "93901" },
  { name: "San Lorenzo Valley", zip: "95033" },
  { name: "Santa Cruz", zip: "95060" },
  { name: "Scotts Valley", zip: "95066" },
  { name: "Watsonville", zip: "95076" },
  { name: "Carpinteria", zip: "93013" },
  { name: "Gaviota Coast", zip: "93117" },
  { name: "Goleta", zip: "93117" },
  { name: "Lompoc", zip: "93436" },
  { name: "Paradise Road", zip: "93452" },
  { name: "Santa Barbara", zip: "93101" },
  { name: "Santa Maria", zip: "93454" },
  { name: "Santa Ynez", zip: "93460" },
  { name: "Bakersfield", zip: "93301" },
  { name: "Fresno", zip: "93721" },
  { name: "Hanford", zip: "93230" },
  { name: "Madera", zip: "93637" },
  { name: "Merced", zip: "95340" },
  { name: "Modesto", zip: "95354" },
  { name: "Stockton", zip: "95202" },
  { name: "Visalia", zip: "93291" },
  { name: "Bishop", zip: "93514" },
  { name: "Chester", zip: "96020" },
  { name: "Chico", zip: "95928" },
  { name: "Concord", zip: "94518" },
  { name: "Death Valley National Park", zip: "92328" },
  { name: "Eureka", zip: "95501" },
  { name: "Fort Bragg", zip: "95437" },
  { name: "Gridley", zip: "95948" },
  { name: "Imperial Valley", zip: "92243" },
  { name: "Joshua Tree National Park", zip: "92252" },
  { name: "Lassen Volcanic National Park", zip: "96089" },
  { name: "Lincoln", zip: "95648" },
  { name: "Mammoth Lakes", zip: "93546" },
  { name: "Mono Lake", zip: "93541" },
  { name: "Owens Lake", zip: "93514" },
  { name: "Paradise", zip: "95967" },
  { name: "Portola", zip: "96122" },
  { name: "Quincy", zip: "95971" },
  { name: "Red Bluff", zip: "96080" },
  { name: "Redding", zip: "96001" },
  { name: "South Lake Tahoe", zip: "96150" },
  { name: "Tahoe City area", zip: "96145" },
  { name: "Truckee", zip: "96161" },
  { name: "Western Nevada County", zip: "95959" },
  { name: "Willits", zip: "95490" },
  { name: "Willows", zip: "95988" },
  { name: "Yosemite National Park", zip: "95389" },
  { name: "Yucca Vly", zip: "92284" }
];


//show current time
function updateDateTime() {
  const now = new Date();
  const date = now.toLocaleDateString(); 
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); 
 
  
  document.getElementById('dateTime').textContent = `${date}, ${time}`;
}


updateDateTime();

//refresh every second
setInterval(updateDateTime, 1000);


//dropdown city names bar, store zip and city names
function populateDropdown() {
    const dropdown = document.getElementById("cityDropdown");

    cities.forEach(function(city) {
    const option = document.createElement("option");
    option.value = city.zip;
    option.textContent = city.name;
    dropdown.appendChild(option);
    });
  }
populateDropdown();

//add city to the div, show current and forecasted AQI (O3 or PM2.5)
// Add city to the div, show current and forecasted AQI (O3 or PM2.5)
async function addCity() {
    var dropdown = document.getElementById("cityDropdown");
    var selectedZip = dropdown.value;                   
    var selectedCityName = dropdown.options[dropdown.selectedIndex].text; 
    var cityContainer = document.querySelector(".js-add-city");

    if (selectedZip) {
        // Check for duplicates
        var existingCities = cityContainer.querySelectorAll(".city-item");
        for (var city of existingCities) {
            if (city.value === selectedZip) {
                alert(selectedCityName + " is already added!");
                return;
            }
        }
    }

    // create container for city
    var cityItem = document.createElement("div");
    cityItem.classList.add("city-item");
    cityItem.value = selectedZip;

    // City name
    var cityNameDiv = document.createElement("div");
    cityNameDiv.textContent = selectedCityName;
    cityNameDiv.classList.add("city-name");

    // delete button
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "✖";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function () {
        cityContainer.removeChild(cityItem);
    });

    // append name and delete button to cityItem
    cityItem.appendChild(cityNameDiv);
    cityItem.appendChild(deleteButton);

    // append cityItem to container
    cityContainer.appendChild(cityItem);

    
    const currentData = await fetchAQI(selectedZip);
    const currentDiv = document.createElement("div");
    currentDiv.classList.add("city-current");

    // check for first o3 and first PM2.5
    let foundO3 = false;
    let foundPM25 = false;

    if (currentData && currentData.length > 0) {
        for (let i = 0; i < currentData.length; i++) {
            const { AQI: aqiValue, ParameterName } = currentData[i];

            // finding the first O3 in endpoint
            if (!foundO3 && ParameterName.toUpperCase() === "O3") {
                const ozoneDiv = document.createElement("div");
                ozoneDiv.classList.add("currentOzone-class");
                ozoneDiv.textContent = "Today's AQI (Ozone 3): " + aqiValue;

                // add color bar changing according to aqi value
                const ozoneColorDiv = document.createElement("div");
                ozoneColorDiv.classList.add("aqiColorBar");
                ozoneColorDiv.textContent = aqiValue;
                const categoryText = getAQICategory(aqiValue);
                ozoneColorDiv.title = categoryText; // creates the tooltip
                ozoneColorDiv.setAttribute("data-tooltip", categoryText);
                aqiCategory(aqiValue, ozoneColorDiv); // color selecting function

                cityItem.appendChild(ozoneDiv);
                cityItem.appendChild(ozoneColorDiv);

                foundO3 = true;
            }

            // first PM2.5
            if (!foundPM25 && ParameterName.toUpperCase().replace(".", "") === "PM25") {
                const pm25Div = document.createElement("div");
                pm25Div.classList.add("currentPm25-class");
                pm25Div.textContent = "Today's AQI (PM2.5): " + aqiValue;
                cityItem.appendChild(pm25Div);

                foundPM25 = true;
            }

            // stop loop if both found
            if (foundO3 && foundPM25) break;
        }
    }

    // Show no data if neither o3 nor pm25 found
    if (!foundO3 && !foundPM25) {
        currentDiv.classList.add("currentNoData");
        currentDiv.textContent = "Current AQI data not available";
        cityItem.appendChild(currentDiv);
    }

    // Forecast aqi
    const forecastData = await fetchForecast(selectedZip);
    const forecastDiv = document.createElement("div");
    forecastDiv.classList.add("city-forecast");

    let foundForecastO3 = false;
    let foundForecastPM25 = false;

    if (forecastData && forecastData.length > 0) {
        for (let i = 0; i < forecastData.length; i++) {
            const { AQI: aqiValue, ParameterName } = forecastData[i];

            // first forecast O3
            if (!foundForecastO3 && ParameterName.toUpperCase() === "O3") {
                const div = document.createElement("div");
                div.classList.add("forecastOzone-class");
                div.textContent = "Forecasted AQI (Ozone 3) Tomorrow: " + aqiValue;
                forecastDiv.appendChild(div);
                foundForecastO3 = true;
            }

            // first forecast PM2.5
            if (!foundForecastPM25 && ParameterName.toUpperCase().replace(".", "") === "PM25") {
                const div = document.createElement("div");
                div.classList.add("forecastPm25-class");
                div.textContent = "Forecasted AQI (PM2.5) Tomorrow: " + aqiValue;
                forecastDiv.appendChild(div);
                foundForecastPM25 = true;
            }

            // stop loop if both found
            if (foundForecastO3 && foundForecastPM25) break;
        }
    }

    // Show no data if neither o3 or pm25 found
    if (!foundForecastO3 && !foundForecastPM25) {
        forecastDiv.classList.add("forecastNoData");
        forecastDiv.textContent = "Forecasted AQI data not available";
    }

    cityItem.appendChild(forecastDiv);
}


function aqiCategory(aqiValue, element) {
  
    if (aqiValue >= 0 && aqiValue <= 50) {
        element.classList.add("Green-aqi");
    } else if (aqiValue > 50 && aqiValue <= 100) {
        element.classList.add("Yellow-aqi");    
    } else if (aqiValue > 100 && aqiValue <= 150) {
        element.classList.add("Orange-aqi");    
    } else if (aqiValue > 150 && aqiValue <= 200) {
        element.classList.add("Red-aqi");
    } else if(aqiValue > 200 && aqiValue <= 300) {   
        element.classList.add("Purple-aqi");
    } else {
        element.classList.add("Maroon-aqi");
       }}


function getAQICategory(aqiValue) {
    if (aqiValue >= 0 && aqiValue <= 50) {
        return "Good";
    } else if (aqiValue >= 51 && aqiValue <= 100) {
        return "Moderate";
    } else if (aqiValue >= 101 && aqiValue <= 150) {
        return "Unhealthy for Sensitive Groups";
    } else if (aqiValue >= 151 && aqiValue <= 200) {
        return "Unhealthy";
    } else if (aqiValue >= 201 && aqiValue <= 300) {
        return "Very Unhealthy";
    } else {
        return "Hazardous";
    }
}
