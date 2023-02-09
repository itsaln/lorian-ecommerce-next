import { axiosClassic } from '@/api/api'

import { IPaymentResponse } from '@/shared/types/payment.interface'

const PAYMENT = 'payment'

export const PaymentService = {
	async createPayment(amount: number) {
		const { data } = await axiosClassic.post<IPaymentResponse>(PAYMENT, {
			amount
		})

		return data
	}
}
