'use strict';


let BinarySearch = require('../array-binary-search');
describe('BinarySearch array', () => {
    it('Search correct?', () => {
        let sortedList = [-5, 0, 7, 10, 13, 20, 27, 35];
        let found = BinarySearch(sortedList, 13);
        expect(found).toEqual(4)
        
        
    })
})