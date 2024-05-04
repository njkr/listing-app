import React from "react";
import "../styles/ListingCard.css";
// import collegeImage from "./image.jpg";

function ListingDetails({ listData }) {
  return (
    <div className="list-card">
      <div className="list-image">
        <img src="/image.jpg" alt="collegeImage" />
      </div>

      <div className="listing-table">
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{listData?.name}</td>
            </tr>
            <tr>
              <td>Country</td>
              <td>{listData?.country}</td>
            </tr>
            <tr>
              <td>Code</td>
              <td>{listData?.alpha_two_code}</td>
            </tr>
            <tr>
              <td>Domains</td>
              <td>{listData?.domains && listData?.domains[0]}</td>
            </tr>
            <tr>
              <td>Web Pages</td>
              <td>
                <a href={listData?.web_pages && listData?.web_pages[0]}>
                  {listData?.web_pages && listData?.web_pages[0]}
                </a>
              </td>
            </tr>
            <tr>
              <td>State/Province</td>
              <td>{listData?.["state-province"]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListingDetails;
