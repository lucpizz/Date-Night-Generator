const express = require("express");
const router = express.Router();
const musicapi = require("../routes/music.js")
console.log(musicapi)

router.get("/", async(req, res) => {
 try {
  const response = await musicapi
  console.log(response.data)
  res.render("../views/layouts/main.handlebars" , {body:response.data.data[0].title})
 } catch (error) {
   console.log(error)
 }

});



module.exports = router;
