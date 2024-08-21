
// Example 1
// function List(){
//     const fruits = ["apple","orange","banana","coconut","pineapple"];
//     fruits.sort();
//     const listItems = fruits.map(fruit => <li>{fruit}</li>);
//     return(
//    <ol>{listItems}</ol>
//     );
//     }
// Example 2
function List(){
       const fruits = [{name :"apple" , calories: 95},
                        {name :"orange", calories: 110},
                        {name :"banana", calories: 150},
                        {name :"coconut", calories: 50},
                        {name :"pineapple", calories: 170}];

        const listItems = fruits.map(fruit => <li key={fruit.name}>{fruit.name}</li>);
        return(
       <ol>{listItems}</ol>
         );
        }
    export default List