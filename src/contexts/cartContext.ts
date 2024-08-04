import { createContext } from 'react';

export type CartItems = { [key: number]: number };
type CartContextType = {
	cart: CartItems;
	addToCart: (id: number, amount?: number) => void;
	removeFromCart: (id: number, amount?: number) => void;
	removeItem: (id: number) => void;
	clearCart: () => void;
};

export const CartContext = createContext<CartContextType>({
	cart: {},
	addToCart: () => {},
	removeFromCart: () => {},
	removeItem: () => {},
	clearCart: () => {},
});
