import { useCallback, useState } from 'react';
import { CartContext, CartItems } from '../contexts/cartContext';

type CartProviderProps = {
	children?: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
	const [cart, setCart] = useState<CartItems>({});
	const addToCart = useCallback((id: number, amount = 1) => {
		setCart((prevCart) => {
			const newCart = { ...prevCart };
			newCart[id] = (newCart[id] ?? 0) + amount;
			return newCart;
		});
	}, []);

	const removeFromCart = useCallback((id: number, amount = 1) => {
		setCart((prevCart) => {
			if (!prevCart[id] || prevCart[id] < amount) {
				return prevCart;
			}
			const newCart = { ...prevCart };
			newCart[id] = (newCart[id] ?? 0) - amount;
			if (newCart[id] <= 0) {
				delete newCart[id];
			}
			return newCart;
		});
	}, []);

	const removeItem = useCallback((id: number) => {
		setCart((prevCart) => {
			if (!prevCart[id]) {
				return prevCart;
			}
			const newCart = { ...prevCart };
			delete newCart[id];
			return newCart;
		});
	}, []);

	const clearCart = useCallback(() => {
		setCart((prevCart) => {
			if (Object.keys(prevCart).length === 0) {
				return prevCart;
			}
			return {};
		});
	}, []);

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				removeItem,
				clearCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
