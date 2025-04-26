// src/lib/actions.ts
"use server";

import { signIn, signOut } from "@/lib/auth";

export async function githubSignIn() {
  await signIn("github", {
    callbackUrl: "/dashboard",
  });
}

export async function googleSignIn() {
  await signIn("google", {
    callbackUrl: "/dashboard",  
  });
}

export async function signoutAction() {
  await signOut({ redirectTo: "/" });
}