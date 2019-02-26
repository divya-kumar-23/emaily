import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

const Header=()=><h2>Header</h2>;
const Dashboard=()=><h2>Dashboard</h2>;
const SurweyNew=()=><h2>SurweyNew</h2>;
const Landing=()=><h2>Landing</h2>;

const App=()=> {
  return (
    <div>
    <BrowserRouter>
    <div>
        <Route exact path='/' component={Landing} />
        <Route exact path='/surveys' component={Dashboard} />
        <Route path='/surveys/new' component={SurweyNew} />

    </div>
    </BrowserRouter>
    </div>
  );
};

export default App;