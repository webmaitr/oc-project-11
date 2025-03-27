import {useState} from 'react';
import iconLeft from './../assets/icon-left.svg';
import iconRight from './../assets/icon-right.svg'
import './slideshow.scss'

function Slideshow (props) {
  const slides = props.pictures
  const [slide, setSlide] = useState(0)
  const [displayIcon, setDisplayIcon] = useState("")

  // slides.length==1?setDisplayIcon("nodisplay"):setDisplayIcon("");
  // if(slides.length == 1) {
  //   setDisplayIcon("nodisplay")
  // }

  function forward () {  
    setSlide(slide==slides.length-1?0:slide+1)
  }

  function backward () {
    setSlide(slide==0?slides.length-1:slide - 1)
  }


  return (
    <figure className="slideshow">
      <img className={`iconleft ${displayIcon}`} src={iconLeft} onClick={backward} />
      <img src={slides[slide]} />
      <img className={`iconright ${displayIcon}`} src={iconRight} onClick={forward}/>
      <figcaption>{`${slide+1}/${slides.length}`} </figcaption>
    </figure>
  )
}

export default Slideshow