import Thumb from './Thumb';
import firstList from './../data/firstList.json';

function Gallery() {

  
  return (
    <section className="gallery">
      <ul className="display-area">
        {firstList.map((lodg) => (

        <li className="thumb" key={lodg.id}>
          <Thumb title={lodg.title} cover={lodg.cover} id={lodg.id} />
        </li>
        ))
        }
      </ul>
    </section>
  );
}

export default Gallery;
