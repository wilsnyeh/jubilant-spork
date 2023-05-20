import React, { useEffect } from "react";

const FetchDogs = ({ imageUrl, doggo, setDoggo }) => {
    // const [doggo, setDoggo] = useState(null);

    const getImage = () => {
        let url = "https://dog.ceo/api/breeds/image/random";
        fetch(url)
          .then((response) => response.json())
          .then((data) => setDoggo(data.message))
          .catch((error) => console.error("err:", error));
      };
    
    useEffect(() => {
        getImage();
      }, []);
  
    const standard = {
    maxWidth: "500px",
    maxHeight: "500px",
    width: "auto",
    height: "auto",
  };

  const buttonStyle = {
    minHeight: "50px",
    paddingbottom: '100px'
  };
  return (
    <div>
      <h1>Fetch!</h1>
      <img src={imageUrl} style={standard} alt="its dog" />

      <div style={buttonStyle}>
        {/* {doggo ? <FetchDogs /> : <p>looking for treats</p>} */}
        <p>what shows up here</p>
      </div>
      <button onClick={getImage}>Throw the ball!</button>
      
    </div>
  );
};

export default FetchDogs;
