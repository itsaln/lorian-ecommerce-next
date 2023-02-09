import Image from 'next/image'
import { FC } from 'react'

import Layout from '@/layout/Layout'

import HomeInformation from '@/screens/home/home-information/HomeInformation'
import HotSale from '@/screens/home/hot-sale/HotSale'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

import { IProductsPage } from '../../../../pages'

const Shop: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout title='Shop' description='Catalog clothing and accessories'>
			<Row
				className='bg-dark-primary bg-no-repeat bg-center bg-cover'
				style={{
					backgroundBlendMode: 'multiply',
					backgroundImage: 'url(/images/texture.jpg)'
				}}
			>
				{products.map((product, index) => (
					<Column key={product.id} size={index === 2 ? 3 : index === 4 ? 3 : 2}>
						<div>
							<Image
								src={product.images[0]}
								alt={product.name}
								width={220}
								height={220}
							/>
							<h2>{product.name}</h2>
							<div className=''>{product.description}</div>
							<button>Add to cart</button>
						</div>
					</Column>
				))}
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
