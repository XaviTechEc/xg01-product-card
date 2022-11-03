import { ProductCardProps } from '../components/ProductCard';
import { ProductImageProps } from '../components/ProductImage';
import { ProductTitleProps } from '../components/ProductTitle';
import { ProductButtonsProps } from '../components/ProductButtons';

export interface IProduct {
	id: string;
	title: string;
	img?: string;
}

export interface IProductContextProps {
	counter: number;
	increaseBy: (value: number) => void;
	product: IProduct;
	maxCount?: number;
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element;
	Title: (Props: ProductTitleProps) => JSX.Element;
	Image: (Props: ProductImageProps) => JSX.Element;
	Buttons: (Props: ProductButtonsProps) => JSX.Element;
}

export interface IOnChangeArgs {
	product: IProduct;
	count: number;
}

export interface ProductInCart extends IProduct {
	count: number;
}

export interface InitialValues {
	count?: number;
	maxCount?: number;
}

export interface ProductCardHandlers {
	count: number;
	isMaxCountReached: boolean;
	maxCount?: number;
	product: IProduct;

	// Methods
	increaseBy: (value: number) => void;
	reset: () => void;
}
