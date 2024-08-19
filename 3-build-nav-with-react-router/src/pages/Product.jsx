import { useParams } from "react-router-dom";// import useParams from react-router-dom to get the params from the url

/* 
this array is actually stored in the context
*/
const pokemons = [
  { id: 1, hp: 5, name: 'pikachu', img: '....' },
  { id: 2, hp: 10, name: 'bulbasaur', img: '....' },
  { id: 3, hp: 20, name: 'charizard', img: '....' },
  { id: 4, hp: 30, name: 'squirtle', img: '....' },
]

const Product = () => {
  const params = useParams();// get the params from the url

  console.log(params);// log the params

  const pokemon = pokemons.find((pokemon) => pokemon.id === Number(params.id))// find the pokemon with the id from the url

  return (
    <>
      <h1>Name: {pokemon.name}</h1>
      <p>HP: {pokemon.hp}</p>
    </>
  )
}

export default Product;