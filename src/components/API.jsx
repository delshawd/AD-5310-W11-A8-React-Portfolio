
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function API() {

  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData("https://pokeapi.co/api/v2/pokemon")
      .then(data => setData(data.results));
  }, []);

  return (
    <>
      {data.map((d, index) => {
        return (
          <div key={index}>
            <h3 onClick={() => {
              navigate(`/pokemon/${d.name}`);
            }}>{d.name}</h3>
          </div>
        )
      })}
    </>
  )
}

const fetchData = async (apiEndpoint) => {
  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export { fetchData, API };
