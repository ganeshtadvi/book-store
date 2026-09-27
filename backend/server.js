import app from "./app.js";
import dotenv from 'dotenv'

dotenv.config()

const PORT=process.env.PORT || 8000

app.listen(PORT, (err) => {
  if (!err) {
    console.log("server runs successfully");
  } else {
    console.log("Server Not Started....: ", err);
  }
});
