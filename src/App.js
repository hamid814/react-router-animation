import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { onEnter, onExit, animationDuration } from './routesAnimation';

// pages
import Home from './Home';
import About from './About';
import Author from './Author';

const App = () => {
  return (
    <BrowserRouter>
      <>
        <div className="nav">
          <Link to="/">Home</Link> <Link to="/about">About</Link>{' '}
          <Link to="/author">Author</Link>
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
                      <Route exact path="/" component={Home} />
                      <Route path="/about" component={About} />
                      <Route path="/author" component={Author} />
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
