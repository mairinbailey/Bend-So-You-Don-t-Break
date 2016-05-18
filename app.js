$(document).on('ready', function() {
    $.get("https://galvanize-yoga.herokuapp.com/",
        function(data) {
            var poses = data;
            // console.log(data);

            $('#symptom-selector').on('change', function(event) {
                $("#poses").empty();
                var selectedValue = $(event.currentTarget).val();
                var recommendedPoses = [];
                // var listCounter = 0;

                for (var i = 0; i < data.length; i++) {
                    if (poses[i].symptoms.includes(selectedValue)) {
                        recommendedPoses.push(poses[i].name);
// }
// }
//                 for
                        var posesImage = "<img src="+ poses[i].img + ">"
                        $("#poses").append(posesImage);

                        var posesTitle = "<h3>"+poses[i].name+"</h3>";
                        $("#poses").append(posesTitle);


                        var listContainer = "<ol class= 'listContainer" + i + "'></ol>";

                        $("#poses").append(listContainer);

                        for (var j=0; j < poses[i].directions.length; j++){
                          var posesDirection= "<li>" + poses[i].directions[j] + "</li>";
                          var listElement
                          $(".listContainer" + i).append(posesDirection);


                        }

                    }
                }
            })
        })
});
// for(var i = 0; i < 3; i++) {
//   // append this thing
// var recommendedPoses[Math.floor((Math.random() * recommendedPoses.length) + 1)]
// }
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
