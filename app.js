if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
function getCityTemp(cityName, id){
    const key = "2a654a0dbdc6eafa427647427f68223c";
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + key + '&units=metric')
    .then(function(resp) {return resp.json()})
    .then(function(data){
        console.log(data);
        if (data.cod === 200){
            document.getElementById(id).textContent = data.name + ": " + data.main.temp + "stupněC";
        }
        else{
            console.log(data);
        }
        
    })
    .catch(function(error){
        console.log("Error ocured" + error);
    });

}
function ostatniMesta(){
    getCityTemp("Dobronín", "dobronin");
    getCityTemp("Jihlava", "jihlava");
}

function mestoPodlePocasi(){
    const input_city = document.getElementById("input_city").value;
    getCityTemp(input_city, "city");
   
    
}