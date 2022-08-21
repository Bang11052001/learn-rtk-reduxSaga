import axiosClient from "./axiosClient";

const studentsApi = {
  getAll: async (params) => {
    const res = await axiosClient.get("/students", { params });
    return res;
  },
  getById: async (id) => {
    const res = await axiosClient.get(`/students/${id}`);
    return res;
  },
  add: async (data) => {
    const res = await axiosClient.post(`/students`, data);
    return res;
  },
  update: async (data) => {
    const res = await axiosClient.patch(`/students/${data.id}`, data);
    return res;
  },
  remove: async (id) => {
    const res = await axiosClient.delete(`/students/${id}`);
    return res;
  },
};

export default studentsApi;
