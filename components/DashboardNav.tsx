"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Button from "@/components/Button";
import { LogOut, Ticket } from "lucide-react";

export default function DashboardNav({
  fullName,
  roleLabel,
}: {
  fullName: string;
  roleLabel: string;
}) {
  const router = useRouter();
  const supabase = createClient();

  async function signOut() {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-40 border-b border-steelLight bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-paper">
            <Ticket size={16} strokeWidth={2.25} />
          </span>
          <div>
            <p className="font-display text-base font-semibold leading-tight tracking-tight">MessSwap</p>
            <p className="text-xs text-steel">
              {fullName} · {roleLabel}
            </p>
          </div>
        </div>
        <Button variant="ghost" onClick={signOut} className="gap-1.5">
          <LogOut size={15} />
          Sign out
        </Button>
      </div>
    </header>
  );
}
