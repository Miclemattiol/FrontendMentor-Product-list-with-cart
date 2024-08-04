import classNames from 'classnames';
import { IconDecrement, IconIncrement } from '../../icons';
import './quantitySelector.scss';

type QuantitySelectorProps = {
	quantity: number;
	increase?: React.MouseEventHandler<SVGElement>;
	decrease?: React.MouseEventHandler<SVGElement>;
} & React.HTMLAttributes<HTMLDivElement>;

const QuantitySelector = ({
	quantity,
	increase,
	decrease,
	className,
	...props
}: QuantitySelectorProps) => {
	return (
		<div className={classNames('QuantitySelector', className)} {...props}>
			<IconDecrement onClick={decrease} />
			<span>{quantity}</span>
			<IconIncrement onClick={increase} />
		</div>
	);
};

export default QuantitySelector;
