$("my-form").on("submit", (e) => {
  e.preventDefault();

  const data = {
    location: $("#location").val(),
    //rating: $(#rating").val();
  };

  console.log(data);

  $.post("/api/add", data, (repsonse) => {
    console.log("It Works!", response);
  }).fail((err) => {
    console.log("It's Broken!", err);
  });
});
