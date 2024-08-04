import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import CartProvider from './providers/cartProvider.tsx';
import Favicon from 'react-favicon';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Favicon url='/assets/images/favicon-32x32.png' />
		<CartProvider>
			<App />
		</CartProvider>
	</React.StrictMode>,
);
