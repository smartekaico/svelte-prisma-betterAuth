import type { LayoutServerLoad } from './$types';

interface Locals {
	user: {
		id: string;
		email: string;
	} | null;
}

export const load = (async ({ locals }) => {
	return { user: (locals as unknown as Locals).user };
}) satisfies LayoutServerLoad;
