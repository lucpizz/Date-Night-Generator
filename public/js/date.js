$("#my-form").on("submit", (e) => {
  e.preventDefault();

  let location = $("#location").val();
  let rating = $("input[name='star']:checked").val();

  const data = {
    location,
    rating,
  };

  console.log(data);
  console.log(location, rating);

  $.post("/api/add", data, (response) => {
    console.log("It Works!", response);
  }).fail((err) => {
    console.log("It's Broken!", err);
  });
});
