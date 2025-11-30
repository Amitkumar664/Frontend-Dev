// import React from 'react';

// const Button3 = (props) => {
//   console.log("Reached inside Button3", props);

//   return (
//     <div>
//       <p>Button Component</p>

//       <p>Child Value: {props.value}</p>

//       <ul>
//         <li>{props.info.name}</li>
//         <li>{props.info.rollNo}</li>
//         <li>{props.info.university}</li>
//       </ul>
//     </div>
//   );
// }

// export default Button3;

import React from 'react'
// const Button = (props) => {

  const Button = ({color,label}) => {  
    // console.log("reached inside button , props,props.key2.name);")
    console.log("label",label);
    return (
        // <div>
        //     {/* <p>Button</p>
        //     <p>Child Value will be:
        //         {key}
        //     </p>
        //     <ul>
        //         <li>{key2.name}</li>
        //         <li>{key2.rollNo}</li>
        //         <li>{key2.university}</li>
        //     </ul> */}
            
        // </div>

         <div>
            <button style={{ backgroundColor: color }}>{label}</button>
        </div>
    )
}
export default Button