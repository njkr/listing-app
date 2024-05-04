// ListingController.js

import { getAllData } from "../services/ApiService";

const formatData = (dataToformat) => {
  try {
    return dataToformat.map((v, i) => ({ ...v, id: i }));
  } catch (error) {
    throw error;
  }
};

const ListingController = {
  getUniversities: async () => {
    try {
      const response = await getAllData();
      let formattedData = formatData(response);
      localStorage.setItem("listingData", JSON.stringify(formattedData));
      return formattedData;
    } catch (error) {
      const storedListingDataData = localStorage.getItem("listingData");
      if (storedListingDataData) {
        return JSON.parse(storedListingDataData);
      } else {
        throw new Error("somrthing went wrong please contact IT");
      }
    }
  },
};

export default ListingController;
