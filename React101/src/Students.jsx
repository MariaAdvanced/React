

import PropTypes from 'prop-types'
function Students(props){
   
    
    return(

        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
    }
    // propTypes = a mechanism that ensures that the passed value of the correct datatype.  age: PropTypes.number
    Students.propTypes= {
        name: PropTypes.string,
        age: PropTypes.number,
        isStudent: PropTypes.bool,
    }
    export default Students
    // defaultProps = default values for props on case they are not passed from parent component name :"Guest"
    Students.defaultProps = {
        name : "Guest",
        age : 0 ,
        isStudent: false,
    }