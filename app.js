$(document).on('ready', function() {
    $.get("https://galvanize-yoga.herokuapp.com/",
        function(data) {
            var poses = data;

          $('#symptom-selector').on('change', function(event) {
              $("#poses").empty();
              $(".pageInstructions").empty();
              var selectedValue = $(event.currentTarget).val();
              var recommendedPoses = [];

              for (var i = 0; i < data.length; i++) {
                  if (poses[i].symptoms.includes(selectedValue)) {
                      recommendedPoses.push(poses[i].name);
}

              for (var i = 0; i < 4; i++){
                var randomPosePosition1 = recommendedPoses[Math.floor(Math.random()* recommendedPoses.length)]

                      var posesImage = "<img src="+ poses[randomPosePosition1].img + ">"
                      $("#poses").append(posesImage);

                      var posesTitle = "<h3>"+poses[randomPosePosition1].name+"</h3>";
                      $("#poses").append(posesTitle);


                      var listContainer = "<ol class= 'listContainer" + i + "'></ol>";

                      $("#poses").append(listContainer);

                      for (var j=0; j < poses[randomPosePosition1].directions.length; j++){
                        var posesDirection= "<li>" + poses[randomPosePosition1].directions[j] + "</li>";
                        var listElement
                        $(".listContainer" + i).append(posesDirection);
                    }
                }
            }
        });
});
})
