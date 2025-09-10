import {prisma} from "db/client"
import { SignUpSchema } from "@/lib/types";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
    const body = await req.json();

    const parsed = SignUpSchema.safeParse(body);

    if(!parsed.success){
        return NextResponse.json({error: "Invalid input data"}, {status: 400});
    }

    const checkUser = await prisma.user.findFirst({
        where: {
            OR: [
                {email: parsed.data.email},
                {pubkey: parsed.data.pubkey},
                {discordId: parsed.data.discordId}
            ]
        }
    });

    if(checkUser){
        return NextResponse.json({error: "User already exists with given email, pubkey or discordId"}, {status: 409});
    }

    const hashedPassword = await bcrypt.hash(parsed.data.password, 10);

    const newUser = await prisma.user.create({
        data: {
            email: parsed.data.email,
            password: hashedPassword,
            pubkey: parsed.data.pubkey,
            discordId: parsed.data.discordId,
            displayName: parsed.data.displayName,
            avatarUrl: parsed.data.avatar
        }
    });

    return NextResponse.json({user: newUser}, {status: 201});
}