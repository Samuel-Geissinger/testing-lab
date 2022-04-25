const { add, greeting, returnTwo, multiply, divide, subtract } = require('./functions');



it('should return 2', () => {
    expect(returnTwo()).toBe(2);
})

it('should return Hello, name', () => {
    expect(greeting('James')).toBe('Hello, James');
    expect(greeting('Jill')).toBe('Hello, Jill');
})
describe('Math functions', () => {
    it('should return add num + num', () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(5, 9)).toEqual(14);
    })
    
    it('should return subtract num - num', () => {
        expect(subtract(1, 2)).toEqual(-1);
        expect(subtract(5, 9)).toEqual(-4);
    })
    
    it('should return multiply num * num', () => {
        expect(multiply(1, 2)).toEqual(2);
        expect(multiply(5, 9)).toEqual(45);
    })
    
    it('should return divide num / num', () => {
        expect(divide(1, 2)).toEqual(0.5);
        expect(divide(5, 10)).toEqual(0.5);
    })
})
