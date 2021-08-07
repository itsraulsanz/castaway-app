import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Settings from "./pages/Settings";
import MyPodcasts from "./pages/Mypodcasts.js";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Newpodcasts from "./pages/Newpodcasts";
import Podcast from "./pages/Podcast";
import PodcastEpisodes from "./pages/PodcastEpisodes";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div>
        <Router>
          <div>
            <Header />
              <Route exact path="/" component={Home} />
              <Route exact path="/search" component={Search} />
              <Route exact path="/settings" component={Settings} />
              <Route exact path="/mypodcasts" component={MyPodcasts} />
              <Route exact path="/categories" component={Categories} />
              <Route exact path="/category/:id" component={Category} />
              <Route exact path="/newpodcasts" component={Newpodcasts} />
              <Route exact path="/podcastepisodes" component={PodcastEpisodes} />
              <Route exact path="/podcast/:id" component={Podcast} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />            
            <Nav />
          </div>
        </Router>
      </div>
      </ApolloProvider>
    );
  }
}
