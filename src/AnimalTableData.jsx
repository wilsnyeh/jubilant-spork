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
          </tr>
        </thead>
        <tbody>
          {searchContent &&
            searchContent.map((x) => {
              return (
                <tr>
                  <td>{x.name}</td>
                  {/* <td>something</td> */}
                  <td>{x.breed}</td>
                  <td>
                    {x.city} {x.state}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    )

}