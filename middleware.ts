import NextAuth from 'next-auth';
import { authConfig } from '@/app/dashboard/(auth)/auth.config';

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/", "/home", "/dashboard", "/home/:id", "/dashboard/:id", "/dashboard/api/:path*", "/dashboard/signin"],
};
