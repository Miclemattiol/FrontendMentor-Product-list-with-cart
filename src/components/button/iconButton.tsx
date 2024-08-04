import classNames from 'classnames';
import { ButtonProps } from './button';
import './iconButton.scss';

const IconButton = ({ className, ...props }: ButtonProps) => {
	return <button className={classNames('IconButton', className)} {...props} />;
};

export default IconButton;