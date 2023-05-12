import React from "react";

const FetchDogs = ({imageUrl}) => {
    // const [data, setData] = useState(null);
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch ('https://dog.ceo/api/breeds/image/random')
    //         if (!response.ok) {
    //             console.error('failed to fetch:', response.status, response.statusText)
    //             return;
    //         }
    //         const jsonData = await response.json();
    //         setData(jsonData);
    //     };
    //     fetchData();
    // }, []);

    // if (!data) {
    //     return <div>Loading</div>
    // }

    return (
        <div>
            <h1>Fetch!</h1>
            <img src={imageUrl} alt='its dog' />
        </div>
    )
}

export default FetchDogs