<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { Input, Button, Container } from 'sveltestrap';
	import { browser } from '$app/environment';
	let payAmount = '';
	let email = '';
	let name = '';

	/**
	 * @type {any}
	 */
	export let form;

	$: {
		console.log(form);
		if (form != null && browser) {
			goto(form.data.authorization_url);
		}
	}
</script>

<Container>
	<form action="?/pay" class="paymentForm" method="post">
		<h3>Donate To LRC Calabar !</h3>
		<div class="form-group">
			<h5>Name:</h5>
			<Input type="text" id="name" name="name" required /><br />
		</div>
		<div class="form-group">
			<h5>Email:</h5>
			<Input type="email" id="email-address" name="email" required /><br />
		</div>
		<div class="form-group">
			<h5>Amount</h5>
			<Input type="tel" id="amount" name="amount" required bind:value={payAmount} /><br />
		</div>
		<div class="form-submit">
			<Button color="success" block type="submit">Pay With Pay Stack</Button>
		</div>
	</form>
</Container>

<style>
	* {
		padding: 0px;
	}
	.paymentForm {
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
