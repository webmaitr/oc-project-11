

function Tagdiv (props) {
  const background = props.filter?"img1-with-filter intro":"img2-without-filter intro";
  return (  
    <div className={background}> 
      <p>{props.tagline}</p>
    </div>
  )
}

export default Tagdiv