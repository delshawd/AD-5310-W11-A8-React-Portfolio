
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../components/API'

function Pokemon() {
  const { name } = useParams()
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    fetchData(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(data => setPokemon(data))
  }, [name])

  return (
    <div>
      <h1>{name}</h1>

      {pokemon ? (
        <>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Base Experience: {pokemon.base_experience}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Pokemon
