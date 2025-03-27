function Tags (props) {
  return (
    <ul>
      {props.tags.map((tag, index) => (
        <li key={index}>
          {tag}
        </li>
      ))}
    </ul>
  )
}

export default Tags