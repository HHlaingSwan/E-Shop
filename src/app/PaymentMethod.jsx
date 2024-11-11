"use client";

import { useState } from "react";
import { CreditCard, Wallet, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import React from "react";

const PaymentMethod = () => {
	const [paymentMethod, setPaymentMethod] = useState("card");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Here you would typically handle the form submission,
		// such as sending the data to your payment processor
		console.log("Payment method submitted:", paymentMethod);
	};
	return (
		<>
			<div className='w-full xl:w-2/5  py-10 '>
				<h1 className='text-2xl text-center mb-8 '>Payment Method</h1>
				<Card className='w-full max-w-2xl mx-auto'>
					<CardHeader>
						<CardTitle>Choose Payment Method</CardTitle>
						<CardDescription>Select your preferred way to pay</CardDescription>
					</CardHeader>
					<form onSubmit={handleSubmit}>
						<CardContent>
							<RadioGroup
								value={paymentMethod}
								onValueChange={(value) => setPaymentMethod(value)}
								className='space-y-4'>
								<div>
									<RadioGroupItem
										value='card'
										id='card'
										className='peer sr-only'
									/>
									<Label
										htmlFor='card'
										className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'>
										<CreditCard className='mb-3 h-6 w-6' />
										Credit/Debit Card
									</Label>
									{paymentMethod === "card" && (
										<div className='mt-4 space-y-4'>
											<div>
												<Label htmlFor='cardNumber'>Card Number</Label>
												<Input
													id='cardNumber'
													placeholder='1234 5678 9012 3456'
													required
												/>
											</div>
											<div className='grid grid-cols-3 gap-4'>
												<div className='col-span-2'>
													<Label htmlFor='expiryDate'>Expiry Date</Label>
													<Input
														id='expiryDate'
														placeholder='MM/YY'
														required
													/>
												</div>
												<div>
													<Label htmlFor='cvv'>CVV</Label>
													<Input
														id='cvv'
														placeholder='123'
														required
													/>
												</div>
											</div>
										</div>
									)}
								</div>
								<div>
									<RadioGroupItem
										value='paypal'
										id='paypal'
										className='peer sr-only'
									/>
									<Label
										htmlFor='paypal'
										className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'>
										<Wallet className='mb-3 h-6 w-6' />
										PayPal
									</Label>
									{paymentMethod === "paypal" && (
										<div className='mt-4'>
											<p className='text-sm text-muted-foreground'>
												You will be redirected to PayPal to complete your
												payment.
											</p>
										</div>
									)}
								</div>
								<div>
									<RadioGroupItem
										value='bank'
										id='bank'
										className='peer sr-only'
									/>
									<Label
										htmlFor='bank'
										className='flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary'>
										<Building className='mb-3 h-6 w-6' />
										Bank Transfer
									</Label>
									{paymentMethod === "bank" && (
										<div className='mt-4 space-y-4'>
											<div>
												<Label htmlFor='accountName'>Account Name</Label>
												<Input
													id='accountName'
													placeholder='John Doe'
													required
												/>
											</div>
											<div>
												<Label htmlFor='accountNumber'>Account Number</Label>
												<Input
													id='accountNumber'
													placeholder='123456789'
													required
												/>
											</div>
											<div>
												<Label htmlFor='bankName'>Bank Name</Label>
												<Select required>
													<SelectTrigger id='bankName'>
														<SelectValue placeholder='Select your bank' />
													</SelectTrigger>
													<SelectContent>
														<SelectItem value='bank1'>
															Bank of America
														</SelectItem>
														<SelectItem value='bank2'>Chase</SelectItem>
														<SelectItem value='bank3'>Wells Fargo</SelectItem>
														<SelectItem value='bank4'>Citibank</SelectItem>
													</SelectContent>
												</Select>
											</div>
										</div>
									)}
								</div>
							</RadioGroup>
						</CardContent>
						<CardFooter>
							<Button
								type='submit'
								className='w-full'>
								Proceed to Payment
							</Button>
						</CardFooter>
					</form>
				</Card>
			</div>
		</>
	);
};

export default PaymentMethod;
