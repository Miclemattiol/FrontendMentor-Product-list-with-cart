import './dialogTile.scss';

type DialogTileProps = {
	name: string;
	quantity: number;
	price: number;
	thumbnail: string;
};

const DialogTile = ({ name, quantity, price, thumbnail }: DialogTileProps) => {
	return (
		<div className='DialogTile'>
			<div className='item'>
				<img src={thumbnail} alt={name} />
				<div className='info'>
					<span className='name'>{name}</span>
					<div>
						<span className='quantity'>{quantity}x</span>
						<span className='price'>@ ${price.toFixed(2)}</span>
					</div>
				</div>
			</div>
			<span className='total'>${(price * quantity).toFixed(2)}</span>
		</div>
	);
};

export default DialogTile;
