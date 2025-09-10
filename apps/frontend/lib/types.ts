import {z as zod} from "zod";

export const SignInSchema = zod.object({
    email: zod.email(),
    password: zod.string().min(6, "Password must be at least 6 characters long")
})

export const SignUpSchema = zod.object({
    pubkey: zod.string().optional(),
    email: zod.string().email(),
    password: zod.string().min(6, "Password must be at least 6 characters long"),
    discordId: zod.string().optional(),
    displayName: zod.string().min(3, "Display name must be at least 3 characters long"),
    avatar: zod.string().url().optional()
})