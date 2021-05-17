'use strict';

const LinkedList = require('../linked-list');
const Linkedlist = require('../linked-list');

describe('Linked List', ()=> {
    
    it(' instantiate an empty linked list', ()=> {
        let list = new Linkedlist();
        expect(list.head).toBeNull();
    });

    it('Can properly insert into the linked list', ()=> {
        const list = new Linkedlist();
         const firstValue = 2;
        list.insert(firstValue);
        expect(list.head.value).toEqual(firstValue);
        
        const secondValue =  3;
        list.insert(secondValue);
        expect(list.head.value).toEqual(firstValue);
        expect(list.head.next.value).toEqual(secondValue);

        const thirdValue =  4;
        list.insert(thirdValue);
        expect(list.head.value).toEqual(firstValue);
        expect(list.head.next.value).toEqual(secondValue);
        expect(list.head.next.next.value).toEqual(thirdValue);

    });
    it('The head property will properly point to the first node in the linked list',()=>{
        const list = new Linkedlist();
        const firstValue = 2;
       list.insert(firstValue);
        expect(list.head.value).toEqual(2); 
    });
    it('Can properly insert multiple nodes into the linked list',()=>{
        const list = new Linkedlist();
        const firstValue = 2;
        const secondValue =  3;
       list.insert(firstValue);
       list.insert(secondValue);
        expect(list.head.value).toEqual(2); 
        expect(list.head.next.value).toEqual(3); 

    });
    it('Will return true when finding a value within the linked list that exists',()=>{
        const list = new Linkedlist();
        const firstValue = 2;
        const secondValue =  'Second Value';
       list.insert(firstValue);
        expect(list.includes(firstValue)).toEqual(true);
        expect(list.includes(secondValue)).toEqual(false);
    });
    it('Can properly return a collection of all the values that exist in the linked list',()=>{
const list= new LinkedList();
const firstValue = 2;
const secondValue =  3;
list.insert(firstValue);
list.insert(secondValue);
expect(list.toString()).toEqual("{2}->{3}->");
    });

})