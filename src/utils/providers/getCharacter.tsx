import api from "../tools/api";

async function getData(id: string) {
  const response = await api.get(`/character/${id}`);
  return response.data;
}

export default function getCharacter(id: string) {
  const data = getData(id);
  return data;
}   


