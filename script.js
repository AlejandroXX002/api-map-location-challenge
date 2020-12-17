const ipInput = document.getElementById("ipInput");

// getting the IP value from the user and fetching the new position
ipInput.addEventListener("submit", (e) => {
	e.preventDefault();

	const locationInput = document.getElementById("locationInput").value;

	fetch(
		"https://geo.ipify.org/api/v1?apiKey=at_kF3QHSF0yLqyvQMKzXmkHXgk9pHEl&ipAddress=8.8.8.8",
		{
			method: "POST",
			body: JSON.stringify({
				apiKey: at_kF3QHSF0yLqyvQMKzXmkHXgk9pHEl,
				ipAddress: locationInput,
				// domain:
			}),
			headers: {
				// "Content-Type": "string",
			},
		}
	)
		.then((data) => data.json())
		.catch((err) => console.log(err));
});

// map location and zoom
let mymap = L.map("mapid").setView([51.505, -0.09], 13);

// this is the code that shows the map
L.tileLayer(
	"https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
	{
		attribution:
			'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: "mapbox/streets-v11",
		tileSize: 512,
		zoomOffset: -1,
		accessToken:
			"pk.eyJ1IjoiYWxleHplcm90d28iLCJhIjoiY2tpcW1qZmNzMGh0YzJ6bDdxd241MXltaiJ9.wESnz9pAa_riqboEdES-bw",
	}
).addTo(mymap);

//  map pin for the location
let marker = L.marker([51.5, -0.09]).addTo(mymap);
