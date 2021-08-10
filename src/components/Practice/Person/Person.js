import React from 'react';

let Person = (props) => {
    console.log(props)
    const {name, age} = props;
    return (
        <div>
            <h1>name:{name}</h1>
            <h3>age:{age}</h3>
        </div>
    );
};

// class Person extends Component {
//     constructor(props){
//           super(props);
//     }
//     render(){
//         // console.log(this.props);
//         // return <h1></h1>
//         return (
//         <div>
//             <h1>name:{this.props.name}</h1>
//             <h3>age:{this.props.age}</h3>
//         </div>
//     );
//     }
// }

export default Person;