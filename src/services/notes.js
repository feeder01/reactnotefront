import axios from "axios";

const baseUrl = "http://localhost:3001/notes";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};
const create = (newObj) => {
  return axios.post(baseUrl, newObj).then((response) => response.data);
};

const update = (id, newObj) => {
  return axios
    .put(`${baseUrl}/${id}`, newObj)
    .then((response) => response.data);
};

export default {
  getAll,
  create,
  update,
};
