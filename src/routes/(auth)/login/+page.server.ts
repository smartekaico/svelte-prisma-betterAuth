import { fail, redirect, type Actions } from '@sveltejs/kit';
import { signIn } from '$lib/auth';

export const actions: Actions = {
	default: signIn

	// async ({ request, url }) => {
	// 	const formData = await request.formData();
	// 	const email = formData.get('email');
	// 	const password = formData.get('password');

	// 	if (!email || !password) {
	// 		return fail(400, {
	// 			error: 'Missing email or password'
	// 		});
	// 	}

	// 	try {
	// 		const user = await signIn('email', {
	// 			email: email.toString(),
	// 			password: password.toString()
	// 		});

	// 		if (!user) {
	// 			return fail(400, {
	// 				error: 'Invalid credentials'
	// 			});
	// 		}

	// 		const redirectTo = url.searchParams.get('redirectTo') || '/';
	// 		throw redirect(303, redirectTo);
	// 	} catch (error) {
	// 		return fail(500, {
	// 			error: 'An error occurred during login'
	// 		});
	// 	}
	// }
};
