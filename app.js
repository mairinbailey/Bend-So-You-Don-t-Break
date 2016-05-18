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
              for (var i = 0; i < randomPoses.length; i++){
                var randomPosePosition1 = randomPoses[i];

                      var posesImage = "<img src="+ randomPosePosition1.img + ">"
                      $("#poses").append(posesImage);

                      var posesTitle = "<h3>"+randomPosePosition1.name+"</h3>";
                      $("#poses").append(posesTitle);


                      var listContainer = "<ol class= 'listContainer" + i + "'></ol>";

                      $("#poses").append(listContainer);

                      for (var j=0; j < randomPosePosition1.directions.length; j++){
                        var posesDirection= "<li>" + randomPosePosition1.directions[j] + "</li>";
                        var listElement
                        $(".listContainer" + i).append(posesDirection);
                    }
                }

        });
});
})
