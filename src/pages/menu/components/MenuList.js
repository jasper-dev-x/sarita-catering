import React from "react";

export default function MenuList({ menu, search, section }) {
  var filteredMenu = search ? menu.filter(({ searchName }) => searchName.match(search.toLowerCase())) : menu;
  filteredMenu = section ? filteredMenu.filter(({ menuSection }) => menuSection.match(section)) : menu;

  return (
    <div className="d-flex flex-column justify-content-center py-3">
      {filteredMenu.map((item, key) => (
        <div key={ key } className="d-flex flex-column align-items-center">
          <span className="lead pe-none">{ item.name }</span>
          <hr className="bg-secondary w-50"></hr>
        </div>
      )) }
    </div>
  );
}
