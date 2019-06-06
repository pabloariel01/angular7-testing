import { getCurrencies } from "./getCurrencies";

describe('getcurrencies', () => {
    it('should reurn supported currencies', () => {
        const curr = getCurrencies();
        expect(curr).toContain('USD')
        expect(curr).toContain('AUD')
        expect(curr).toContain('EUR')
    })
})