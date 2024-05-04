import React, { useEffect, useState } from "react";
import "../styles/ListingPage.css";

import { Link, useParams } from "react-router-dom";
import ListingDetails from "../components/ListingDetails";
import { useSelector } from "react-redux";

export default function DetailsPage() {
  const { id } = useParams();
  const { data } = useSelector((state) => state.app);
  let [listData, setListingData] = useState([]);

  useEffect(() => {
    data.length !== 0 && id && setListingData(data[id]);
    return () => {};
  }, [data, id]);
  return (
    <>
      <div className="listing-header">
        <Link to="/">
          <label>{"<-- Back"}</label>
        </Link>
      </div>
      <div className="listing-Content-data">
        <ListingDetails listData={listData} />
      </div>
    </>
  );
}
