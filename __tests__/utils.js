const request = require('supertest');
const { cutString } = require('../utils');

describe("cutString", () => {
    it("returns every third character", () => {
        expect(cutString("iamyourlyftdriver")).toBe("muydv")
    })

    it("returns empty string when less than 3 characters", () => {
        expect(cutString("ia")).toBe("")
    })

    it("returns empty string when less than 3 character", () => {
        expect(cutString("win")).toBe("n")
    })
});