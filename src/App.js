import Header from './components/Header';
import CenterBlock from './components/common/CenterBlock';
import FirstScreen from './components/FirstScreen';
import Prices from './components/Prices';
import Badges from './components/Badges';
import Footer from './components/Footer/Footer';
import Partners from './components/Partners';
import Tabs from './components/Tabs';
function App() {
  return (
    <>
      <CenterBlock>
        <Header />
        <FirstScreen />
        <Prices />
      </CenterBlock>
      <Badges />
      <CenterBlock>
        <Tabs />
        <Partners />
      </CenterBlock>

      <Footer />
    </>
  );
}

export default App;
