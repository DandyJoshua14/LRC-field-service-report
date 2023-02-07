<script>
	import Paystack from 'svelte-paystack/src';

	//import your custom-component
	import { Button, Input, Container } from 'sveltestrap';
	let payAmount = '';
	let email = '';
	let firstName = '';
	let lastName = '';
	let config = {
		key: 'pk_test_cfefbb6976c0e4c3640e83b89bfafb87dbc3b8ab',
		email: 'youremail@email.com',
		amount: 0,
		currency: 'NGN',
		withSlot: true, // If you need to render a custom component to replace default button
		embed: false,
		disabled: false,
		callback: function (/** @type {{ reference: string; }} */ response) {
			console.log('successfully subscribed. transaction ref is ' + response.reference);
		},
		onClose: function () {
			console.log('window closed');
		}
	};
	function handlePayment(fn) {
		config.email = email;
		config.amount = parseFloat(payAmount) * 100;
		fn();
	}
</script>

<svelte:head>
	<title>Donate To Congregation Expenses</title>
</svelte:head>

<Paystack {config} />
<Container>
	<div class="payment-form">
		<h3>Donate !</h3>
		<Paystack let:usePayInline {config}
			><br />
			<h5>First Name:</h5>
			<Input bind:value={firstName} /><br />
			<h5>Last Name:</h5>
			<Input bind:value={lastName} /><br />
			<h5>Email:</h5>
			<Input bind:value={email} /><br />
			<h5>Amount:</h5>
			<Input bind:value={payAmount} />
			<br />
			<Button color="success" block on:click={() => handlePayment(usePayInline)}
				><b>Pay With Pay Stack</b></Button
			>
		</Paystack>
	</div>
</Container>

<style>
	* {
		padding: 0px;
	}
	.payment-form {
		margin: 100px;
		color: white;
		font-size: 1rem;
		border-radius: 50px;
		background-color: #193046;
		text-align: center;
		padding: 40px;
	}
	h5 {
		text-align: left;
	}
</style>
