import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
// import About from './component/About';
import Navbar from "./component/Navbar";
import { OrderSummary } from "./component/OrderSummary";
import { NoMatch } from "./component/NoMatch";
import { Products } from "./component/Products";
import { FeaturedProducts } from "./component/FeaturedProducts";
import { NewProducts } from "./component/NewProducts";
import { Users } from "./component/Users";
import { UserDetails } from "./component/UserDetails";
import { Admin } from "./component/Admin";
import { Profile } from "./component/Profile";
import { AuthProvider } from "./component/Auth";
import { Login } from "./component/Login";
import { RequireAuth } from "./component/RequireAuth";
const LazyAbout = React.lazy(() => import("./component/About"));

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
          {/* <Route path='/users' element={<Users/>}/>
        <Route path='/users/:userId' element={<UserDetails/>}/>
        <Route path='/users/admin' element={<Admin/>}/> */}
          <Route path="/users" element={<Users />}>
            <Route path=":userId" element={<UserDetails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
