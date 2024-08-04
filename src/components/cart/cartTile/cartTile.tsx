import { useContext } from 'react';
import './cartTile.scss';
import { CartContext } from '../../../contexts/cartContext';
import { IconRemoveFromCart } from '../../../icons/iconRemoveFromCart';

type CartTileProps = {
	id: number;
	name: string;
	price: number;
	quantity: number;
};

const CartTile = ({ id, name, price, quantity }: CartTileProps) => {
	const { removeItem } = useContext(CartContext);

	return (
		<div className='CartTile'>
			<div className='info'>
				<span className='title'>{name}</span>
				<section>
					<span className='quantity'>{quantity}x</span>
					<span className='price'>@${price.toFixed(2)}</span>
					<span className='price total'>
						${(price * quantity).toFixed(2)}
					</span>
				</section>
			</div>
			<IconRemoveFromCart
				onClick={() => {
					removeItem(id);
				}}
			/>
		</div>
	);
};

export default CartTile;
