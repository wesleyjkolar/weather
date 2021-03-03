const cityTextBox = document.getElementById("cityTextBox")
const tempHeading = document.getElementById("tempHeading")
const humidityHeading = document.getElementById("humidityHeading")
const getWeatherButton = document.getElementById("getWeatherButton")


function getWeatherURLByCity(city) {
    return `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8936c659e70d1c3cf734b4a69312758&units=imperial`
}

getWeatherButton.addEventListener('click', function() {
    
    const city = cityTextBox.value 
    const weatherURL = getWeatherURLByCity(city)
    console.log(weatherURL)

    let request = new XMLHttpRequest() 
    request.addEventListener('load', function() {

        let result = JSON.parse(this.responseText)
        console.log(result)
        let weatherMessage = `
                        City Searched: ${result.name} <br>
                        Current Temp: ${result.main.temp} <br> 
                        Low: ${result.main.temp_min} <br>
                        High: ${result.main.temp_max} <br>
                        Pressure: ${result.main.pressure}psi`
        
        tempHeading.innerHTML = weatherMessage
        

    })

    request.open('GET', weatherURL)
    request.send() 
})