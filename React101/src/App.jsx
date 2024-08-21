// HOW RO STYLE REACT COMPONENTS WITH CSS (NOT INCLUDING EXTERNAL FRAMEWORKS OR PREPROCESSORS)
// 1. EXTERNAL 2.MODULES 3 INLINE
// props = read only properties that are shared between componets
// a parent component can send data to a child component <Component key=value />

// import Students from './Students.jsx'
// conditional rendering = allows you yo control what gets rendered in your application based on certains conditions (show , hide , or change components)
// import UserGreeting from './UserGreeting.jsx'
// Render Lists
import List from './List.jsx'
function App() {
 
return(
  <>

{/* <Students name="Spongebob" age= {30} isStudent={true} />
<Students name="Patric" age= {40} isStudent={false} />
<Students/> */}
{/*<UserGreeting isLoggedIn={true} username="BroCode"/>*/}

<List></List>
  </>

);
 
}

export default App
