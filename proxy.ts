// proxy.ts
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import aj, { detectBot, shield } from "./lib/arcjet";

// Build your Arcjet client with rules
const validate = aj
  .withRule(
    shield({
      mode: "LIVE", // or "DRY_RUN" while testing
    })
  )
  .withRule(
    detectBot({
      mode: "LIVE",
      allow: ["CATEGORY:SEARCH_ENGINE", "G00G1E_CRAWLER"],
    })
  );

// This replaces `middleware` in Next 16
export async function proxy(request: NextRequest) {
  // 1) Arcjet protection
  const decision = await validate.protect(request);

  if (decision.isDenied()) {
    // You can customize this response however you like
    return NextResponse.json(
      {
        error: "Forbidden",
        // Don't expose full reason in production if you don't want to
        // reason: decision.reason,
      },
      { status: 403 },
    );
  }

  // 2) Better Auth session check
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // 3) Allow request through
  return NextResponse.next();
}

// Same matcher you were using before
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|sign-in|assets).*)"],
};
