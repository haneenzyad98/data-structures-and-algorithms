'Use strict';

function leftJoin(table1, table2) {
 
  let result = [];

  for (let i = 0; i <= table1.table.length - 1; i++) {
    if (table1.table[i]) {
      let key = [Object.keys(table1.table[i].head.value)[0]][0];
      let value = [Object.values(table1.table[i].head.value)[0]][0];
      result.push([key, value]);
      //   console.log('key1',key);
      //   console.log('value1',value);
      //   console.log('-------------------------');

      if (table1.table[i].head.next) {
        let current = table1.table[i].head.next;

        while (current) {
          // console.log('current',current);
          let key = Object.keys(current.value)[0];
          // console.log('hash   ',key,'   ',table1.hash(key));
          let value = Object.values(current.value)[0];
          //   console.log('-------------------------');
          //   console.log('key',key);
          //   console.log('value',value);
          result.push([key, value]);
          current = current.next;
        }
      }
    }
  }
  for (let j = 0; j <= result.length - 1; j++) {
    let join = table2.get(result[j][0]);
    result[j].push(join);
  }
  return result.length === 0 ? null : result;
}

module.exports = leftJoin;
