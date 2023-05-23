// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function SearchDogs({token}) {
  
//   const [dogCoat, setDogCoat] = useState(["Hairless", "Short", "Medium", "Long", "Wire", "Curly"].map(coat=>({name: coat, checked:false})));
//   const [dogColor, setDogColor] = useState([
//     "Apricot / Beige",
//     "Bicolor",
//     "Black",
//     "Brindle",
//     "Brown / Chocolate",
//     "Golden",
//     "Gray / Blue / Silver",
//     "Harlequin",
//     "Merle (Blue)",
//     "Merle (Red)",
//     "Red / Chestnut / Orange",
//     "Sable",
//     "Tricolor (Brown, Black, & White)",
//     "White / Cream",
//     "Yellow / Tan / Blond / Fawn",
//   ].map(color => ({name: color, checked:false})));

  // const handleDogCoatChange = (e) => {
  //   if (e.target.checked) {
  //       setDogCoat();
  //   }
  // }

//   const handleChecked = (list, setList) => e => {
//     const {name, checked } = e.target;
//     setList(prevList => prevList.map(item=>item.name === name? {...item} : item))
//   }


//   let navigate = useNavigate();
//   const routeChange = () => {
//     let path = `/login/`;
//     navigate(path);
//   };
//   const buttonStyle = {
//     minHeight: "25px",
//     paddingbottom: "100px",
//   };

//   const columns = {
//     columnCount: "2",
//     columnGap: "10px",
//   };

//   const params = {
//     coats: ["Hairless", "Short", "Medium", "Long", "Wire", "Curly"],
//     colors: [
//       "Apricot / Beige",
//       "Bicolor",
//       "Black",
//       "Brindle",
//       "Brown / Chocolate",
//       "Golden",
//       "Gray / Blue / Silver",
//       "Harlequin",
//       "Merle (Blue)",
//       "Merle (Red)",
//       "Red / Chestnut / Orange",
//       "Sable",
//       "Tricolor (Brown, Black, & White)",
//       "White / Cream",
//       "Yellow / Tan / Blond / Fawn",
//     ],
//   };
// const SearchForDogs = () => {

//   const selectedCoats = dogCoats.filter(coat => coat.checked).map(coat=> coat.name)
//   const selectedColors = dogColors.filter(color=> color.checked).map(color =>color.name)

//   let breedSearchUrl = `https://api.petfinder.com/v2/types/animals?type=dog${coat ? `&coat=${coat}`: ""}${color ? `&colors=${color}`: ""}`;
//   let breedSearchOptions = {     
//       method: 'GET',
//       headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${token}`
//     }

//   }
//   fetch(breedSearchUrl, breedSearchOptions)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));
//   console.log('now what is token?: line 64', token)
// }

//   return (
//     <div>
//       <h1>test</h1>
//       <div>
//         <h2>coat</h2>
//       </div>
//       <div style={columns}>
//         {dogCoat.map((coat, i) => (
//           <div key={i}>
//             <label htmlFor={coat.name}>{coat.name}</label>
//             <input type="checkbox" id={coat.name} checked={coat.checked} onChange={handleChecked(dogCoat, setDogCoat)}></input>
//           </div>
//         ))}
//       </div>
//       <div>
//         <h2>color</h2>
//       </div>
//       <div style={columns}>
//         {params.colors.map((color) => (
//           <div>
//             <label for="coat">{color}</label>
//             <input type="checkbox" id="coat"></input>
//           </div>
//         ))}
//       </div>
//       <button style={buttonStyle} type="submit"
//       onClick={SearchForDogs}>
//         find my dog
//       </button>
//       <button onClick={routeChange}>back</button>
//     </div>
//   );
// }

// export default SearchDogs;
