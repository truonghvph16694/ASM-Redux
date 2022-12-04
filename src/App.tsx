import { Route, Routes } from "react-router-dom";
import Category from "./components/category";
import CategoryAdd from "./components/category-add";
import CategoryEdit from "./components/category-edit";
import NotFound from "./components/NotFound";
import Product from "./components/product";
import ProductAdd from "./components/product-add";
import ProductEdit from "./components/product-edit";
import './index.css';
import LayoutAdmin from "./layouts/LayoutAdmin";
import LayoutWebsite from "./layouts/LayoutWebsite";
import Homepage from "./layouts/layoutWebsite/Homepage";
import ProductDetail from "./layouts/layoutWebsite/ProductDetail";
import PrivateLayout from "./layouts/PrivateLayout";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="signin" element={<Signin />} />
                <Route path="signup" element={<Signup />} />
                <Route path="/" element={<LayoutWebsite />}>
                    <Route index element={< Homepage />} />
                    <Route path="/detail/:id" element={<ProductDetail />} />
                    <Route path="about" element={<h1>About Page</h1>} />

                </Route>
                <Route path="*" element={<NotFound />} />
                <Route
                    path="/admin"
                    element={
                        <PrivateLayout>
                            <LayoutAdmin />
                        </PrivateLayout>
                    }
                >
                    <Route index element={<h1>Dashboard</h1>} />
                    <Route path="products" element={<Product />} />
                    <Route path="products/add" element={<ProductAdd />} />
                    <Route path="products/:id/update" element={<ProductEdit />} />
                    {/* cate */}
                    <Route path="categories" element={<Category />} />
                    <Route path="categories/add" element={<CategoryAdd />} />
                    <Route path="categories/:id/update" element={<CategoryEdit />} />

                </Route>
            </Routes>
        </div>
    );
}

export default App;
