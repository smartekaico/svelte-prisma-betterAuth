import { PrismaClient } from '@prisma/client';
import { AUTH_GITHUB_ID, AUTH_GITHUB_SECRET } from '$env/static/private';
import GitHub from '@auth/sveltekit/providers/github';
import { SvelteKitAuth } from '@auth/sveltekit';
import { PrismaAdapter } from '@auth/prisma-adapter';
import type { Provider } from '@auth/core/providers';

const prisma = new PrismaClient();

export const { handle, signIn, signOut } = SvelteKitAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GitHub({
			clientId: AUTH_GITHUB_ID,
			clientSecret: AUTH_GITHUB_SECRET,
			profile(profile) {
				return {
					id: profile.id.toString(),
					name: profile.name || profile.login,
					email: profile.email,
					image: profile.avatar_url
				};
			}
		}) as Provider
	],
	callbacks: {
		async session({ session, user }) {
			if (session?.user) {
				session.user.id = user.id;
			}
			return session;
		},
		async redirect({ url, baseUrl }) {
			// Allows relative callback URLs
			if (url.startsWith('/')) return `${baseUrl}${url}`;
			// Allows callback URLs on the same origin
			else if (new URL(url).origin === baseUrl) return url;
			return baseUrl;
		}
	},
	pages: {
		signIn: '/login'
	},
	trustHost: true
});
