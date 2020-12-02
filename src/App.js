import { BrowserRouter } from 'react-router-dom'
import { useSelector} from 'react-redux'
import Welcome from './routes/Welcome'
import Main from './routes/Main'
import Message from './components/Message'
import 'materialize-css'

function App() {
  const isLogged = useSelector(state => !!state.authData.token);

  return (
    <BrowserRouter>
      <div className='App container'>
        {isLogged ? <Main /> : <Welcome />}
        <Message />
      </div>
    </BrowserRouter>
  );
}

export default App;
