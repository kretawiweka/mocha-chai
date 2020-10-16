const assert = require("chai").expect;

const page = require("../page/post");

const testCase = {
  positive: {
    postPost:
      "As a User, I want to get response with same data type after post",
  },
};

describe(`[Post] Posts List`, () => {
  it(`@post ${testCase.positive.postPost}`, async () => {
    const data = {
      title: "recomendation",
      body: "motorcycle",
      userId: 12,
    };
    const response = await page.postPost(data);
    assert(typeof response.body.title).to.equal(typeof data.title);
    assert(typeof response.body.body).to.equal(typeof data.body);
    assert(typeof response.body.userId).to.equal(typeof data.userId);
  });
});
