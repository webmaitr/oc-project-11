import firstList from './../data/firstList.json';
import Slideshow from './Slideshow';
import Title from './Title';
import Host from './Host';
import Tags from './Tags';
import Rating from './Rating';
import DropDown from '../components/DropDown'

function FicheLogement() {
  const currentUrl = window.location.href;
  const i = currentUrl.indexOf("?");
  const myId = currentUrl.slice(i+1);
  const myLodg = {};
  firstList.forEach((lodg) => {
    if (lodg.id == myId) {
      Object.assign(myLodg, lodg)
    }
  })
  const {title, location, host, tags, rating, description, equipments, pictures} = myLodg;


  return (
    <main>
      <Slideshow pictures={pictures} />
      <div>
        <Title title={title} location={location} />
        <Host name={host.name} picture={host.picture} />
        <Tags tags={tags} />
        <Rating rating={rating} />
      </div>
      <div>
        <DropDown dropTitle='Description' content={description} />
        <DropDown dropTitle='Equipements' content={equipments} />
      </div>
    </main>
  )
}

export default FicheLogement