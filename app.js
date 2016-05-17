$(document).on('ready', function () {

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

// getData();
// function getData() {
//     var query;
//     var queries = ["adho%20muhka%20svanasana", "tadasana", "balasana"]
//     for (var i = 0; i < queries.length; i++) {
//         query = queries[i];
//         $.get("http://galvanize-cors-proxy.herokuapp.com/http://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=" + query).done(function(data) {
//             populateData(data);
//         })
//     }
// }
// function populateData(data) {
//     for (keys in data.query.pages) {
//         var id = keys;
//     }
//     var text = data.query.pages[id].extract;
//     for (var i = 0; i < poses.length; i++) {
//       poses[i].description = text;
//
//         console.log(poses);
// }
// //
