import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { onEnter, onExit, animationDuration } from './routesAnimation';

// pages
import Home from './Home';
import About from './About';
import Author from './Author';

const App = () => {
  const PUBLIC_URL = process.env.PUBLIC_URL;
  const HOME_URL = `${PUBLIC_URL}/`;
  const ABOUT_URL = `${PUBLIC_URL}/about`;
  const AUTHOR_URL = `${PUBLIC_URL}/author`;

  return (
    <BrowserRouter>
      <>
        <div className="nav">
          <Link to={HOME_URL}>Home</Link> <Link to={ABOUT_URL}>About</Link>{' '}
          <Link to={AUTHOR_URL}>Author</Link>
        </div>
        <div className="main">
          <Route
            render={({ location }) => {
              const { key } = location;

              return (
                <TransitionGroup component={null}>
                  <Transition
                    key={key}
                    appear={true}
                    onEnter={onEnter}
                    onExit={onExit}
                    timeout={{
                      enter: animationDuration,
                      exit: animationDuration,
                    }}
                  >
                    <Switch location={location}>
                      <Route exact path={HOME_URL} component={Home} />
                      <Route path={ABOUT_URL} component={About} />
                      <Route path={AUTHOR_URL} component={Author} />
                    </Switch>
                  </Transition>
                </TransitionGroup>
              );
            }}
          />
        </div>
      </>
    </BrowserRouter>
  );
};

export default App;
