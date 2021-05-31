import axios from "axios";
import routes from "./routes";
export default async function(id = "", method = "get", data = null) {
  const request = {
    url: process.env.VUE_APP_API_URL + routes.posts + `/${id}`,
    method: method,
  };
  if (method === "put") {
    request.data = data;
  }
  return await axios(request);
}
