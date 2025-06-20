import Header from './components/template-components/Header.jsx';
import Main from './components/template-components/Main.jsx';
import Aside from './components/template-components/Aside.jsx';
import Footer from './components/template-components/Footer.jsx';

function App() {

  return ( 
    <>
      <Header />
      <Aside position="left" />
      <Main />
      <Aside position="right" />
      <Footer />
    </>
  );
}

export default App;
