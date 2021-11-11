/** Unit Converter **/
function convertFahrenheitToCelsius(temperature) {
  //conversion code
  let celsius = ((temperature - 32)/1.8);
  return celsius.toFixed(1) ;
}

function convertCelsiusToFahrenheit(temperature) {
  //conversion code
  let fahrenheit = ((temperature * 1.8) + 32);
  return fahrenheit.toFixed(1) ;
}

function convertPoundstoKilos(pound) {
  //conversion code
  let kilos = pound * 0.4536;
  return kilos.toFixed(2) ;
}

function convertLitretoGallons(litre) {
  //conversion code
  let gallons = litre * 0.22;
  return gallons.toFixed(2) ;
}

function convertMilestoKm(miles) {
  //conversion code
  let Km = miles * 1.609;
  return Km.toFixed(0);
}
