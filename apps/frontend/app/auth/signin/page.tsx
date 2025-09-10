"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();
    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        const res = await signIn("credentials", {
            redirect: false,
            email, 
            password,
            callbackUrl: "/dashboard"
        })

        if(res?.error){
            setError(res.error);
        } else{
            router.push("/dashboard");
        }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <Card className="w-full max-w-md shadow-2xl border-none bg-white/80 backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            ProofOfSkill
          </CardTitle>
          <p className="text-center text-gray-500 mt-2">Sign in to your account</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mt-2"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold py-2 rounded-lg shadow-lg hover:scale-105 transition-transform"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/auth/signup" className="text-indigo-600 font-semibold hover:underline">
              Sign up
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
)};