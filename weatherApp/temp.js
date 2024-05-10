let weatherImage = document.querySelector('.img');
let TempVal = document.querySelector('.tempval');
let cityName = document.querySelector('.cityname');
let speedVal = document.querySelector('.speedvalue');
let windval = document.querySelector('.windvalue');
let url = `https://api.tomorrow.io/v4/weather/forecast?location=`
let apikey=`&apikey=SwC7OtCy3nRgU1DJrDkW2Q3f3IDqtfhi`;


let button = document.querySelector('.icon');

button.addEventListener('click', (e)=>{
    let   userCity = document.querySelector('#inputfield');

    if(userCity.value.trim() === '' ){
        cityName.innerText = `not a city`;
    }else{
      
       checkWeather(userCity);
    }
   
})

// let form = Document.querySelector('form')

window.addEventListener('keydown',(e)=>{
    
    if(e.keyCode === 13){let   userCity = document.querySelector('#inputfield');

    if(userCity.value.trim() === '' ){
        cityName.innerText = `not a city`;
    }else{
      
       checkWeather(userCity);
    }}
   
})

async function checkWeather (userCity){
    cityName.innerText = userCity.value;   
  const response = await   fetch(`${url}${userCity.value}${apikey}`);
  let data = await response.json();
  console.log(data.timelines.minutely[0]);
  TempVal.innerText  =  Math.floor(parseInt(data.timelines.minutely[0].values.temperature)) + `°C`;
  speedVal.innerText = data.timelines.minutely[0].values.humidity+ `%`;
  windval.innerText = data.timelines.minutely[0].values.windSpeed+ `km/h`  ;
//   console.log(Math.floor(parseInt(data.timelines.minutely[0].values.temperature)) + `°C`);
//   console.log(data.timelines.minutely[0].values.humidity+ `%`);
//   console.log(data.timelines.minutely[0].values.windSpeed+ `km/h`);
}