import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './components/MyNav';
import Welcome from './components/Welcome';
import AllTheBooks from './components/AllTheBooks';
import MyFooter from './components/MyFooter';

function App() {
  return (
    <body>
      <header>
        <MyNav />
        <Welcome />
      </header>
      <main>
        <AllTheBooks />
      </main>
      <MyFooter />
    </body>
  );
}

export default App;
