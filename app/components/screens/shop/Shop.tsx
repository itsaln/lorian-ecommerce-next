import Image from 'next/image'
import { FC } from 'react'

import Layout from '@/layout/Layout'

import HomeInformation from '@/screens/home/home-information/HomeInformation'
import HotSale from '@/screens/home/hot-sale/HotSale'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

import { IProductsPage } from '../../../../pages'
import { formatToCurrency } from '@/utils/format-to-currency'

const Shop: FC<IProductsPage> = ({ products }) => {
	console.log('products:---', products)

	return (
		<Layout title='Shop' description='Catalog clothing and accessories'>
			<Row
				className='bg-dark-primary bg-no-repeat bg-center bg-cover'
				style={{
					backgroundBlendMode: 'multiply',
					backgroundImage: 'url(/images/texture.jpg)'
				}}
			>
				{/*{!!products.length &&*/}
				{/*	products.map((product, index) => (*/}
				{/*		<Column*/}
				{/*			key={product.id}*/}
				{/*			size={index === 2 ? 3 : index === 4 ? 3 : 2}*/}
				{/*		>*/}
				{/*			<div className='text-white text-center pb-5'>*/}
				{/*				<div className='flex items-center justify-center mb-4' style={{height: 283}}>*/}
				{/*					<Image*/}
				{/*						src={product.images[0]}*/}
				{/*						alt={product.name}*/}
				{/*						width={220}*/}
				{/*						height={220}*/}
				{/*					/>*/}
				{/*				</div>*/}
				{/*				<h2 className='font-serif text-lg mb-2'>{product.name}</h2>*/}
				{/*				<div className='mb-3'>{formatToCurrency(product.price)}</div>*/}
				{/*				<button className='btn-link'>Add to cart</button>*/}
				{/*			</div>*/}
				{/*		</Column>*/}
				{/*	))}*/}
				<Column
					size={5}
					isPadding={false}
					isCenter={false}
					className='flex-col'
				>
					<HotSale />
					<HomeInformation />
				</Column>
			</Row>
		</Layout>
	)
}

export default Shop
