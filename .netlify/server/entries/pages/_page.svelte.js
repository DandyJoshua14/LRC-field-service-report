import { c as create_ssr_component, b as subscribe, d as set_store_value, v as validate_component } from "../../chunks/index2.js";
import { e as email, r as reports, u as userName, a as role, v as validate, C as Container, B as Button } from "../../chunks/Offcanvas.svelte_svelte_type_style_lang.js";
import "devalue";
function guard(name) {
  return () => {
    throw new Error(`Cannot call ${name}(...) on the server`);
  };
}
const goto = guard("goto");
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".error.svelte-141m2ep{color:red;font-size:medium;text-decoration:solid}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userName, $$unsubscribe_userName;
  let $validate, $$unsubscribe_validate;
  let $role, $$unsubscribe_role;
  let $reports, $$unsubscribe_reports;
  let $email, $$unsubscribe_email;
  $$unsubscribe_userName = subscribe(userName, (value) => $userName = value);
  $$unsubscribe_validate = subscribe(validate, (value) => $validate = value);
  $$unsubscribe_role = subscribe(role, (value) => $role = value);
  $$unsubscribe_reports = subscribe(reports, (value) => $reports = value);
  $$unsubscribe_email = subscribe(email, (value) => $email = value);
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  {
    {
      if (form?.success) {
        set_store_value(email, $email = data.userInfo.email, $email);
        set_store_value(reports, $reports = data.reps, $reports);
        set_store_value(userName, $userName = data.userInfo.name, $userName);
        set_store_value(role, $role = data.userInfo.admin, $role);
        set_store_value(validate, $validate = data.userInfo.submitted, $validate);
      }
      if ($userName) {
        goto("/home");
      }
    }
  }
  $$unsubscribe_userName();
  $$unsubscribe_validate();
  $$unsubscribe_role();
  $$unsubscribe_reports();
  $$unsubscribe_email();
  return `${$$result.head += `<!-- HEAD_svelte-wohzv2_START -->${$$result.title = `<title>Login to LRC Report App</title>`, ""}<!-- HEAD_svelte-wohzv2_END -->`, ""}

<body>${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `<br>
		<form method="${"POST"}" action="${"?/login"}" style="${"text-align: center; display: block;"}"><label>Name:       
				<input name="${"name"}" type="${"text"}"></label>
			<br>
			<br>
			<label>Password:
				<input name="${"password"}" type="${"password"}"></label>
			<br>
			<br>
			   ${validate_component(Button, "Button").$$render($$result, { color: "success" }, {}, {
        default: () => {
          return `Log in`;
        }
      })}</form>
		${form?.success ? `<p style="${"color: green;"}"><b>Login Successful. Redirecting!!! <br></b></p>` : ``}
		${form?.missing ? `<p class="${"error svelte-141m2ep"}">The email field is required</p>` : ``}
		${form?.incorrect ? `<p class="${"error svelte-141m2ep"}">Invalid credentials!</p>` : ``}`;
    }
  })}
</body>`;
});
export {
  Page as default
};
