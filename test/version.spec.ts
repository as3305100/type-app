import { getVersion } from "../src/utils/version";

describe("version", () => {
  it("it should return the correct application version", () => {
    expect(getVersion()).toBeTruthy();
  });
});
