import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import UsersPage from "./pages/UsersPage";
import ProductsPage from "./pages/ProductsPage";
import PubPage from "./pages/PubPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Header from "./components/Header/Header";

/* Маршрутизація складається з двух основних етапів:
  1. Змінити ЮРЛ адресу (<Link to="/users">Users</Link> | <NavLink to="/users">Users</NavLink>)
  2. Підготовка маршруту до відображення сторінки за певним маршрутом (<Route path="/users" element={<UsersPage />}/>)
*/

function App() {
  return (
    <div>
      <Header />
      <div style={{ display: "flex" }}>
        <aside>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
              quae.
            </li>
            <li>
              Quas similique fugiat dignissimos laudantium eius, inventore rem
              alias neque.
            </li>
            <li>
              Vel eaque velit veniam! Dolorem exercitationem cupiditate libero
              qui. Labore?
            </li>
            <li>Obcaecati quas earum quae ea nulla aut sed autem soluta.</li>
            <li>
              Voluptas voluptatum esse voluptates reiciendis recusandae dolor
              accusamus, autem rerum?
            </li>
          </ul>
        </aside>{" "}
        <main>
          <Routes>
            <Route path="/" element={<PubPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/products" element={<ProductsPage />} />

            <Route
              path="/products/:productId"
              element={<ProductDetailsPage />}
            />
            {/* <Route path="/products/2" element={<ProductDetailsPage />}/>
          <Route path="/products/3" element={<ProductDetailsPage />}/>
          <Route path="/products/4" element={<ProductDetailsPage />}/>
          <Route path="/products/546564456" element={<ProductDetailsPage />}/>
          <Route path="/products/wdqwdadwad" element={<ProductDetailsPage />}/>
          <Route path="/products/87418d4awda" element={<ProductDetailsPage />}/> */}
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
