'use strict';

const insertionSort = require('../insertionsort');

describe('Testing insertion-sort', () => {
  it('should sort an array', () => {
    let arr=[8,4,23,42,16,15];
    expect(insertionSort(arr)).toStrictEqual([4,8,15,16,23,42]);
  });
  it('should sort reverse-sorted array', () => {
    let arr=[20,18,12,8,5,-2];
    expect(insertionSort(arr)).toStrictEqual([-2,5,8,12,18,20]);
  });
});