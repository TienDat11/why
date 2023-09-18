var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')

async  function changeWeatherUI(captialSearch){

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${captialSearch}&appid=33e609b66b1bb8dcd32ceb378a282220
    `    
    let data = await fetch(apiUrl).then(res=> res.json())
    console.log(data, 'data')
    
    if(data.cod == 200){
        city.innerText = data.name
        country.innerText = data.sys.country
        visibility.innerText = data.visibility +'m'
        wind.innerText = data.wind.speed + 'm/s'
        sun.innerText = data.main.humidity + '%'
        let temp = Math.round((data.main.temp - 273.15)) 
        value.innerHTML = temp
        shortDesc.innerHTML = data.weather[0] ? data.weather[0].main: ''
        time.innerText = new Date().toLocaleDateString('vi')

        body.setAttribute('class','hot')
        if(temp >= 25)
            body.setAttribute('class','hot')
        if(temp <= 22)
            body.setAttribute('class','cool')

    }else{
        content.classList.add('hide')
    }
}



search.addEventListener('keypress',function(e){
    if(e.code == 'Enter'){
        let captialSearch = search.value.trim()
        changeWeatherUI(captialSearch)
    }
})

changeWeatherUI('Ha Noi')

