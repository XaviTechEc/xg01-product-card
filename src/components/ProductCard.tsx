import React, { createContext } from 'react';

import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import {
	InitialValues,
	IOnChangeArgs,
	IProduct,
	IProductContextProps,
	ProductCardHandlers
} from '../interfaces/Product';

// import { ProductTitle, ProductButtons, ProductImage } from './';

export const ProductContext = createContext({} as IProductContextProps);
export const { Provider } = ProductContext;

export type ProductCardProps = {
	product: IProduct;
	// children?: React.ReactElement | React.ReactElement[];
	children: (args: ProductCardHandlers) => JSX.Element;
	className?: string;
	style?: React.CSSProperties;
	onChange?: (args: IOnChangeArgs) => void;
	value?: number;
	initialValues?: InitialValues;
};

export const ProductCard = ({
	children,
	product,
	className,
	style,
	onChange,
	value,
	initialValues
}: ProductCardProps) => {
	const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
		useProduct({
			onChange,
			product,
			value,
			initialValues
		});

	//* Values available in the provider
	const values = { counter, increaseBy, product, maxCount };

	return (
		<Provider value={values}>
			<div
				className={`${styles.productCard} ${className}`}
				style={style}
			>
				{
					//* === FUNTION CHILD ===
					children({
						count: counter,
						isMaxCountReached,
						maxCount,
						product,
						increaseBy,
						reset
					})
				}
			</div>
		</Provider>
	);
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
