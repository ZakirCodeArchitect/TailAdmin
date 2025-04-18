// src/lib/actions.ts
"use server";

import { signIn } from "@/lib/auth";

export async function githubSignIn() {
  await signIn("github", {
    callbackUrl: "/",
  });
}
