import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID f65aecfe2fdb93f1e32cc309dffe416cea9690fa035b36d17ecb86313fc8f1ad"
  }
});
