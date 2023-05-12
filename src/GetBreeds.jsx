// import React from "react";
// import AuthToken from "./AuthToken";

// const GetBreeds = () => {
//     const handleButtonClick = async () => {
//         const token = await AuthToken();
//         const options = {
//             headers: {
//                 "Authorization": "Bearer " + token
//             }
//         };
//     fetch('https://api.petfinder.com/v2/types/dog/breeds', options)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error=> {
//         console.error('Error:', error);
//     });
//     }
//     return (
//         <button onClick={handleButtonClick}>
//             Get breeds!
//         </button>
//     );
// }

// export default GetBreeds;