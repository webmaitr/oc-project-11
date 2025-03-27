import './home.scss';
import Tagdiv from './../components/Tagdiv';
import Gallery from './Gallery';

function Home() {
  return (
    <main>
      <Tagdiv filter={true} tagline="Chez vous, partout et ailleurs" />

      <Gallery />
    </main>
  );
}

export default Home;
