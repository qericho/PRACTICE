const apiKey = 'dd47e52fb40fa92f17e3c16320ef50dc'; 
const cityInput = document.getElementById('cityInput');
const cityName = document.getElementById('cityName');
const dateTime = document.getElementById('dateTime');
const temperature = document.getElementById('temperature');
const weatherDescription = document.getElementById('weatherDescription');
const forecastContainer = document.getElementById('forecastContainer');


function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}


async function fetchWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
        const data = await response.json();
        if (data.cod !== '200') {
            alert('City not found!');
            return;
        }
     
        const currentWeather = data.list[0];
        cityName.textContent = city;
        dateTime.textContent = formatDate(currentWeather.dt * 1000);
        temperature.textContent = `${Math.round(currentWeather.main.temp)}°C`;
        weatherDescription.textContent = currentWeather.weather[0].description;

        forecastContainer.innerHTML = ''; 
        for (let i = 1; i <= 4; i++) {
            const forecast = data.list[i * 8];
            const forecastElement = document.createElement('div');
            forecastElement.classList.add('md:mr-10', 'md:my-4');

            forecastElement.innerHTML = `
                <h1 class="text-[20px]">${city}</h1>
                <p>${formatDate(forecast.dt * 1000)}</p>
                <div class="my-2">
                    <h1 class="text-3xl mt-2">${Math.round(forecast.main.temp)}°C</h1>
                    <p class="text-[14px]">${forecast.weather[0].description}</p>
                </div>
            `;
            forecastContainer.appendChild(forecastElement);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Error fetching data');
    }
}


cityInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        }
    }
});


fetchWeather('Gatid');
