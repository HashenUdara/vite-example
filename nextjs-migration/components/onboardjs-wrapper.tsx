"use client";

import type { PropsWithChildren } from "react";
import { OnboardingProvider } from "@onboardjs/react";
import { steps } from "@/lib/steps";
import type { DataPersistFn } from "@onboardjs/core";

export function OnboardJSWrapper({ children }: PropsWithChildren) {
  const handlePersist: DataPersistFn = async (context, currentStepId) => {
    const formData = new FormData();
    formData.append("action", "persist");
    formData.append("context", JSON.stringify(context));
    formData.append("currentStepId", String(currentStepId));
    
    try {
      await fetch("/api/onboarding", {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      console.error("Error persisting data:", error);
    }
  };

  const handleLoad = async () => {
    const formData = new FormData();
    formData.append("action", "load");
    
    try {
      const response = await fetch("/api/onboarding", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      return result.data || {};
    } catch (error) {
      console.error("Error loading data:", error);
      return {};
    }
  };

  return (
    <OnboardingProvider
      steps={steps}
      customOnDataLoad={handleLoad}
      customOnDataPersist={handlePersist}
    >
      {children}
    </OnboardingProvider>
  );
}
