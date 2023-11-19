import { useState } from "react";

import { useSupabase } from "@/lib/context/SupabaseProvider";
import { useToast } from "@/lib/hooks/useToast";

interface OAuthOptions {
    queryParams?: {
      [key: string]: string;
    };
    // Add any other provider-specific options here
  }

export const useOAuthLogin = (
  provider: "google" | "apple" | "twitter" | "facebook" | "azure" | "github"
): {
  signInWithOAuth: () => Promise<void>;
  isPending: boolean;
} => {
  const { supabase } = useSupabase();

  const { publish } = useToast();

  const [isPending, setIsPending] = useState(false);

  const signInWithOAuth = async () => {
    setIsPending(true);
    const options: OAuthOptions = {};

  

    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options,
    });

    setIsPending(false);
    if (error) {
      publish({
        variant: "danger",
        text: "An error occurred ",
      });
    }
  };

  return {
    signInWithOAuth,
    isPending,
  };
};
