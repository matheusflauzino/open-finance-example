import axios from "axios";

export default {
  async all() {
    try {
      const accessToken = await axios.post(
        "https://apis-h.gerencianet.com.br/open-banking/oauth/token",
        {
          grant_type: "client_credentials",
        },
        {
          auth: {
            username: "",
            password: "",
          },
          httpsAgent: {},
        }
      );
      console.log(accessToken);
    } catch (err) {
      console.log(err);
    }

    return [];
  },
};
