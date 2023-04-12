import { GetStaticProps, NextPage } from 'next'

import Shop from '@/screens/shop/Shop'
import { IProductsPage } from './index'
import { ProductService } from '@/services/product.service'

const ShopPage: NextPage<IProductsPage> = ({ products }) => {
	return <Shop products={products} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const products = await ProductService.getProducts()

		return {
			props: {
				products
			} as IProductsPage,
			revalidate: 60
		}
	} catch (error) {
		return {
			props: {
				products: []
			}
		}
	}
}

export default ShopPage
