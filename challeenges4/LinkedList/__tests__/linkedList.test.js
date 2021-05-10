'use strict';

const Linkedlist = require('../linked-list');

describe('Linked List', ()=> {
    it('constructor()', ()=> {
        let list = new Linkedlist();
        expect(list.head).toBeNull();
    });

    it('insert()', ()=> {
        const list = new Linkedlist();
        const firstValue = 'Fist Value';
        list.insert(firstValue);
        expect(list.head.value).toEqual(firstValue);
        
        const secondValue =  'Second Value';
        list.insert(secondValue);
        expect(list.head.value).toEqual(firstValue);
        expect(list.head.next.value).toEqual(secondValue);

        const thirdValue =  'Third Value';
        list.insert(thirdValue);
        expect(list.head.value).toEqual(firstValue);
        expect(list.head.next.value).toEqual(secondValue);
        expect(list.head.next.next.value).toEqual(thirdValue);

    });
})