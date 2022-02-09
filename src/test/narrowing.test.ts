import { padLeft } from "../narrowing"


describe("narrowing", () => {
    it("should be ok", () => {
        expect(true).toBeTruthy
    })
    it("should add nth space before", () => {
        const word = padLeft(5, "$")
        expect(word).toBe(" ".repeat(5)+"$")
    })
})