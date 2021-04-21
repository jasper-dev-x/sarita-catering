import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages";
import Events from "./pages/events";
import Menu from "./pages/menu";
import About from "./pages/about";
import Testimonials from "./pages/testimonials";
import MenuDetails from "./pages/menu/MenuItemDetails";
import Service from "./pages/services";
import NotFound from "./pages/NotFound";
import Store from "./pages/store";
import Book from "./pages/book";
import ServiceDetails from "./pages/services/ServiceDetails";

function App() {
  
  return (
    <BrowserRouter>
      <div className="d-flex flex-column" style={ { height: window.innerHeight } }>
        <NavBar />
        <div className="d-flex flex-fill flex-column" style={ { paddingTop: (window.innerHeight * .08) } }>
          <Switch>
            <Route path="/" component={ Home } exact />
            <Route path="/about" component={ About } />
            <Route path="/menu" component={ Menu } />
            <Route path="/menuItem/:name" component={ MenuDetails } />
            <Route path="/store" component={ Store } />
            <Route path="/services" component={ Service } />
            <Route path="/service/:id" component={ ServiceDetails } />
            <Route path="/events" component={ Events } />
            <Route path="/book" component={ Book } />
            <Route path="/testimonials" component={ Testimonials } />
            <Route component={ NotFound } />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
