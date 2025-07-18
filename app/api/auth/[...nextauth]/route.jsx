import NextAuth from 'next-auth'
import AppleProvider from 'next-auth/providers/apple'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github";
export const authOptions = ({
  providers: [
    // OAuth authentication providers...
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    // // Passwordless / email sign in
    // EmailProvider({

    
  GitHubProvider({
    clientId: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET
  }),
  // Uncomment and configure EmailProvider if needed
  // EmailProvider({
  //   server: process.env.MAIL_SERVER,
  //   from: 'NextAuth.js <no-reply@example.com>'
  // }),
  ]
});
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };