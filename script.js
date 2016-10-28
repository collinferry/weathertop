if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;

    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&appid=2bfb9a60bdbdfd4d690c66b602546943", function(ow) {

      var tempF = Math.round(((((ow.main.temp - 273.15) * 1.8000) + 32) * 10) / 10).toFixed(0),
      tempC = Math.round(ow.main.temp - 273.15);
      
      var icon = "http://openweathermap.org/img/w/" + ow.weather[0].icon + ".png";
      var iconLess = (ow.weather[0].icon).slice(0, -1);
      var iconNum = Number(iconLess);
      var bg = "";

      document.getElementById("city").innerHTML = ow.name;
      document.getElementById("tempF").innerHTML = tempF + '&deg F';
      document.getElementById("tempC").innerHTML = tempC + '&deg C';
      document.getElementById("condition").innerHTML = "<img src='" + icon + "'></br>" + ow.weather[0].description;
      document.getElementById('bg').src = changeBG();
      
     function changeBG() {
        if (iconNum ===  13 || tempF <= 40) {
        return "http://www.collinferry.com/codepen/coldsnow.jpg";
        } else if (iconNum >= 1 && iconNum <= 2) {
        return "http://www.collinferry.com/codepen/sun.jpg";
        } else if (iconNum === 4 || iconNum ===3 || iconNum === 50) {
        return "http://www.collinferry.com/codepen/clouds.jpg";
        } else if (iconNum >= 9 && iconNum <= 10) {
        return "ttp://www.collinferry.com/codepen/rain.jpg";
        } else if (iconNum === 11) {
        return "http://www.collinferry.com/codepen/storm.jpg";
        } 
      }; 

      console.log(iconNum);
    });
    
$('button').click(function() {
  $('#tempF').toggle();
  $('#tempC').toggle();
});

  }); //closing out geolocation function(position)
} //closing out geolocation if statement

/*
The various backgrounds for the curious: 

Sun: http://www.collinferry.com/codepen/sun.jpg
Rain: http://www.collinferry.com/codepen/rain.jpg
Snow/Cold: http://www.collinferry.com/codepen/coldsnow.jpg
Clouds: http://www.collinferry.com/codepen/clouds.jpg
Storm: http://www.collinferry.com/codepen/storm.jpg
*/