import { BrowserRouter as Router , Route  , Routes} from "react-router-dom"
import Layout from "./Layout"

import Home from "./assets/components/Home/Home"
import About from "./assets/components/About/About"
import Contact from "./assets/components/Contact/Contact"
import Profile from "./assets/components/Profile/Profile"
import Url from "./assets/components/Url/Url"
import Products from "./assets/components/Products/Products"
import ProductsDetails from "./assets/components/Products/ProductsDetails"
import CardPage from "./assets/components/Card/CardPage"


function App() {


  return (
    <Router>
      <Routes>
    <Route path="/" element={<Layout />}>
     <Route path="" element={<Home />} />
     <Route path="about" element={<About />} />
     <Route path="contact" element={<Contact />} />
     <Route path="profile"  element={<Profile />} />
      <Route path=":userId"  element={<Url />} />
      <Route path="products"  element={<Products />} />
      <Route path="products/:id"  element={<ProductsDetails />} />
      <Route path="cards" element={<CardPage />} />
    </Route>
    </Routes>
    </Router>
  )
}

export default App
