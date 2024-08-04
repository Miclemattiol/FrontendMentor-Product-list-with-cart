import { useContext, useMemo, useRef } from 'react';
import './cart.scss';
import { CartContext } from '../../contexts/cartContext';
import classNames from 'classnames';
import CartTile from './cartTile/cartTile';
import data from '../../data.json';
import Button from '../button/button';
import ConfirmDialog from './confirmDialog/confirmDialog';

const Cart = () => {
	const { cart, clearCart } = useContext(CartContext);
	const cartItems = useMemo(() => Object.keys(cart).length, [cart]);
	const dialogRef = useRef<HTMLDialogElement>(null);
	return (
		<>
			<div className={classNames('Cart', !cartItems && 'empty')}>
				<h1>Your cart ({cartItems})</h1>
				{cartItems ? (
					<>
						<div className="items">
							{Object.entries(cart).map(([_id, quantity]) => {
								const id = parseInt(_id);
								return (
									<CartTile
										key={id}
										id={id}
										quantity={quantity}
										{...data[id]}
									/>
								);
							})}
						</div>
						<div className='total'>
							<span>Order total:</span>
							<span className='price'>
								$
								{Object.entries(cart)
									.reduce((acc, [_id, quantity]) => {
										const id = parseInt(_id);
										return acc + data[id].price * quantity;
									}, 0)
									.toFixed(2)}
							</span>
						</div>
						<div className="carbon-wrapper">
							<div className='carbon'>
								<img
									src='/assets/images/icon-carbon-neutral.svg'
									alt='carbon neutral'
								/>
								<span>
									This is a <b>carbon-neutral</b> delivery
								</span>
							</div>
						</div>
						<Button
							onClick={() => {
								dialogRef.current?.showModal();
							}}
						>
							Confirm Order
						</Button>
					</>
				) : (
					<>
						<img
							src='/assets/images/illustration-empty-cart.svg'
							alt='Empty cart'
						/>
						<p>Your added items will appear here</p>
					</>
				)}
			</div>
			<ConfirmDialog
				ref={dialogRef}
				onConfirm={() => {
					clearCart();
					dialogRef.current?.close();
				}}
			/>
		</>
	);
};

export default Cart;
