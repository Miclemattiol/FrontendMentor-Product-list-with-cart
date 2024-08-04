import './App.scss';
import Cart from './components/cart/cart';
import ProductDisplay from './components/productDisplay/productDisplay';
import data from './data.json';

function App() {
	return (
		<div className='App'>
			<main>
				<h1>Desserts</h1>
				<div className="grid">
					{data.map((product, index) => (
						<ProductDisplay
							id={index}
							srcDesktop={product.image.desktop}
							srcTablet={product.image.tablet}
							srcMobile={product.image.mobile}
							{...product}
							key={index}
						/>
					))}
				</div>
			</main>
			<aside>
				<Cart />
			</aside>
		</div>
	);
}

export default App;
