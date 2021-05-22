'use strict';

const LinkedList = require('../LinkedList');
// const Linkedlist = require('../linked-list');

describe('Linked List', () => {

    it(' instantiate an empty linked list', () => {
        let list = new LinkedList();

        expect(list.head).toBeNull();
    });

    it('Can properly insert into the linked list', () => {
        const list = new LinkedList();
        const firstValue = 2;
        list.insert(firstValue);
        expect(list.head.value).toEqual(firstValue);

        const secondValue = 3;
        list.insert(secondValue);
        expect(list.head.value).toEqual(firstValue);
        expect(list.head.next.value).toEqual(secondValue);

        const thirdValue = 4;
        list.insert(thirdValue);
        expect(list.head.value).toEqual(firstValue);
        expect(list.head.next.value).toEqual(secondValue);
        expect(list.head.next.next.value).toEqual(thirdValue);

    });
    it('The head property will properly point to the first node in the linked list', () => {
        const list = new LinkedList();
        const firstValue = 2;
        list.insert(firstValue);
        expect(list.head.value).toEqual(2);
    });
    it('Can properly insert multiple nodes into the linked list', () => {
        const list = new LinkedList();
        const firstValue = 2;
        const secondValue = 3;
        list.insert(firstValue);
        list.insert(secondValue);
        expect(list.head.value).toEqual(2);
        expect(list.head.next.value).toEqual(3);

    });
    it('Will return true when finding a value within the linked list that exists', () => {
        const list = new LinkedList();
        const firstValue = 2;
        const secondValue = 'Second Value';
        list.insert(firstValue);
        expect(list.includes(firstValue)).toEqual(true);
        expect(list.includes(secondValue)).toEqual(false);
    });
    it('Can properly return a collection of all the values that exist in the linked list', () => {
        const list = new LinkedList();
        const firstValue = 2;
        const secondValue = 3;
        list.insert(firstValue);
        list.insert(secondValue);
        expect(list.toString()).toEqual("{2}->{3}->");
    });


    it('Can successfully insert a node before the first node of a linked list', () => {
        const list = new LinkedList();
        const firstValue = 2;
        const secondValue = 4;
        list.insert(firstValue);
        list.insert(secondValue);
        list.insertBefore(4, 3);

        expect(list.head.value).toEqual(2);
        expect(list.toString()).toEqual('{2}->{3}->{4}->');

    });



    it('Can successfully insert a node Afte the first node of a linked list', () => {
        const list = new LinkedList();
        const firstValue = 2;
        const secondValue = 4;
        list.insert(firstValue);
        list.insert(secondValue);
        list.insertAfte(4, 3);

        expect(list.head.value).toEqual(2);
        expect(list.toString()).toEqual('{2}->{4}->{3}->');

    });

    it(' kth value in a linked list', () => {
        const list = new LinkedList();
        const f = 1;
        list.insert(f);
        const s = 2;
        list.insert(s);
        const th = 3;
        list.insert(th);
        const fo = 4;
        list.insert(fo);


        expect(list.FromEnd(0)).toEqual(4);
        expect(list.FromEnd(1)).toEqual(3);
        expect(list.FromEnd(2)).toEqual(2);
        expect(list.FromEnd(3)).toEqual(1);
        expect(list.FromEnd(7)).toEqual('Exception');
        expect(list.FromEnd(99)).toEqual('Exception');

    });
})