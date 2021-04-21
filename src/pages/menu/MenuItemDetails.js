import React from "react";
import { menu } from "./menu-content";
import MenuList from "./components/MenuList";
import NotFoundPage from "../NotFound";

export default function MENUDetailsPage({ match }) {
  const name = match.params.name;
  const menuItem = menu.find((x) => x.name === name);

  if (!menuItem) return <NotFoundPage />;

  const otherMenuItems = menu.filter((item) => item.name !== name);

  return (
    <div className="d-flex flex-fill justify-content-center py-4 bg-dark text-white">
      <div className="text-center">
        <div className="" style={ { borderRadius: 20 } }>
          <div className="row">
            <div className="col-md">
              <div className="card-body">
                <h1 className="card-text display-6">{ menuItem.name }</h1>
                <p className="card-text lead">${ menuItem.price }.00 / Person</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mx-3 mb-5"></hr>
        <h1 className="txt">Some Other Choices</h1>
        <hr className="bg-warning mx-5"></hr>
        <MenuList menu={ otherMenuItems } />
      </div>
    </div>

  );
}
