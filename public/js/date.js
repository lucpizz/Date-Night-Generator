$("#my-form").on("submit", (e) => {
  e.preventDefault();

  let location = $("#location");
  let rating = $("#rating");
  //let rating = $("input[name='star']:checked").val();

  const data = {
    location: location.val(),
    rating: rating.val(),
  };

  console.log(data);
  console.log(location, rating);

  $.post("/api/add", data, (response) => {
    response.forEach((data) => {
      //$(data).appendTo(".dbinfo");

      $(".dbinfo").append(`<p>${data.name} ${data.rating}</p>`);
      location.val("");
      rating.val("");

      location.focus();

      //console.log(response.name);
    });

    //console.log(response);

    console.log("It Works!", response);
  }).fail((err) => {
    console.log("It's Broken!", err);
  });
});
