import axiosClient from "./axiosClient";

const cityApi = {
  getAll: () => {
    return axiosClient.get("/cities", {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
  },
};

export default cityApi;
