// HOW RO STYLE REACT COMPONENTS WITH CSS (NOT INCLUDING EXTERNAL FRAMEWORKS OR PREPROCESSORS)
// 1. EXTERNAL 2.MODULES 3 INLINE
// props = read only properties that are shared between componets
// a parent component can send data to a child component <Component key=value />

// import Students from './Students.jsx'
// conditional rendering = allows you yo control what gets rendered in your application based on certains conditions (show , hide , or change components)
// import UserGreeting from './UserGreeting.jsx'
// Render Lists
//import List from './List.jsx'
//import ClickEvents from './ClickEvents.jsx'
// import ProfilePicture from './ProfilePicture.jsx'
// React hook = Special function that allows functional components to use React features without writing class components(React v16)
// (useState, useEffect, useContext, UseReducer, useCallback and more)
// useState() = A React hook that allows the creation of a stateful variable AND a setterfunction to update its value in the Virtual DOM. [name, setName]
// import Counter from './Counter.jsx'
// import MyComponent from './MyComponent.jsx'
//import Counter from './Counter.jsx'
//onChange = event handler used primarily with from elements . ex. <input>, <textarea>, <select>, <radio> . Triggers a function every time the value of the input changes
// import MyComponentOnChange from './MyComponentOnChange.jsx'
// COLOR PICKER APP
//import ColorPicker from './ColorPicker.jsx'
// import UpdaterFunctions from './UpdaterFunctions.jsx'
//  import UpdateObjectsInState from './UpdateObjectsInState.jsx'
// import UpdateArraysInState from './UpdateArraysInState.jsx'
// import UpdateArrayOfObjectsInState from './UpdateArrayOfObjectsInState.jsx'
import ToDoListApp from './ToDoListApp.jsx'
function App() {
 /* const fruits = [{id: 1, name :"apple" , calories: 95},
    {id: 2, name :"orange", calories: 110},
    {id: 3, name :"banana", calories: 150},
    {id: 4, name :"coconut", calories: 50},
    {id: 5, name :"pineapple", calories: 170}];

    const vegetables = [{id: 6, name :"potatoes" , calories: 110},
      {id: 7, name :"celery", calories: 15},
      {id: 8, name :"carrots", calories: 25},
      {id: 9, name :"corn", calories: 150},
      {id: 10, name :"broccoli", calories: 50}];
return(
  <>

{/* <Students name="Spongebob" age= {30} isStudent={true} />
<Students name="Patric" age= {40} isStudent={false} />
<Students/> */
/*<UserGreeting isLoggedIn={true} username="BroCode"/>*/

/*fruits.length > 0 ? <List items={fruits} category="Fruits" /> : null}
{vegetables.length > 0 ? <List items={vegetables} category="vegetables" /> :null */
/*fruits.length > 0 && <List items={fruits} category="Fruits" />}
{vegetables.length > 0 && <List items={vegetables} category="vegetables" /> */
// click event = An interaction when a user clicks on a specific element.
// We can respond to click by passing a callback to the onClick event handler
//<ClickEvents/>
//<ProfilePicture/>
return(
  <>

<ToDoListApp/>
  </>

);
 
}

export default App
