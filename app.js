var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var limtemp = document.querySelector('.limtemp');
var pressure = document.querySelector('.pressure');
var humidity = document.querySelector('.humidity');
var wind = document.querySelector('.wind');

var pos = document.querySelector('.position');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=4d5323b5408d42b832c0f35856aff9f6')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var maxtempValue = data['main']['temp_max'];
  var mintempValue = data['main']['temp_min'];
  var pressvalue = data['main']['pressure'];
  var humvalue = data['main']['humidity'];
  var windspeed = data['wind']['speed'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var iconValue = data['weather'][0]['icon'];
  var countryname = data['sys']['country'];
  var latvalue = data['coord']['lat'];
  var lonvalue = data['coord']['lon'];
  var returncode = data['cod']

if (returncode == '200') {


  main.innerHTML = nameValue+ "," + countryname;
  pos.innerHTML = "POSITION \n" + " LATITUDE - " + latvalue + " LONGITUDE - " + lonvalue;
  desc.innerHTML = "DESCRIPTION - "+descValue ;
  var cel = tempValue - 273.15;
  var maxcel = maxtempValue - 273.15;
  var mincel = mintempValue - 273.15;
  temp.innerHTML = "AVERAGE TEMPARATURE - "+cel+"  CELCIUS " ;
  limtemp.innerHTML= " MAXIMUM  " + maxcel+"  CELCIUS "+"       MINIMUM " + mincel +"  CELCIUS";
  pressure.innerHTML =  " PRESSURE  " + pressvalue + " HECTOPASCAL";
  humidity.innerHTML = "  HUMIDITY  "+humvalue + " (40% to 60% is normal humidity)"
  wind.innerHTML =   "  WIND SPEED OF "+windspeed + "MPH"
  input.value ="";
}
else if (returncode == '404') {
  desc.innerHTML = "INVALID CITY";

}

})

.catch(err => alert("Wrong city name!"));
})
