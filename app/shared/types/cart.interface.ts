import { IProduct } from '@/shared/types/product.interface'

export interface ICartItem {
	size: number
	id: number
	product: IProduct
	quantity: number
}
