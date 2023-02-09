import { GetStaticProps, NextPage } from 'next'

import Shop from '@/screens/shop/Shop'
import { IProductsPage } from './index'
import { ProductService } from '@/services/product.service'

const ShopPage: NextPage = () => {
	return <Shop />
}

export const getStaticPops: GetStaticProps<IProductsPage> = async () => {
	const products = await ProductService.getProducts()
}

export default ShopPage
