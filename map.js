const API_KEY = '8gyi4oq980'
async function get_Data() {
    src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${API_KEY}`
    const response = await fetch(src)
    const data = await response.json()
    console.log("data", data);
}

var mapOptions = {
    center: new naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
};


var map = new naver.maps.Map('map', mapOptions);

get_Data();