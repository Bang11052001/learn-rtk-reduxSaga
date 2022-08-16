import axiosClient from "./axiosClient";

const studentsApi = {
  getAll: async (params) => {
    const res = await axiosClient.get("/students", { ...params });
    return res;
  },
  getById: async (id) => {
    const res = await axiosClient.get(`/students/${id}`, {
      params: {
        id: id,
      },
    });
    return res;
  },
  add: async (params) => {
    const res = await axiosClient.post("/students", { ...params });
    return res;
  },
  update: async (params) => {
    const res = await axiosClient.patch(`/students/${params.id}`, {
      ...params,
    });
    return res;
  },
  remove: async (id) => {
    const res = await axiosClient.delete(`/students/${id}`, {
      params: {
        id: id,
      },
    });
    return res;
  },
};

export default studentsApi;
