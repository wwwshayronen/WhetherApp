let city = window.prompt("Enter your city: ")
let wht = document.querySelector(".wht");
let loc = document.querySelector(".loc");
let def = document.querySelector(".def");

// get data from API
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4c4fa0bb98f3793be39999a264594b99`)
  .then(res => res.json())
  .then(data => {
    console.log(data)

    // check if the user enter an empty string or press cancel
    if(city === null || city === ""){
       alert("you have to enter a city")
       location.reload()
    }
    // put the values on a varaibles and write the on the HTML elements
    const tempature = data.main.temp
    wht.textContent = tempature + "C"

    const cityName = data.name
    loc.textContent = cityName

    const info = data.weather[0].description
    def.textContent = info

    //Add some emoji's for fun (:
    if (city.toLocaleLowerCase() === "london") {
      loc.innerHTML += " 💂󠁧󠁢󠁥"
    }

    if (city.toLocaleLowerCase() === "tel aviv") {
      loc.innerHTML += " 🐪󠁧󠁢󠁥"
    }

    if (city.toLocaleLowerCase() === "new york") {
      loc.innerHTML += " 🗽󠁧󠁢󠁥"
    }

    

  })





  let arr = [1, 1, 2, 2, 3, 4, 5, 6];

  let counts = arr.reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, {});
  let maxCount = Math.max(...Object.values(counts));
  let mostFrequent = Object.keys(counts).filter(k => counts[k] === maxCount);

  console.log(Math.min(...mostFrequent))