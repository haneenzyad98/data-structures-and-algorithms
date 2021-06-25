  
'use strict';

const HashTable = require('../hashtable');

describe('Hash Table', ()=> {
   
    it ('Adding a key/value to your hashtable results in the value being in the data structure', ()=> {
        let hashtable = new HashTable(50);
        hashtable.set('bbbb','cccc');
        expect(hashtable.table[hashtable.hash('firstName')]).toBeDefined();
    });
    it ('Retrieving based on a key returns the value stored', ()=> {
        let hashtable = new HashTable(50);
        hashtable.set('bbbb','cccc');

        expect(hashtable.get('bbbb')).toEqual('cccc');

    });
 
})