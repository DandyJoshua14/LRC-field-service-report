<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import { Container, Input, Button } from 'sveltestrap';
	import { userName, role, reports, email, validate } from '../../stores';
	import { enhance } from '$app/forms';
	let useClass = false;
	/**
	 * @type {string | boolean | any[] | null}
	 */
	let userReports = $reports;
	let filteredReports = userReports;
	let searchTerm = '';
	$: {
		// @ts-ignore
		filteredReports = userReports;
		if (searchTerm) {
			// @ts-ignore
			filteredReports = userReports.filter((array) => {
				return array.hours.toString().toLowerCase().includes(searchTerm.toLowerCase());
			});
		} else {
			// @ts-ignore
			filteredReports = userReports;
		}
	}
	async function showForm() {
		if (useClass === false) {
			useClass = true;
		} else {
			useClass = false;
		}
	}
	/**
	 * @type {{ success: any; missing: any; incorrect: any; }}
	 */
	export let form;
</script>

<svelte:head>
	<title>LRC Publisher Report</title>
</svelte:head>
<body>
	{#if $userName}
		<Container>
			<div class="form">
				{#if !$validate}
					<form method="POST" action="?/submit" use:enhance>
						<h2 style="text-align: center;">January Report</h2>
						<br />
						<h5>Name:</h5>
						<Input name="name" type="text" value={$userName} />
						<br />
						<br />
						<h5>Hours:</h5>
						<Input name="hours" type="number" />
						<br />
						<br />
						<h5>Placements:</h5>
						<Input name="placements" type="number" /><br /><br />
						<h5>Return Visits:</h5>
						<Input name="rv" type="number" /><br /><br />
						<h5>Bible Studies:</h5>
						<Input name="biblestudies" type="number" /><br /><br />
						<h5>Videos:</h5>
						<Input name="videos" type="number" /><br /><br />
						<h5>Admin Role:</h5>
						<Input name="role" type="text" bind:value={$role} /><br /><br />
						<h5>Email:</h5>
						<Input name="role" type="text" value={$email} disabled /><br /><br />
						<Button color="success">Submit Report</Button>
					</form>
				{:else}
					<h3>You've already Submitted Your Monthly Report</h3>
				{/if}
				<br />
				{#if $role}
					<h4 style="text-decoration: underline dotted;">{$userName}(Admin)</h4>
					<br />
					<Input type="text" placeholder="Search Report" bind:value={searchTerm} />
					<br />
					{#if filteredReports}
						{#each filteredReports as report, index}
							<div style="border: 1px solid black; border-radius: 10px;">
								<h3 style="text-align: left; padding: 10px; text-decoration: 2px underline;">
									{index + 1}. {report.name}
								</h3>
								<p><b>Hours: {report.hours}</b></p>
								<hr />
								<p><b>Placements: {report.placements}</b></p>
								<hr />
								<p><b>R/V's: {report.returnVisits}</b></p>
								<hr />
								<p><b>Bible Studies: {report.bibleStudies}</b></p>
								<hr />
								<p><b>Videos: {report.videos}</b></p>
							</div>
						{/each}
					{/if}
					<br /><br />
					<Button color="primary" on:click={showForm}>Create User</Button>
					{#if useClass === true}
						<Container>
							<form method="POST" action="?/register" use:enhance>
								<br />
								<h5>Name:</h5>
								<input name="name" type="text" />

								<br />
								<br />

								<h5>Password:</h5>
								<input name="password" type="password" />
								<br />
								<br />

								<h5>Email:</h5>
								<input name="email" type="email" />
								<br />
								<br />

								<h5>Admin Role:</h5>
								<input type="text" value="false" disabled />

								<br />
								<br />
								<Button color="success">Create User</Button>
							</form>
							{#if form?.success}
								<p style="color: green;">
									<b>User Created!!! <br /></b>
								</p>
							{/if}
							{#if form?.missing}<p class="error">The email field is required</p>{/if}
							{#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
						</Container>
					{/if}
				{/if}
			</div>
		</Container>
	{:else}
		<div>
			<h1 style="text-align: center; padding: 20px;">
				Oops!. Sorry All your data was cleared for security reasons. Please <a href="/"
					><Button style="background-color: green;">Log In!</Button></a
				> again to continue
			</h1>
		</div>
	{/if}
</body>

<style>
	.form {
		text-align: center;
		display: block;
	}
	h5 {
		text-align: left;
	}
</style>
