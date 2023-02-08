import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Column from '@/ui/grid/Column'

const HeaderLogo: FC = () => {
	return (
		<Column size={2}>
			<Link href='/' className='flex items-center'>
				<Image
					src='/images/logo.svg'
					width={70}
					height={70}
					alt='Lorian Ecommerce'
					className='mr-3'
				/>
				<span>
					<span className='block font-light text-white tracking-[0.14rem] uppercase'>
						Lorian
					</span>
					<span className='block font-extralight text-sm text-dark-gray tracking-[0.4rem] uppercase'>
						Store
					</span>
				</span>
			</Link>
		</Column>
	)
}

export default HeaderLogo
