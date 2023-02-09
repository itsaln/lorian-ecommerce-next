import { GetStaticProps, NextPage } from 'next'

import Home from '@/screens/home/Home'

import { ProductService } from '@/services/product.service'

import { IProduct } from '@/shared/types/product.interface'

export interface IProductsPage {
	products: IProduct[]
}

const HomePage: NextPage<IProductsPage> = ({ products }) => {
	return <Home products={products} />
}
/* 
export const getStaticProps: GetStaticProps<IProductsPage> = async () => {
	const products = await ProductService.getProducts()

	return {
		props: {
			products
		}
	}
} */

export default HomePage
