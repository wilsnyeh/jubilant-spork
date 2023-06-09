import React from "react";

export default function AnimalTableData({searchContent}) {
    return (
        <table className="table-center">
        <thead>
          <tr>
            <th>Animal Name</th>
            {/* <th>Animal Type</th> */}
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
                  {/* <td>something</td> */}
                  <td>{x.breed} 
                  {/* {if(breed2) {
                    <td>{x.breed2}</td>
                  }} */}
                  </td>
                  <td>
                    {x.city} {x.state}
                  </td>
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