import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/dashboard/signin',
    newUser: '/dashboard',
  },
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isSignedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      const isOnHome = nextUrl.pathname.startsWith("/");
      const isOnSignIn = nextUrl.pathname.startsWith("/dashboard/signin");

      if(isSignedIn && (isOnSignIn)) {
        return Response.redirect(new URL('/dashboard', nextUrl as unknown as URL));
      }

      if(isOnSignIn) {
        return true;
      }
      
      if(isOnDashboard) {
        if(isSignedIn) return true;
          return false;
      }

      if(isOnHome) {
        return true;
      }

      if(isSignedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl as unknown as URL));
      }

      return true;
    },
  },
} satisfies NextAuthConfig;
