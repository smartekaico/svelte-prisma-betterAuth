// import { redirect } from '@sveltejs/kit';
// import type { LayoutServerLoad } from './$types';

// export const load: LayoutServerLoad = async ({ locals, url }) => {
// 	const session = await locals.auth();

// 	if (!session?.user) {
// 		throw redirect(303, `/login?redirectTo=${url.pathname}`);
// 	}

// 	// Check if user has admin role
// 	if (session.user.role !== 'ADMIN') {
// 		throw redirect(303, '/');
// 	}

// 	return {
// 		session
// 	};
// };
