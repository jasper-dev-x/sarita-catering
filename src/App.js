import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages";
import Events from "./pages/events";
import Menu from "./pages/menu";
import About from "./pages/about";
import Admin from "./pages/admin";
import Testimonials from "./pages/testimonials";
import Service from "./pages/services";
import NotFound from "./pages/NotFound";
import Store from "./pages/store";
import Book from "./pages/book";
import ServiceDetails from "./pages/services/ServiceDetails";
import AdminMenu from "./pages/admin/adminMenu";
import { menuList } from './pages/menu/menu-content';

function App() {
  const [menu, setMenu] = useState([]);
  const [login, setLogin] = useState('');
  const [accessKeyCodeId, setAccessKeyCodeId] = useState('');

  // Limits Menu Fetches to 5/hr
  useEffect(() => {
    if (!localStorage.getItem("HOUR") || localStorage.getItem("HOUR") !== new Date().getHours().toString()) {
      localStorage.setItem("HOUR", new Date().getHours());
      localStorage.setItem("REFRESH", "0");
    }
    if (localStorage.getItem("REFRESH") !== "5") {
      fetchMenu();
      localStorage.setItem("REFRESH", parseInt(localStorage.getItem("REFRESH")) + 1);
    }
    if (localStorage.getItem("REFRESH") === "5" && localStorage.getItem("HOUR") === new Date().getHours().toString()) {
      setMenu(menuList);
      setTimeout(() => localStorage.clear(), 1_000); // Refresh Lock
    }
  }, []);

  async function fetchMenu() {
    try {
      await fetch('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/saritacatering-vglhw/service/menu/incoming_webhook/getMenu')
        .then(res => res.json())
        .then(setMenu);
    } catch (err) {
      console.error("ERROR FETCHING MENU: ", err);
    };
  }

  return (
    <BrowserRouter>
      <div className="d-flex flex-column" style={ { height: window.innerHeight } }>
        <NavBar />
        <div className="d-flex flex-fill flex-column" style={ { paddingTop: (window.innerHeight * .08) } }>
          <Switch>
            {/* HOME */ }
            <Route path="/" component={ Home } exact />

            {/* ADMIN */ }
            <Route path="/admin">
              <Admin login={ login } setLogin={ setLogin } accessKeyCodeId={ accessKeyCodeId } setAccessKeyCodeId={ setAccessKeyCodeId } />
            </Route>
            <Route path="/admin-menu">
              { () => {
                if (!sessionStorage.getItem('adminKeyCodeId'))
                  return <NotFound />;
                else
                  return <AdminMenu menu={ menu } setMenu={ setMenu } />;
              } }
            </Route>

            {/* ABOUT */ }
            <Route path="/about" component={ About } />

            {/* MENU */ }
            <Route path="/menu">
              <Menu menu={ menu } />
            </Route>

            {/* SERVICE */ }
            <Route path="/services" component={ Service } />
            <Route path="/service/:id" component={ ServiceDetails } />

            {/* BOOK */ }
            <Route path="/book" component={ Book } />

            {/* ----NOT IN SERVICE---- */ }
            <Route path="/events" component={ Events } />
            <Route path="/testimonials" component={ Testimonials } />
            <Route path="/store" component={ Store } />

            {/* 404 */ }
            <Route component={ NotFound } />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
