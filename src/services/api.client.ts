import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9e9c384d37714e048ae68219ee3cbd88",
  },
});
