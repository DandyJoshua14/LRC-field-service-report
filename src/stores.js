import { writable } from "svelte/store";
import { browser } from "$app/environment";

export let userName = writable(browser && localStorage.getItem("name"));
// @ts-ignore
userName.subscribe((val) => browser && localStorage.setItem("userName", val));

export let role = writable(browser && localStorage.getItem("role"));
// @ts-ignore
role.subscribe((val) => browser && localStorage.setItem("role", val));

export let reports = writable(browser && localStorage.getItem("reports"));
// @ts-ignore
reports.subscribe((val) => browser && localStorage.setItem("reports", val));

export let email = writable(browser && localStorage.getItem("email"));
// @ts-ignore
email.subscribe((val) => browser && localStorage.setItem("email", val));

export let validate = writable(browser && localStorage.getItem("validate"));
// @ts-ignore
validate.subscribe((val) => browser && localStorage.setItem("validate", val));

export let fsg = writable(browser && localStorage.getItem("fsg"));
// @ts-ignore
fsg.subscribe((val) => browser && localStorage.setItem("fsg", val));

export let users = writable(browser && localStorage.getItem("users"));
// @ts-ignore
users.subscribe((val) => browser && localStorage.setItem("users", val));

export let privOfSer = writable(browser && localStorage.getItem("privOfSer"));
// @ts-ignore
privOfSer.subscribe((val) => browser && localStorage.setItem("privOfSer", val));