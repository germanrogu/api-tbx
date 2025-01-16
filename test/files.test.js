const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../src/app");

chai.use(chaiHttp);
const { expect } = chai;

describe("Files API", function () {
  this.timeout(5000);

  it("should fetch the list of files", async () => {
    const res = await chai.request(app).get("/files/list");
    expect(res).to.have.status(200);
    expect(res.body).to.have.property("files");
  });

  it("should fetch formatted file data", async () => {
    const res = await chai.request(app).get("/files/data");
    expect(res).to.have.status(200);
    expect(res.body).to.be.an("array");

    const errors = [];

    res.body.forEach((file) => {
      try {
        expect(file).to.have.property("file");
        expect(file.file).to.be.a("string");

        expect(file).to.have.property("lines");
        expect(file.lines).to.be.an("array");

        file.lines.forEach((line) => {
          expect(line).to.have.property("text");
          expect(line.text).to.be.a("string");

          expect(line).to.have.property("number");
          expect(line.number).to.be.a("number");

          expect(line).to.have.property("hex");
          expect(line.hex).to.be.a("string");
        });
      } catch (assertionError) {
        console.error(
          `Validation error for file ${file.file || "unknown"}: ${
            assertionError.message
          }`
        );
        errors.push(
          `Validation error for file ${file.file || "unknown"}: ${
            assertionError.message
          }`
        );
      }
    });

    if (errors.length > 0) {
      console.error("Errors encountered during file validation:", errors);
    }
  });
});
