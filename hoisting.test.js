// failing example - `The module factory of `jest.mock()` is not allowed to reference any out-of-scope variables.

function substract(a, b) {
  console.log("Hello from mock!");
  return a - b;
}

jest.mock("./adder", () => substract); // would work with jest.doMock

const adder = require("./adder");

describe("Test", () => {
  it("works", () => {
    expect(adder(2, 2)).toBe(0); // mocked value
  });
});
