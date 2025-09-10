import Credentials from "next-auth/providers/credentials";
import {prisma} from "db/client"
import { SignInSchema } from "@/lib/types";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const authOptions = {
    providers: [
        Credentials(
            {
                name: "Sign up",

                credentials: {
                    email: {label: "Email", type: "email", placeholder: "you@example.com"},
                    pubkey: {label: "Public key", type: "text", placeholder: "Enter your solana's public key"},
                    discordId: {label: "Dicord Id", type: "text", placeholder: "Enter your discordId"},
                    displayName: {label: "Display Name", type: "text", placeholder: "Enter your display name"},
                    avatar: {label: "Avatar", type: "file", placeholder: "Enter your avatar url"},

                }, 
                async authorize(_credentials, req) {
                    const parsed = SignInSchema.safeParse(req.body);

                    if(!parsed.success){
                        NextResponse.json({error: "Invalid input data"}, {status: 400});
                        return null;
                    }

                    const checkUser = await prisma.user.findFirst({
                        where: {
                            email: parsed.data.email,
                        }
                    });

                    if(!checkUser){
                        NextResponse.json({error: "User not found"}, {status: 404});
                        return null;
                    }

                    const password = bcrypt.compare(parsed.data.password, checkUser.password);
                    if(!password){
                        NextResponse.json({error: "Invalid password"}, {status: 401});
                        return null;
                    }

                    return checkUser;
                }
            }
        )
    ],
    pages:{
        signIn: "/auth/signin",
        newUser: "/auth/signup"
    }
}