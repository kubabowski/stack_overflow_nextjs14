import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/api/webhooks(.*)",
    "/question/id",
    "/collection",
    "/ask-question",
    "/tags",
    "/tags/:id",
    "profile/:id",
    "/community",
    "/jobs",
  ],
  ignoredRoutes: ["/api/webhook", "/api/chatgpt"],
});

export const config = {
  // matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
  matcher: [
    // Don't handle HMR requests for the dev server we rewrite to
    "/((?!test/_next/webpack-hmr).*)",
    "/((?!.+\\.[\\w]+$|_next).*)",
    "/",
    "/(api|trpc)(.*)",
    "/((?!ws$).*)",
  ],
};
