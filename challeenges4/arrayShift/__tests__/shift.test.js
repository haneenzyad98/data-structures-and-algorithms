'use strict';

let ShiftArray = require('../array-shift');
describe('Shift an array', () => {
    it('shifted the array?', () => {
        let a = [2,3,5,6]
        let b = 4;
        expect(ShiftArray(a,b)).toEqual([2,3,4,5,6])
    })
})