import termekcontroller from "./termekController";
import { expect, jest, test } from "@jest/globals";
const mockModel = jest.mock("termekModel");

test("Sample test case", async () => {
    expect(true).toBe(true);
    const resultMock = { json: jest.fn() };
    mockModel.getAll.mockResolvedValue([{ id: 1, nev: "Termék 1", ár: 1000 }]);
    await termekController.getAll()({ params: {} }, resultMock);
    expect(mockModel.getAll).toHaveBeenCalled();
});
