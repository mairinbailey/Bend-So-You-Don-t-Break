$(document).on('ready', function() {
    $.get("https://galvanize-yoga.herokuapp.com/",
        function(data) {
            var poses = data;

            $('#symptom-selector').on('change', function(event) {
                $("#poses").empty();
                // $(".pageInstructions > h2 > p").empty();
                var selectedValue = $(event.currentTarget).val();
                var recommendedPoses = [];

                for (var i = 0; i < data.length; i++) {
                    if (poses[i].symptoms.includes(selectedValue)) {
                        recommendedPoses.push(poses[i]);
                    }
                }
                var randomPoses = _.sample(recommendedPoses, 2);
                for (var i = 0; i < randomPoses.length; i++) {
                    var listElems = "";
                    for (var j = 0; j < randomPoses[i].directions.length; j++) {
                        listElems += "<li>" +
                            randomPoses[i].directions[j] +
                            "</li>"
                    }
                    var pose = "<div class='row'>" +
                        "<img class='col-md-6' src='" + randomPoses[i].img + "'>" +
                        "<div class='row col-md-6'>" +
                        "<h3 class=col-md-12 id='poseName'>" + randomPoses[i].name + "</h3>" +
                        "<ol class=col-md-12'>" +
                        listElems +
                        "</ol>" +
                        " </div>" +
                        "</div>"

                    $("#poses").append(pose);


                }

            });
        });
})
