const supertest = require("supertest");
const env = require("dotenv").config();

const api = supertest(process.env.BASE_URL);

const getPost = () =>
  api
    .get("/posts")
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");

const postPost = (data) =>
  api
    .post("/posts", data)
    .send(data)
    .set("Accept", "application/json")
    .expect("Content-Type", /json/);
module.exports = {
  getPost,
  postPost,
};
