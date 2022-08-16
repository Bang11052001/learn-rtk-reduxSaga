import axiosClient from "./axiosClient";

const cityApi = {
  getAll: async () => {
    const res = await axiosClient.get("/cities", {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
    return res;
  },
};

export default cityApi;
