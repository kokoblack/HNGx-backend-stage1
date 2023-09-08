const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.get('/', (req, res) => {
//   res.send('hello!!!!!')
// })

app.get("/api", (req, res) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const slack_name = req.query.slack_name;
  const track = req.query.track;
  const current_day = weekday[new Date().getDay()];
  const utc_time = new Date().toISOString().split(".")[0] + "Z";
  const github_file_url =
    "https://github.com/kokoblack/HNGx-backend-stage1/blob/main/api/index.js";
  const github_repo_url = "https://github.com/kokoblack/HNGx-backend-stage1";
  const status_code = 200;

  const data = {
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url,
    github_repo_url,
    status_code,
  };

  res.send(data);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
