function Host (props) {
  return (
    <figure>
      <img src={props.picture} />
      <figcaption>
        {props.name}
      </figcaption>
    </figure>
  )
}

export default Host