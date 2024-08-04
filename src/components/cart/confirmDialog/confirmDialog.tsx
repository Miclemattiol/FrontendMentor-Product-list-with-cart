import { forwardRef, useContext } from 'react';
import { IconOrderConfirmed } from '../../../icons';
import './confirmDialog.scss';
import Button from '../../button/button';
import { CartContext } from '../../../contexts/cartContext';
import DialogTile from './dialogTile/dialogTile';
import data from '../../../data.json';

type ConfirmDialogProps = {
	onConfirm: () => void;
};

const ConfirmDialog = forwardRef<HTMLDialogElement, ConfirmDialogProps>(
	({ onConfirm }, ref) => {
		const { cart } = useContext(CartContext);
		return (
			<dialog className='ConfirmDialog' ref={ref}>
				<main>
					<IconOrderConfirmed />
					<div className='message'>
						<h1>Order Confirmed</h1>
						<span>We hope you enjoy your food!</span>
					</div>
					<div className='items'>
						{Object.entries(cart).map(([_id, quantity]) => {
							const id = parseInt(_id);
							return (
								<DialogTile
									key={id}
									quantity={quantity}
									thumbnail={data[id].image.thumbnail}
									{...data[id]}
								/>
							);
						})}
						<div className='total'>
							<span className='text'>Order total</span>
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
					</div>
					<Button onClick={onConfirm}>Start New Order</Button>
				</main>
			</dialog>
		);
	},
);

export default ConfirmDialog;
