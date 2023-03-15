<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import { Container, Input, Button } from 'sveltestrap';
	import { userName, role, reports, email, validate, fsg, privOfSer, month } from '../../stores';
	import { enhance } from '$app/forms';
	let useClass = false;
	export let data;
	/**
	 * @type {string | boolean | any[] | null}
	 */
	let numOfPub = 94;
	let numOfRegPub = data.enum;
	let ap = data.ap;
	let rp = data.rp;
	let userReports = $reports;
	let filteredReports = userReports;
	let searchTerm = '';
	let filSub = data.filSub;
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];
	let preMonth = [];
	const d = new Date();
	let currentMonth = months[d.getMonth()];

	$: {
		// @ts-ignore
		filteredReports = userReports;
		if (searchTerm) {
			// @ts-ignore
			filteredReports = userReports.filter((array) => {
				return array.name.toString().toLowerCase().includes(searchTerm.toLowerCase());
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
	 *
	 */
	export let form;
</script>

<svelte:head>
	<title>LRC Publisher Report</title>
</svelte:head>
<body>
	{#if $userName}
		<div class="form">
			{#if $month != currentMonth}
				<form method="POST" action="?/submit" use:enhance>
					<br />
					<h2 style="text-align: center;">{currentMonth} Report</h2>
					<br />
					<Input name="name" type="hidden" value={$userName} />
					<br />
					<br />
					<h5>Hours:</h5>
					<Input name="hours" type="number" required />
					<br />
					<br />
					<h5>Placements:</h5>
					<Input name="placements" type="number" required /><br /><br />
					<h5>Return Visits:</h5>
					<Input name="rv" type="number" required /><br /><br />
					<h5>Bible Studies:</h5>
					<Input name="biblestudies" type="number" required /><br /><br />
					<h5>Videos:</h5>
					<Input name="videos" type="number" required /><br /><br />
					<Input name="role" type="hidden" value={$role} /><br /><br />
					<Input name="privOfSer" type="hidden" value={$privOfSer} />
					<Input name="email" type="hidden" value={$email} /><br /><br />
					<Input name="fsg" type="hidden" value={$fsg} />
					<Input name="month" type="hidden" value={currentMonth} />
					<Button color="success">Submit Report</Button>
				</form>
				<hr style="border: 1.5px solid gray;" />
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
					<h3>Publishers Reports</h3>
					<table>
						<tr>
							<th>S/N</th>
							<th>Name</th>
							<th>Hours</th>
							<th>Placements</th>
							<th>Return Visits</th>
							<th>Bible Studies</th>
							<th>Videos</th>
							<th>Group No.</th>
						</tr>
						{#each filteredReports as report, index}
							<tr>
								<td>{index + 1}.</td>
								<td>{report.name}</td>
								<td>{report.hours}</td>
								<td>{report.placements}</td>
								<td>{report.returnVisits}</td>
								<td>{report.bibleStudies}</td>
								<td>{report.videos}</td>
								<td>{report.fsg}</td>
							</tr>
						{/each}
					</table>
					<br />
					<br />
					<br />
					<table class="table1">
						<tr style="text-align: center;"> <b>Stats </b></tr>
						<tr>
							<th>Field</th>
							<th>Value</th>
						</tr>
						<tr>
							<td>Number Of <br />Publishers</td>
							<td>{numOfPub}</td>
						</tr>
						<tr>
							<td>Number Of Reports Submitted</td>
							{#if numOfPub > filSub}
								<td style="color: red;">{filSub}</td>
							{:else}
								<td style="color: green;">{filSub}</td>
							{/if}
						</tr>
						<tr>
							<td>Number Of Registered Publishers</td>
							{#if numOfPub > numOfRegPub}
								<td style="color: red;">{numOfRegPub}</td>
							{:else}
								<td style="color: green;">{numOfRegPub}</td>
							{/if}
						</tr>
						<tr>
							<td>Number Of Regular Pionners</td>
							<td>{rp}</td>
						</tr>
						<tr>
							<td>Number Of Auxiliary Pionners</td>
							<td>{ap}</td>
						</tr>
					</table>
				{/if}
				<br /><br />
				<a href="/donate"><Button color="success">Make Donations Page</Button></a><br />
				<br />
				<Button color="primary" on:click={showForm}>Create User</Button>
				<br />
				<br />
				{#if useClass === true}
					<form method="POST" action="?/register" use:enhance>
						<br />
						<h5>Name:</h5>
						<Input name="name" type="text" />

						<br />
						<br />

						<h5>Password:</h5>
						<Input name="password" type="password" />
						<br />
						<br />

						<h5>Email:</h5>
						<Input name="email" type="email" />
						<br />
						<br />

						<h5>Field Service Group No.</h5>
						<Input type="number" name="fsg" />
						<br />
						<br />
						<h5>Priviledge Of Service</h5>
						<Input type="select" name="privOfSer">
							<option value="none">none</option>
							<option value="regular pioneer">regular pioneer</option>
							<option value="auxiliary pioneer">auxiliary pioneer</option>
						</Input>
						<br />
						<br />
						<h5>Is This Person An Admin?</h5>
						<Input type="select" name="adminStats">
							<option value="none">none</option>
							<option value="true">Yes</option>
							<option value="false">No</option>
						</Input>
						<br />
						<br />
						<div class="sub-btn" style="padding: 20px;">
							<Button color="success">Create User</Button>
						</div>
					</form>
					{#if form?.success}
						<p style="color: green;">
							<b>User Created!!! <br /></b>
						</p>
					{/if}
					{#if form?.missing}<p class="error">Incomplete credentials!</p>{/if}
				{/if}
			{/if}
		</div>
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
	body {
		text-align: center;
		padding-left: 50px;
		padding-right: 50px;
	}
	.form {
		text-align: center;
	}
	h5 {
		text-align: left;
	}
	table {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 100%;
	}

	.table1 {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 45%;
	}

	td,
	th {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}

	tr:nth-child(even) {
		background-color: #dddddd;
	}
</style>
