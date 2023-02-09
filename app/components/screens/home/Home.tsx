import Image from 'next/image'
import { FC } from 'react'

import Layout from '@/layout/Layout'

import HomeInformation from '@/screens/home/home-information/HomeInformation'
import HotSale from '@/screens/home/hot-sale/HotSale'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

import { IProductsPage } from '../../../../pages'

const Home: FC<IProductsPage> = ({ products }) => {
	// TODO: Add texture for background
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			<Row
				className='bg-dark-primary bg-no-repeat bg-center bg-cover'
				style={{
					backgroundBlendMode: 'multiply',
					backgroundImage: 'url(/images/texture.jpg)'
				}}
			>
				<Column size={7} isPadding={false}>
					<div
						className='w-full h-full bg-no-repeat bg-center bg-contain'
						style={{ backgroundImage: 'url(/images/main-4x.png)' }}
					/>
				</Column>
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

export default Home
