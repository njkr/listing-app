import React, { useEffect, useState } from "react";
import "../styles/ListingPage.css";
import SearchBar from "../components/SearchBar";
import SortSelect from "../components/SortSelect";
import ListingCard from "../components/ListingCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteById, getAllUniversityData } from "../store/slice";

export default function ListingPage() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.app);
  let [listData, setListingData] = useState([]);
  let [filterData, setFilterData] = useState({ search: "", sort: "0" });

  useEffect(() => {
    data.length === 0 && dispatch(getAllUniversityData());
    data.length !== 0 && setListingData(data);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const filterList = ({ search, sort }) => {
    let filtered = data.filter((university) =>
      university.name.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === "1") {
      filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "0" && search === "") {
      setListingData(data);
    }
    setListingData(filtered);
  };

  const handleFilter = (e) => {
    let onChangeData = { ...filterData, [e.target.name]: e.target.value };
    setFilterData(onChangeData);
    filterList(onChangeData);
  };

  const handleDelete = (id) => {
    dispatch(deleteById(id));
  };

  return (
    <>
      <div className="listing-sort">
        <SearchBar
          onChange={handleFilter}
          value={filterData.search}
          name={"search"}
        />
        <SortSelect
          onChange={handleFilter}
          value={filterData.sort}
          name={"sort"}
        />
      </div>
      <div className="listing-Content">
        {listData.map((v) => (
          <Link
            className="listing-Contenti-link"
            key={v.id}
            to={`/university/${v.id}/${v.name}`}
          >
            <ListingCard handleDelete={handleDelete} listData={v} />
          </Link>
        ))}
      </div>
    </>
  );
}
