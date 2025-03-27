import { Link } from 'react-router-dom'

function Thumb(props) {
  const myTitle = props.title;
  const imgCover = props.cover;
  const id = props.id; 
  return (
    <Link 
      to={{
        pathname: "./../FicheLogement/FicheLogement.jsx",
        search: `?${id}`
      }}
    >
      <article>
        <img src={imgCover} />
        <h2>
          {myTitle}
        </h2>
      </article>
    </Link>);
}

export default Thumb;
