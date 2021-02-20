$(document).ready(() => {
  console.log("test");

  $.get("/api/Dates", (response) => {
    response.forEach((data) => {
      //$(data).appendTo(".dbinfo");

      $(".dbinfo").append(
        `<p>${data.name} ${data.rating}</p><button class="delete" id=${data.id}>delete</button>`
      );
      location.focus();
    });

    $(".delete").on("click", () => {
      console.log("test-delete");
      $.ajax({
        url: `/api/Dates/${this.id}`,
        type: "DELETE",
        success: (result) => {
          console.log(result);
        },
      });
    });
  });
});

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
    // $(".dbinfo").empty();
    response.forEach((data) => {
      //$(data).appendTo(".dbinfo");

      $(".dbinfo").append(
          `<p>${data.name} ${data.rating}</p><button class="delete" id=${data.id}>delete</button>`
      );
      location.val("");
      rating.val("");

      location.focus();

      //console.log(response.name);
    });

    $(".delete").on("click", (e) => {
      console.log("test-delete");
      $.ajax({
        url: `/api/Dates/${e.target.id}`,
        type: "DELETE",
        success: (response) => {
          $(".dbinfo").empty();

          response.forEach((data) => {
            //$(data).appendTo(".dbinfo");

            $(".dbinfo").append(
              `<p>${data.name} ${data.rating}</p><button class="delete btn waves-effect waves-light" id=${data.id}>delete</button>`
            );
            location.val("");
            rating.val("");

            location.focus();

            //console.log(response.name);
          });
        },
      });
    });

    console.log("It Works!", response);
  }).fail((err) => {
    console.log("It's Broken!", err);
  });
});
