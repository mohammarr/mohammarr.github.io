$('#answer-form').submit(function( event ) {
    console.log(this);
    var data = new FormData(this);
    var obj = {}
    for (const [key, value] of data) {
        obj[key] = value;
      }
    let response = fetch("/quiz/check-answer/", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(obj)
      }).then(response => response.json())
      .then(data => {
        $('#check-answer').hide();
        if (data["correct"]) {
            $('#answer-result').text("Benar!");
            $('#answer-result').css("color", "green");
            $('#next-question').show();
        } else {
            $('#answer-result').text("Salah!");
            $('#answer-result').css("color", "red");
            $('#next-question').show();
        }
      });
    event.preventDefault();
  });
