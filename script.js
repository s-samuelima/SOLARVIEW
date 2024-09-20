// Função para obter a previsão do tempo
async function getWeather() {
    const apiKey = 'SUA_API_KEY'; // Substitua pela sua chave da API
    const city = 'São Paulo,BR'; // Troque pela cidade desejada
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    
    const weatherInfo = `
        <p>Temperatura: ${data.main.temp} °C</p>
        <p>Condições: ${data.weather[0].description}</p>
    `;
    document.getElementById('weather-info').innerHTML = weatherInfo;
}

// Função para simular o monitoramento dos painéis solares
function monitorPanels() {
    const energyProduced = (Math.random() * 10 + 5).toFixed(2); // Simula a energia produzida
    const panelInfo = `
        <p>Energia Produzida: ${energyProduced} kWh</p>
    `;
    document.getElementById('panel-info').innerHTML = panelInfo;
}

// Chama as funções ao carregar a página
window.onload = function() {
    getWeather();
    monitorPanels();
};
