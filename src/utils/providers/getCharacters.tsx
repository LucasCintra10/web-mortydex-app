import api from "../tools/api";

async function getData() {
  const response = await api.get("/character");
  return response.data;
}

export default function getCharacters() {
  const data = getData();
  return data;
}
