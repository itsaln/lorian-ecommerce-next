import { GetStaticProps, NextPage } from 'next'

import Shop from '@/screens/shop/Shop'

import { ProductService } from '@/services/product.service'

import { IProductsPage } from './index'

const ShopPage: NextPage<IProductsPage> = ({ products }) => {
	return <Shop products={products} />
}

export const getStaticPops: GetStaticProps<IProductsPage> = async () => {
	const products = await ProductService.getProducts()

	return {
		props: {
			products
		}
	}
}

export default ShopPage
