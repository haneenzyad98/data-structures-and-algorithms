const {Stack}=require('../stacksAndQueues/stacks-and-queues');

// function multiBracketValidation(input){

//   const stack=new Stack();

//   for (let i = 0; i <input.length() ; i++) {
//     let c = input;
//     if(c=='('){
//         stack.push(')');
//     }
//     if(c=='['){
//         stack.push(']');
//     }
//     if(c=='{'){
//         stack.push('}');
//     }else if (c==')' || c=='}' || c==']' ){
//         if(stack.isEmpty() || stack.pop()!=c)
//             return false;
//     }
// }
// //if stack is empty at this point, return true
// return stack.isEmpty();
// }
