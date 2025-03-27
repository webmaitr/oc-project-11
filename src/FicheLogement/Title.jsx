function Title (props) {
  return (
    <hgroup>
        <h1>
          {props.title}
        </h1>
        <p>
          {props.location}
        </p>
      </hgroup>
  )
}

export default Title