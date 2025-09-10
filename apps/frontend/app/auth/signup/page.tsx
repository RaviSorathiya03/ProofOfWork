"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignUpPage() {
  const [form, setForm] = useState({
    pubkey: "",
    email: "",
    password: "",
    discordId: "",
    displayName: "",
    avatarUrl: "",
  });
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // TODO: Replace with your actual signup API call
    try {
      // Example POST request
      const res = await axios.post("/api/signup", form);
      const data = await res.data;
      if (!res.status.toString().startsWith("2")) {
        setError(data.error || "Sign up failed");
      } else {
        router.push("/auth/signin");
      }
    } catch (err) {
      setError("Sign up failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <Card className="w-full max-w-md shadow-2xl border-none bg-white/80 backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            ProofOfSkill
          </CardTitle>
          <p className="text-center text-gray-500 mt-2">Create your account</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="pubkey" className="block text-sm font-medium text-gray-700">
                Solana Wallet Address (optional)
              </label>
              <Input
                id="pubkey"
                name="pubkey"
                type="text"
                placeholder="Your Solana wallet address"
                className="mt-2"
                value={form.pubkey}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                className="mt-2"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="mt-2"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="discordId" className="block text-sm font-medium text-gray-700">
                Discord ID (optional)
              </label>
              <Input
                id="discordId"
                name="discordId"
                type="text"
                placeholder="Your Discord ID"
                className="mt-2"
                value={form.discordId}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">
                Display Name
              </label>
              <Input
                id="displayName"
                name="displayName"
                type="text"
                placeholder="Your display name"
                className="mt-2"
                value={form.displayName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="avatarUrl" className="block text-sm font-medium text-gray-700">
                Avatar URL (optional)
              </label>
              <Input
                id="avatarUrl"
                name="avatarUrl"
                type="text"
                placeholder="Link to your avatar image"
                className="mt-2"
                value={form.avatarUrl}
                onChange={handleChange}
              />
            </div>
            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold py-2 rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              Sign Up
            </Button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/auth/signin" className="text-indigo-600 font-semibold hover:underline">
              Sign in
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}