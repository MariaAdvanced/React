function ClickEvents(){
//     let count = 0;
//     const handleClick = (name) => {
//         if(count < 3){
//             count++;
//             console.log(`${name} you clicked me ${count} time/s`)
//         }
   
//     else{
//         console.log(`${name} stop clicking me`);
//     };
// };
// //     const handleClick2 = (name)  => console.log (`${name} stop clicking me`);
// //     
        
// //    <button onClick={ () => handleClick2("Maria")}>click me</button>
// return(
//    <button onClick={ () => handleClick("Maria")}>click me</button>
//     );
const handleClick = (e) => e.target.textContent = "OUTCH";
    // return(
    //     <button onClick={ (e) => handleClick(e)}>click me</button>
    //      );
    // }
    return(
        <button onDoubleClick={ (e) => handleClick(e)}>click me</button>
         );
    }
    export default ClickEvents