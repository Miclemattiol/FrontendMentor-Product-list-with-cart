import { useContext } from 'react';
import './productDisplay.scss';
import { CartContext } from '../../contexts/cartContext';
import { IconAddToCart } from '../../icons';
import IconButton from '../button/iconButton';
import QuantitySelector from '../button/quantitySelector';

type ProductDisplayProps = {
	id: number;
	srcDesktop: string;
	srcTablet: string;
	srcMobile: string;
	name: string;
	price: number;
	category: string;
};

const ProductDisplay = ({
	id,
	srcDesktop,
	srcTablet,
	srcMobile,
	name,
	category,
	price,
}: ProductDisplayProps) => {
	const { cart, addToCart, removeFromCart } = useContext(CartContext);
	return (
		<div className='ProductDisplay'>
			<div className='image'>
				<img src={srcDesktop} alt={name} className='desktop' />
				<img src={srcTablet} alt={name} className='tablet' />
				<img src={srcMobile} alt={name} className='mobile' />
				{cart[id] ? (
					<QuantitySelector
						className='quantityButton'
						quantity={cart[id]}
						increase={() => addToCart(id)}
						decrease={() => removeFromCart(id)}
					/>
				) : (
					<IconButton
						className='quantityButton empty'
						onClick={() => addToCart(id)}
					>
						<IconAddToCart />
						<span>Add to cart</span>
					</IconButton>
				)}
			</div>
			<span className='category'>{category}</span>
			<span className='name'>{name}</span>
			<span className='price'>${price.toFixed(2)}</span>
		</div>
	);
};

export default ProductDisplay;
