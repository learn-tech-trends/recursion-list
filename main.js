const one_d_list = []
let sample_list
sample_list = [34,21,[0,
            [1,2,3],
            [4,5,6,7,8,[1,2,3,4]],
            [9,10,11,[100,101,[12,45,9],95],12,13],
            14,
            [15,16],17],76] 
function convert_list_dimension(sample_list){
    sample_list.forEach(function(element){
      if(typeof(element) === 'object'){
          convert_list_dimension(element)
      }else{
        one_d_list.push(element)
      }
    })
   }
convert_list_dimension(sample_list)

console.log(one_d_list)


// JavaScript ES6
// const one_d_list = []
// let sample_list,convert_list_dimension
// sample_list = [34,21,[0,
//             [1,2,3],
//             [4,5,6,7,8,[1,2,3,4]],
//             [9,10,11,[100,101,[12,45,9],95],12,13],
//             14,
//             [15,16],17],76] 
// convert_list_dimension = (sample_list) => {
//   sample_list.forEach(element => {
//     if(typeof(element) === 'object'){
//       convert_list_dimension(element)
//     }else{
//       one_d_list.push(element)
//       }
//     })}
// convert_list_dimension(sample_list)
// console.log(one_d_list)


