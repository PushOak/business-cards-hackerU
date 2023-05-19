import './App.css';
import Cards from './cards/components/Cards';
import CardBusinessComponent from './cards/components/card/CardBusinessComponent';
import PageHeader from './components/PageHeader';
import TypographyComponent from './sandbox/data-display/TypographyComponent';
import ButtonComponents from './sandbox/data-display/ButtonComponents';
import CardComponent from './sandbox/data-display/CardComponent';
import StringPropParent from './sandbox/props/StringPropParent';
import ObjectPropsParent from './sandbox/props/ObjectPropsParent';
import Loops from './sandbox/loops/Loops';
import StackPractice from './sandbox/data-display/StackComponent';
import OnClickEvent from './sandbox/Events/OnClickEvent';
import FatherComponent from './sandbox/Events/FatherComponent';
import CardPage from './cards/pages/CardPage';
import AboutPage from './pages/AboutPage';
import Counter from './sandbox/stateHook/Counter';
import MyDetails from './sandbox/stateHook/MyDetails';
import TodoList from './sandbox/stateHook/TodoList';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import Layout from './layout/Layout';

import ThemeProvider from './providers/ThemeProvider';
import SnackbarProvider from './providers/SnackbarProvider';
import SandBox from './sandbox/SandBox';
import UserProvider from './users/providers/UserProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SnackbarProvider>
          <ThemeProvider>
            <UserProvider>
              <Layout>
              <Router />
            </Layout>
            </UserProvider>
          </ThemeProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
