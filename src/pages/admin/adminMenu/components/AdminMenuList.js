import React from "react";

export default function AdminMenuList({ menu, setMenu = x => x, search, section }) {
  var filteredMenu = search ? menu.filter(({ searchName }) => searchName.match(search.toLowerCase())) : menu;
  filteredMenu = section ? filteredMenu.filter(({ menuSection }) => menuSection.match(section)) : menu;
  var requestOptions;

  async function removeMenuItem(id) {
    requestOptions = {
      method: "DELETE"
    };
    try {
      await fetch(`https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/saritacatering-vglhw/service/menu/incoming_webhook/removeMenuItem?id=${id}`, requestOptions)
        .then(res => res.json())
        .then(setMenu(menu.filter(x => x._id.$oid !== id)));
    } catch (err) {
      console.error("ERROR REMOVE MENU ITEM: ", err);
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center py-3">
      {filteredMenu.map((item, key) => (
        <div key={ key } className="d-flex flex-column align-items-center">
          <div className="d-flex container align-items-center text-wrap">
            <div className="col-11 px-2">
              <span className="lead flex-grow-1 pe-none">{ item.name }</span>
            </div>
            <div className="col-1">
              <button type="button" className="btn-close bg-danger" aria-label="Close" onClick={() => removeMenuItem(item._id.$oid)} />
            </div>
          </div>
          <hr className="bg-secondary w-50"></hr>
        </div>
      )) }
    </div>
  );
}
