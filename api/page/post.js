const supertest = require("supertest");
const env = require("dotenv").config();

const api = supertest(`${process.env.BASE_URL}/posts`);

const getPost = () =>
  api
    .get("")
    .set("Content-Type", "application/json")
    .set("Accept", "application/json");

module.exports = {
  getPost,
};
