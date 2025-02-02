// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
/// <reference types="@auth/sveltekit" />
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			logtoClient: LogtoClient;
			user?: UserInfoResponse;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module '@auth/core/types' {
	interface User {
		role?: string;
	}
}

import type { LogtoClient, UserInfoResponse } from '@logto/sveltekit';

export {};
