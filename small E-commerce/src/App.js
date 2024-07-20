import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import About from './pages/About.jsx';
import {Posts} from './pages/Posts.jsx';
import Products from './pages/Products.jsx';
import SingleProduct from './pages/SingleProduct.jsx';
import Error from './pages/Error.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/products' element={<Products />} />
				<Route path='/products/:id' element={<SingleProduct />} />
				<Route path='*' element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
