const cityName = document.getElementById('in1');
const submit = document.getElementById('button-addon2'); 
const city_name = document.getElementById('city_name')
const day = document.getElementById('day')
const date = document.getElementById('today_date')
const temp = document.getElementById('temperature')

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const d = new Date();

const getinfo = async() => {
    let cityVal = cityName.value;
    // alert("hi");
    if (cityVal === "") {
        city_name.innerText = `Plz enter the place first`;
    }else {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=094ca8938ca7c65797a00d3748f85254`;
            const result = await fetch(url);
            const data = await result.json();
            const arrdata = [data];
            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp.innerText = arrdata[0].main.temp;
            day.innerText = days[d.getDay()];
            date.innerText = `${d.getDate()} ${months[d.getMonth()]}`;
        }catch(err){
            city_name.innerText = `Plz enter the place name properly`;           
        }
    }
}
submit.addEventListener('click', getinfo);