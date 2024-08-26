import PropTypes from 'prop-types';
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
function List(props){
    //    const fruits = [{id: 1, name :"apple" , calories: 95},
    //                     {id: 2, name :"orange", calories: 110},
    //                     {id: 3, name :"banana", calories: 150},
    //                     {id: 4, name :"coconut", calories: 50},
    //                     {id: 5, name :"pineapple", calories: 170}];
     //   fruits.sort((a,b) => a.name.localeCompare(b.name)); // ALPHABETICAL
//   fruits.sort((a,b) => b.name.localeCompare(a.name)); // REVERSE  ALPHABETICAL
//fruits.sort((a,b) => a.calories - b.calories); // NUMERIC
//fruits.sort((a,b) => b.calories - a.calories); // REVERSE NUMERIC  
// const lowCalFruits = fruits.filter(fruit => fruit.calories <100);

//         const listItems = lowCalFruits.map(lowCalFruits => <li key={lowCalFruits.id}>
//                                                 {lowCalFruits.name}: &nbsp;
//                                                <b>{lowCalFruits.calories}</b> </li>);
           // const HighCalFruits = fruits.filter(fruit => fruit.calories >= 100);
            // const listItems = HighCalFruits.map(HighCalFruits => <li key={HighCalFruits.id}>
            //     {HighCalFruits.name}: &nbsp;
            //    <b>{HighCalFruits.calories}</b> </li>);
            const category = props.category;
            const itemList = props.items;
            const listItems = itemList.map(item => <li key={item.id}>
                 {item.name}: &nbsp;
              <b>{item.calories}</b> </li>);
        return( <> <h3 className="list-category">{category}</h3>
<ol className="list-Items">{listItems}</ol>
        </>
       
         );
        }
        List.propTypes = {
            category: PropTypes.string,
            items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                                        name: PropTypes.string,
                                                        items: PropTypes.number,
            })),
        }
        List.defaultProps ={
            category:"Caregory",
            items: [],
        }
    export default List