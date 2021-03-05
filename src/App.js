import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { onEnter, onExit, animationDuration } from './routesAnimation';

// pages
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        this is navbar <Link to="/">Home</Link> <Link to="/about">About</Link>
      </div>
      <Route
        render={({ location }) => {
          return (
            <TransitionGroup component={null}>
              <Transition
                key={location.key}
                appear={true}
                // in={true}
                onEnter={onEnter}
                onExit={onExit}
                timeout={{ enter: animationDuration, exit: animationDuration }}
              >
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                </Switch>
              </Transition>
            </TransitionGroup>
          );
        }}
      />
    </BrowserRouter>
  );
};

export default App;
