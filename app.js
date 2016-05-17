$(document).on('ready', function () {

getData();
function getData() {
    var query;
    var queries = ["adho%20muhka%20svanasana", "tadasana", "balasana"]
    for (var i = 0; i < queries.length; i++) {
        query = queries[i];
        $.get("http://galvanize-cors-proxy.herokuapp.com/http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=" + query).done(function(data) {
            populateData(data);
        })
    }
}
function populateData(data) {
    for (keys in data.query.pages) {
        var id = keys;
    }
    var text = data.query.pages[id].extract;
    for (var i = 0; i < poses.length; i++) {
      poses[i].description = text;

        console.log(poses);
}
}
  var poses = [{
    name: "Adho Mukha Svanasana",
    symptoms: [
      "back",
      "shoulders",
      "legs",
      "mind"
    ],
     description: ""

   },
   {
    name: "Tadasana",
    symptoms: [
      "back",
      "legs"
    ],
    description: ""
  },
  {
    name: "Dandasana",
    symptoms: [
      "back",
      "shoulders"
    ],
    description: ""
  }
  ,
  {
   name: "Vriksasana",
   symptoms: [
     "legs",
     "shoulders",
     "back"
   ],
   description: ""
 },
 {
  name: "Balasana",
  symptoms: [
    "hips",
    "back",
    "legs",
    "mind"
  ],
  description: ""
},
{
  name: "Virabhadrasana II",
  symptoms: [
   "legs",
   "back"
 ],
 description: ""
},
{
 name: "Uttasana",
 symptoms: [
   "back",
   "neck"
 ],
 description: ""
},
{
 name: "Shavasana",
 symptoms: [
   "mind"
 ],
 description: ""
},
{
 name: "Baddha Konasana",
 symptoms: [
   "hips",
   "back"
 ],
 description: ""
},
{
 name: "Anjali Mudra",
 symptoms: [
   "wrists"
 ],
 description: ""
},
{
 name: "Urdvhamukhasvanasana",
 symptoms: [
   "hips",
   "back",
   "wrists"
 ],
 description: ""
}
];

  $('#symptom-selector').on('change', function (event) {
    var selectedValue = $(event.currentTarget).val();
    var recommendedPoses =[];

    if (poses[i].symptoms.includes(selectedValue)) {
        recommendedPoses.push(poses[i].name);
        console.log(recommendedPoses)
        return text;
    }
    })
  });
// });
// })

// Js random number generator
// jQUery.html
// for of loop

//     var options = {
//         "api_key": apiKey,
//         "method": "flickr.photos.search", // You can replace this with whatever method,
//         // flickr.photos.search fits your use case best, though.
//         "format": "json",
//         "nojsoncallback": "1",
//         "text": selectedValue  // This is where you'll put your "file name"
//                             }

  // var url = "https://api.flickr.com/services/rest/?api_key=" + apiKey + "&text=" + selectedValue + "&method=flickr.photos.search&jsoncallback=success&format=json"
