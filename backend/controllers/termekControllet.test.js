import { expect, jest, test } from "@jest/globals";

const termekModelMock = {
    getAll: jest.fn(),
    getbyId: jest.fn(),
    create: jest.fn(),
};

jest.unstable_mockModule("../models/termekModel.js", () => ({
    default: termekModelMock,
}));

const { default: termekController } = await import("./termekController.js");

const createReponse = () => {
    const res = {
        status: jest.fn(),
        json: jest.fn(),
    };
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
};

test("Visszaadja az összes terméket JSON formátumban", async () => {
    const mockAdatok = [{ id: 1, nev: "Termék 1", ár: 1000 }];
    termekModelMock.getAll.mockResolvedValue(mockAdatok);
    const res = createReponse();
    await termekController.getAll({ params: {} }, res);
    expect(res.json).toHaveBeenCalledWith(mockAdatok);
});
