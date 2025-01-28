// const url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/kolkata?unitGroup=metric&key=TECXERQV9U246XFLZKBHGWVW4&contentType=json';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': '911ae2ada0msh8114ae372598a61p14541ajsnbb34f2043423',
// 		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

const weather = (loc)=>{
	fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+loc+"?unitGroup=metric&key=TECXERQV9U246XFLZKBHGWVW4&contentType=json", {
		"method": "GET",
		"headers": {
		}
	})
    .then(response => response.json())
    .then((response) => {
		
		console.log(response)
		sunrise.innerHTML= response.currentConditions.sunrise;
		sunset.innerHTML= response.currentConditions.sunset;;
		humidity.innerHTML = response.currentConditions.humidity;
		dew.innerHTML = response.currentConditions.dew;
		pressure.innerHTML = response.currentConditions.pressure;
		temperature.innerHTML = response.currentConditions.temp;
		text.innerHTML= response.currentConditions.conditions;
		wind.innerHTML= response.currentConditions.winddir;
		speed.innerHTML= response.currentConditions.windspeed*10;
		city.innerHTML = response.address;
		code.innerHTML = response.currentConditions.icon;
		country.innerHTML = response.resolvedAddress;
		lat.innerHTML= response.latitude;
		long.innerHTML = response.longitude;
		skydata.innerHTML= response.currentConditions.conditions;
		tempdata.innerHTML = response.currentConditions.temp;
	})
    .catch(err => console.error(err));
}

document.getElementById('press').addEventListener('click', function (e) {
	
	const loc = document.querySelector('#land').value;
	weather(loc);
    document.getElementById('landName').innerHTML=loc;
	document.getElementById('location-loc').innerHTML=loc;
	document.getElementById('temperature-temp').innerHTML=response.currentConditions.temp;
	skydata.innerHTML = response.currentConditions.conditions;
	
	
});

weather("Kolkata");

const fixedWeathermum = ()=>{
	fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/mumbai?unitGroup=metric&key=TECXERQV9U246XFLZKBHGWVW4&contentType=json", {
		"method": "GET",
		"headers": {
		}
	})
    .then(response => response.json())
    .then((response) => {
		
		console.log(response)
		Mumbaisunrise.innerHTML = response.currentConditions.sunrise;
		Mumbaisunset.innerHTML= response.currentConditions.sunset;;
		Mumbaihumidity.innerHTML = response.currentConditions.humidity;
		Mumbaidew.innerHTML = response.currentConditions.dew;
		Mumbaipressure.innerHTML = response.currentConditions.pressure;
		Mumbaitemperature.innerHTML = response.currentConditions.temp;
		Mumbaitext.innerHTML= response.currentConditions.conditions;
		Mumbaiwind.innerHTML= response.currentConditions.winddir;
		Mumbaispeed.innerHTML= response.currentConditions.windspeed*10;
	})
    .catch(err => console.error(err));
}
fixedWeathermum();

const fixedWeatherchen = ()=>{
	fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Chennai?unitGroup=metric&key=TECXERQV9U246XFLZKBHGWVW4&contentType=json", {
		"method": "GET",
		"headers": {
		}
	})
    .then(response => response.json())
    .then((response) => {
		
		console.log(response)
		Chennaisunrise.innerHTML = response.currentConditions.sunrise;
		Chennaisunset.innerHTML= response.currentConditions.sunset;;
		Chennaihumidity.innerHTML = response.currentConditions.humidity;
		Chennaidew.innerHTML = response.currentConditions.dew;
		Chennaipressure.innerHTML = response.currentConditions.pressure;
		Chennaitemperature.innerHTML = response.currentConditions.temp;
		Chennaitext.innerHTML= response.currentConditions.conditions;
		Chennaiwind.innerHTML= response.currentConditions.winddir;
		Chennaispeed.innerHTML= response.currentConditions.windspeed*10;
	})
    .catch(err => console.error(err));
}
fixedWeatherchen();

const fixedWeatherdel= ()=>{
	fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Delhi?unitGroup=metric&key=TECXERQV9U246XFLZKBHGWVW4&contentType=json", {
		"method": "GET",
		"headers": {
		}
	})
    .then(response => response.json())
    .then((response) => {
		
		console.log(response)
		Delhisunrise.innerHTML = response.currentConditions.sunrise;
		Delhisunset.innerHTML= response.currentConditions.sunset;;
		Delhihumidity.innerHTML = response.currentConditions.humidity;
		Delhidew.innerHTML = response.currentConditions.dew;
		Delhipressure.innerHTML = response.currentConditions.pressure;
		Delhitemperature.innerHTML = response.currentConditions.temp;
		Delhitext.innerHTML= response.currentConditions.conditions;
		Delhiwind.innerHTML= response.currentConditions.winddir;
		Delhispeed.innerHTML= response.currentConditions.windspeed*10;
	})
    .catch(err => console.error(err));
}
fixedWeatherdel();

const fixedWeatherpat= ()=>{
	fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Patna?unitGroup=metric&key=TECXERQV9U246XFLZKBHGWVW4&contentType=json", {
		"method": "GET",
		"headers": {
		}
	})
    .then(response => response.json())
    .then((response) => {
		
		console.log(response)
		Patnasunrise.innerHTML = response.currentConditions.sunrise;
		Patnasunset.innerHTML= response.currentConditions.sunset;;
		Patnahumidity.innerHTML = response.currentConditions.humidity;
		Patnadew.innerHTML = response.currentConditions.dew;
		Patnapressure.innerHTML = response.currentConditions.pressure;
		Patnatemperature.innerHTML = response.currentConditions.temp;
		Patnatext.innerHTML= response.currentConditions.conditions;
		Patnawind.innerHTML= response.currentConditions.winddir;
		Patnaspeed.innerHTML= response.currentConditions.windspeed*10;
	})
    .catch(err => console.error(err));
}
fixedWeatherpat();