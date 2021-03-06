import validateToken from "@helpers/validateToken";

const getToken = () => {
  const token = localStorage.getItem("token");
  validateToken(token);
  return token ? token : "";
};

export default getToken;
