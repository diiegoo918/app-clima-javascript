let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let apiKey = '1c4cb6e5ec03a11bbd6d5fbf6adec6f1';

let difKelvin = 273.15;


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById("ciudadEntrada").value;
    if (ciudad) {
        fetchDatosClima(ciudad)
    }
}) 
 

function fetchDatosClima(ciudad) {
 
    
fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`)
  .then((response) => response.json())
  .then((response) => mostarDatosClima(response));
  

}


function mostarDatosClima(response) {
     console.log(response)
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNoimbre = response.name
    const paisNombre = response.sys.country
    const temperatura = response.main.temp
    const descripcion = response.weather[0].description
    const icono = response.weather[0].icon
    const humedad = response.main.humidity


    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNoimbre},  ${paisNombre}`


    const tempaturaInfo = document.createElement('p')
    tempaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}°`;
    
    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `Humedad: ${humedad}%`;

    const iconoInfo  =document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`;

    const descripcionInfo  =document.createElement('p')
    descripcionInfo.textContent = `Descripcion meteorologica es :${descripcion} `;

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(tempaturaInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(humedadInfo);


}


