document.getElementById('submit').addEventListener('click', function () {
    const inputValue = document.getElementById('inputValue')
    weatherConditions(inputValue);
})

function weatherConditions(cityName) {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityName.value + '&appid=f90a0fbfa46435da18777c85dd7bd085&units=metric')
        .then(response => response.json())
        .then(data => {
            const weatherIcon = data.weather[0].icon;
            const imageUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            document.getElementById('image').src = imageUrl;
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('temperature').innerText = data.main.temp;
            document.getElementById('condition').innerText = data.weather[0].description;
            document.getElementById('humidity').innerText = data.main.humidity;
            document.getElementById('wind').innerText = data.wind.speed;
        })
}