<script>
	import { userName, role, reports, email, validate, fsg, users, privOfSer } from '../stores';
	import { goto } from '$app/navigation';
	import { Button, Container, Input } from 'sveltestrap';
	import { enhance } from '$app/forms';

	/** @type {import('./$types').PageData} */

	export let data;

	/** @type {import('./$types').ActionData} */

	export let form;
	// @ts-ignore

	$: {
		if (form?.success) {
			$email = data.userInfo.email;
			$reports = data.reps;
			$userName = data.userInfo.name;
			$role = data.userInfo.admin;
			$validate = data.userInfo.submitted;
			$fsg = data.userInfo.fsg;
			$privOfSer = data.userInfo.privOfSer;
			$users = data.users;
		}
		if ($userName) {
			goto('/home');
		}
	}
</script>

<svelte:head>
	<title>Login to LRC Report App</title>
</svelte:head>

<body>
	<Container>
		<br />
		<form method="POST" action="?/login" use:enhance style="text-align: center; display: block;">
			<h3>Login To LRC Report App</h3>
			<br />
			<label>
				Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<input name="name" type="text" />
			</label>
			<br />
			<br />
			<label>
				Password:
				<input name="password" type="password" />
			</label>
			<br />
			<br />
			&nbsp;&nbsp;&nbsp;<Button color="success">Log in</Button>
		</form>
		{#if form?.success}
			<p style="color: green;">
				<b>Login Successful. Redirecting!!! <br /></b>
			</p>
		{/if}
		{#if form?.missing}<p class="error">Invalid credentials!</p>{/if}
	</Container>
</body>

<style>
	.error {
		color: red;
		font-size: medium;
		text-decoration: solid;
	}
</style>
