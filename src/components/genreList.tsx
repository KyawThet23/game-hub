import UseGenres from "../hooks/useGenre"

const GenreList = () => {

  const {datas} =  UseGenres();

  return (
    <ul>
      {datas.map(data => <li key={data.id} >{data.name}</li>)}
    </ul>
  )
}

export default GenreList