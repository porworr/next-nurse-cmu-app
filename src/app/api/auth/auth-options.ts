import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials"
import { compare } from "bcrypt"
import { prisma } from "@/lib/db";
import NextAuth from "next-auth/next";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
        maxAge: 1 * 24 * 60 * 60, // 1 วัน
    },
    pages: {
        signIn: "/login"
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialProvider({
            credentials: {},
            async authorize(credentials, req) {
                const {Email, Password} = credentials as {Email: string, Password: string};

                const user = await prisma.users.findUnique({where: {Email: Email}});
                if (!user) {
                    throw new Error("ไม่พบอีเมล์นี้ในระบบ");
                }
                const isValid = await compare(Password, user.Password as string);
                if (!isValid) {
                    throw new Error("รหัสผ่านไม่ถูกต้อง");
                }
                return {
                    id: user.Id.toString(),
                    name: user.Firstname + " " + user.Lastname,
                    email: user.Email
                }
            },
        }),
    ]
}