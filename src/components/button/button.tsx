import { HTMLAttributes } from 'react';
import './button.scss';
import classNames from 'classnames';

export type ButtonProps = HTMLAttributes<HTMLButtonElement>;

const Button = ({ className, ...props }: ButtonProps) => {
	return <button className={classNames('Button', className)} {...props} />;
};

export default Button;
