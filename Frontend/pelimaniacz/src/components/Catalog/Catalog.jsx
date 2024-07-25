/* -------------------------------------------------------------------------- */
/*                      Catalogo con funcion de busqueda                      */

import Item from "./Items/Item";

/* -------------------------------------------------------------------------- */
function Catalog () {
    return (
        <div className="catalog">
            <Item /><Item /><Item /><Item /><Item /><Item />
        </div>
    )
}

export default Catalog;