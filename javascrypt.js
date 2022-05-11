

let weather = {
    apiKey: "4e3bd9ac728e63bfcd7e3975e155bea2",
    fetchWeather: function (city){
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q='
            + city 
            + '&units=metric&appid=' 
            + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function (data){
        const {name} = data
        const {icon, description} = data.weather[0]
        const {temp, humidity} = data.main
        const {speed} = data.wind
        // console.log(name, icon, description, temp, humidity, speed)
        document.querySelector(".city").innerText = "Погода в " + name
        document.querySelector(".temp").innerText = temp.toFixed() + "℃"
        document.querySelector(".description").innerText = description
        document.querySelector(".humidity").innerText = "Влажность: " + humidity + "%"
        document.querySelector(".wind").innerText = "Скорость ветра: " + speed + "км/с"
        document.querySelector(".icon").src = 
        "https://openweathermap.org/img/wn/" + icon + ".png"
        
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value) 
    }
}

document.querySelector(".search button").addEventListener("click", function () {
        weather.search()    
    })

document.querySelector(".search-bar").addEventListener("keyup", function (event){
    if (event.key == "Enter"){ 
        weather.search()
    }
})

weather.fetchWeather("krasnoyarsk   ")

    