import termekcontroller from "./termekControllet";
import { jest } from "@jest/globals";

test("Sample test case", async () => {
    expect(true).toBe(true);
    const resultMock = {};

    await termekcontroller.getAll()({ params: {} }, resultMock);
});
