
var API_KEY = "sk.eyJ1IjoibWNvbGxleSIsImEiOiJjazZrMHhjc2YwMXhwM251cnl1amdiOGtqIn0.cpMgshYo-kvQxgXPlAIynQ";

var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"

var titleLayer =  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
});

var myMap = L.map("map", {
  center:  [40.7, -94.5],
  zoom: 5,
  layers: [titleLayer]
});  

// // get the data
// d3.json(queryUrl, function(data) {
//   function createFeatures(earthquakeData) {
//       function onEachFeature(feature, layer) {
//         layer.bindPopup("<h3>" + feature.properties.place + "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
//       }
//         var earthquakes = L.geoJson(earthquakeData, {
//               onEachFeature: onEachFeature
//             });
//   }
//   // this is a conditional loop to assign the color of each marker
//   function chooseColor(mag) {
//     if (feature.properties.mag >= 7) {
//        return 'red' 
//    } else if (feature.properties.mag >= 6) {
//        return 'orange'
//    } else if (feature.properties.mag >= 5) {
//       return 'yellow'
//    } else {}
//       return 'green'
//    }
//    // this is a conditional loop to assign a radius to each marker
//   function radius (mag) {
//     if (feature.properties.mag >= 7) { 
//      radius = 4
//   } else if (feature.properties.mag >= 6) {
//       radius = 3
//   } else if (feature.properties.mag >= 5) {
//     radius = 2
//   } else {}
//     radius = 1
//   }
// // this is going to add the style of the marker to each instance in data
// // I found this chunk of code here "http://bl.ocks.org/williaster/95584ebda56f5345b709"  
//   L.geoJson(earthquakes, {
//     style: function (feature) {
//         return {
//           color:       '#000',
//           opacity:     0,
//           radius:      radius(feature.properties.mag),
//           fillColor:   chooseColor(feature.properties.mag),
//           fillOpacity: 0.7
//       };
//     },
//     onEachFeature: function (feature) {
//       layer.bindPopup(feature.properties.mag);
//     },
//     pointToLayer: function (feature, latlng) {
//       return L.circleMarker(latlng);
//     }

//   }).addTo(myMap);
  

  
//   });
// get the data
d3.json(queryUrl, function(data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});

function createFeatures(earthquakeData) {
  function onEachFeature(feature, layer) {
    layer.bindPopup("<h3>" + feature.properties.place + "</h3><hr><p>" + new Date(feature.properties.time) + "</p>");
  }
 // GeoJson layer containing each feature
  var earthquakes = L.geoJson(earthquakeData, {
    onEachFeature: onEachFeature
  });

  // send earthquakes layer to createMap
  createMap(earthquakes);
}


// function createMap(earthquakes) {
//   // create map object
//  var titleLayer =  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.streets",
//     accessToken: API_KEY
//   });
//   var baseMaps = {
//     "Street Map" : titleLayer
//   };
//   var overlayMaps = {
//     Earthquakes: earthquakes
//   };
//   var myMap = L.map("map", {
//     center:  [40.7, -94.5],
//     zoom: 5,
//     layers: [titleLayer, earthquakes]
//   });
//   L.control.layers(baseMaps, overlayMaps, {
//     collapsed: false
//   }).addTo(myMap);
  
//   function style(feature) {
//     return {
//       opacity: 1,
//       fillOpacity: 1,
//       fillColor: chooseColor(feature.properties.mag),
//       color: "#000000",
//       radius: radius(feature.properties.mag),
//     };
//   }

//   function chooseColor() {
//    if (mag >= 7) {
//       return 'red' 
//   } else if (mag >= 6) {
//       return 'orange'
//   } else if (mag >= 5) {
//      return 'yellow'
//   } else {}
//      return 'green'
//   }
  
//   function radius () {
//     if (mag >= 7) { 
//      radius = 4
//   } else if (mag >= 6) {
//       radius = 3
//   } else if (mag >= 5) {
//     radius = 2
//   } else {}
//     radius = 1
//   }

//   L.geoJson(data, {
//     style: function (feature) {
//         return {
//           color:       '#000',
//           opacity:     0,
//           radius:      radius(feature.properties.mag),
//           fillColor:   chooseColor(feature.properties.mag),
//           fillOpacity: 0.7
//       };
//   },
//   onEachFeature: function (feature, layer) {
//       layer.bindPopup(feature.properties.info);
//   },
//   pointToLayer: function (feature, latlng) {
//       return L.circleMarker(latlng);
//   }

// }).addTo(myMap);
// };

// console.log(data);