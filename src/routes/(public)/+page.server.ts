import { fail, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	signIn: async ({ locals }) => {
		await locals.logtoClient.signIn('http://localhost:5173/auth/callback');
	},
	signOut: async ({ locals }) => {
		await locals.logtoClient.signOut('http://localhost:5173/');
	}
};
