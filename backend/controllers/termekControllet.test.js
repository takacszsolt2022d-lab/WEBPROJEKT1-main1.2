import { jest } from '@jest/globals';
import TermekController from "./termekController.js";

test("create rejects products with missing required fields", async () => {
    const response = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
    };

    await TermekController.create({ body: {} }, response);

    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({
        error: 'Hiányzó mezők: nev, ar, keszlet szükségesek.'
    });
});
