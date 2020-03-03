import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Layout from './Layout'
import homepage from '../pages/homepage';
import '../global.css'


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={homepage} />
          <Route exact path="ConoceInsomnia" component="#" />
          {/* <Route exact path="/ConoceInsomnia" component="#" />
          <Route exact path="/tienda" component="#" />
          <Route exact path="/videos" component="#" /> */}
          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;