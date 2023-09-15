import { Route, Routes } from 'react-router-dom'
import './assets/scss/style.scss'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './pages/Home'
import Love from './pages/Love'
import News from './pages/News'
import NewsSingle from './pages/NewsSingle'
import ProductSingle from './pages/ProductSingle'
import Products from './pages/Products'
import RecipeSingle from './pages/RecipeSingle'
import Recipes from './pages/Recipes'

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/news' element={<News />} />
				<Route path='/news/:id' element={<NewsSingle />} />
				<Route path='/products' element={<Products />} />
				<Route path='/products/:id' element={<ProductSingle />} />
				<Route path='/recipes' element={<Recipes />} />
				<Route path='/recipes/:id' element={<RecipeSingle />} />
				<Route path='/love' element={<Love />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
