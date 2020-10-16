const assert = require("chai").expect;

const page = require("../page/post");

const testCase = {
  positive: {
    getList: "As a User, I want to be able to get Post list",
    correctDataType:
      "As a User, I want to be get post data with correct data type",
  },
};

describe(`[GET] Posts List`, () => {
  it(`@get ${testCase.positive.getList}`, async () => {
    const response = await page.getPost();
    assert(response.status).to.equal(200);
  }),
    it(`@get ${testCase.positive.correctDataType}`, async () => {
      let isCorrectDataType = true;
      const response = await page.getPost();
      const data = response.body;
      data.map((item, index) => {
        assert(typeof item.userId).to.equal("number");
        assert(typeof item.id).to.equal("number");
        assert(typeof item.title).to.equal("string");
        assert(typeof item.body).to.equal("string");
      });
    });
});
