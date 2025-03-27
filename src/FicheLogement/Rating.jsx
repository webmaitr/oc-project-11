import star from './../assets/star.svg'

function Rating (props) {

  const count = props.rating;
  const stars = [];
  for (let i = 1; i <= 5 ; i++) {
    stars.push(<img src={star} className={i<=count?"orange":"grey"} />)
  }
  

  return (
    <div>
      {stars[0]}{stars[1]}{stars[2]}{stars[3]}{stars[4]}

    </div>
  )
}

export default Rating