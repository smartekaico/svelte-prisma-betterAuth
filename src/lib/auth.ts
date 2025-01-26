import { PrismaClient } from '@prisma/client';
import { AUTH_GITHUB_ID, AUTH_GITHUB_SECRET } from '$env/static/private';
import GitHub from '@auth/sveltekit/providers/github';
import { SvelteKitAuth } from '@auth/sveltekit';
import { PrismaAdapter } from '@auth/prisma-adapter';

const prisma = new PrismaClient();

export const { handle, signIn, signOut } = SvelteKitAuth({
	adapter: PrismaAdapter(prisma),
	providers: [GitHub]
});
