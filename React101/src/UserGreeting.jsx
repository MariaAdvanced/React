import PropTypes from 'prop-types'
function UserGreeting(props){
// first example
//  if(props.isLoggedIn){
//     return <h2>Welcome {props.username}</h2>
//  }
//  else{
//     return <h2>Please Log In to continue</h2>
//  }
// second example
const welcomeMessage = <h2 className="welcome-message">Welcome {props.username} </h2>
const logInMessage = <h2 className="login-prompt">Please Log In to continue</h2>
return(props.isLoggedIn ? welcomeMessage
                         :logInMessage );
}
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting