"use client";

import { googleSignIn } from "@/lib/actions"; // <-- Now import your server action
import { Google } from "@/components/ui/google";

export function GoogleSignIn() {
  return (
    <form action={googleSignIn}>
      <button className="inline-flex items-center justify-center gap-3 py-3 text-sm font-normal text-gray-700 transition-colors bg-gray-100 rounded-lg px-7 hover:bg-gray-200 hover:text-gray-800 dark:bg-white/5 dark:text-white/90 dark:hover:bg-white/10"
        // variant="outline"
        type="submit"
      >
        <Google />
        Sign in with Google
      </button>
    </form>
  );
}