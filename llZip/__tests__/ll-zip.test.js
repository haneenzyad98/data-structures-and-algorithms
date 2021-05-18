'use strict';

const LinkedList = require('../ll-zip');
// const Linkedlist = require('../linked-list');

describe('Linked List', () => {

    it(' zip two list ', () => {
        let list = new LinkedList();
        let list1 = new LinkedList();
       
        list1.insert(1);
        list1.insert(2);
        list1.insert(3);
     
        let list2 = new LinkedList();
        list2.insert(4);
        list2.insert(5);
        list2.insert(6);
    
        // list.zip(list1,list2)

        expect(list.zip(list1,list2).toString()).toEqual('{1}->{4}->{2}->{5}->{3}->{6}->');

    

    });

})