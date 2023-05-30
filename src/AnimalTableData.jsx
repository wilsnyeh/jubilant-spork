import React from "react";

export default function AnimalTableData({searchContent}) {

    // let photosUrl = searchContent.photo.small
    // if (!photosUrl) {
    //     return null
    // }

    return (
        <table className="table-center">
        <thead>
          <tr>
            <th>Animal Name</th>
            <th>Animal Breed</th>
            <th>Animal Location</th>
            <th>Photos</th>
            <th>Organization Id</th>
            <th>Animal Organization Id</th>
            <th>Organization Email</th>
          </tr>
        </thead>
        <tbody>
          {searchContent &&
            searchContent.map((x) => {
              return (
                <tr>
                  <td>{x.name}</td>
                  <td>{x.breed} 
                    <td>{x.breed2}</td>
                  </td>
                  <td>
                    {x.city} {x.state}
                  </td>
                  {/* if ({x.photo}.length===0) ? <td><img src={x.photo} alt='not available'></img></td> : <td>  <img src={x.photo.small} alt="not available" /></td> */}
                  <td><img src={x.photo} alt="not available" /></td>
                  <td>{x.organization}</td>
                  <td>{x.orgAnimalId}</td>
                  <td>{x.email}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    )

}