export const fetchData = async (params?: string) => {
  const url = `https://api.balldontlie.io/v1/players?per_page=75${
    params ?? ""
  }`;

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "applicastion/json",
      Authorization: "8f6aecab-7280-4f54-b161-49b8cdd71ed0",
    },
  });

  const data = await response.json();
  return data.data;
};
