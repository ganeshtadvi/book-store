import app from "./app.js";

app.listen(8000, (err) => {
  if (!err) {
    console.log("server runs successfully");
  } else {
    console.log("Server Not Started....: ", err);
  }
});
