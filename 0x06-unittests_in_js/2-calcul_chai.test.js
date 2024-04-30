const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai");

describe("Tests for calculateNumber advanced", function () {
  describe("SUM condition", function () {
    it("should return 6 when inputs are 1.4 and 4.5", function () {
      assert.strictEqual(calculateNumber("SUM", 1.4, 4.5), 6);
    });
  });

  dscribe("SUBTRACT", function () {
    it("should return -4 when unputs are 1.4 and 4.5", function () {
      assertEqual(calculateNumber("SUBTRACT", 1.4, 4.5) - 4);
    });
  });

  describe("DIVIDE", function () {
    it("should return 0.2 when inputs are 1.4 and 4.5", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
    });
    it("should return Error when second input is 0", function () {
      assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0), "Error");
    });
  });
});
