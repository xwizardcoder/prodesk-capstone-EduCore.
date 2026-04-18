import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        if (credentials?.email && credentials?.password) {
          return {
            id: "1",
            email: credentials.email,
          };
        }
        return null;
      },
    }),
  ],

  session: { strategy: "jwt" },

  pages: {
    signIn: "/login",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.email = token.email;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };