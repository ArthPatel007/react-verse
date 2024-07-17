import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/ArthPatel007")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
      Github Followers:{data.followers}
      <img src={data.avatar_url} alt="Git Profile" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoder = async () => {
  const response = await fetch("https://api.github.com/users/ArthPatel007");
  return response.json();
};
