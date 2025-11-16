import { NextRequest, NextResponse } from "next/server";
import { inMemoryDB } from "@/lib/in-memory-db";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const action = formData.get("action");

    if (action === "persist") {
      const context = formData.get("context");
      console.log(context);

      if (context) {
        inMemoryDB["onboardingContext"] = JSON.parse(context as string);
        console.log("persisted_data", inMemoryDB);
      }
      return NextResponse.json({ success: true });
    }

    if (action === "load") {
      const data = inMemoryDB["onboardingContext"] || {};
      console.log("load_data", inMemoryDB);
      return NextResponse.json({ data });
    }

    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("Error in onboarding API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
