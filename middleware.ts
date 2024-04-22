import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"; 
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req:NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient({
        req,
        res
    });
    const { error } = await supabase.auth.getUser();

    if (error) {
        console.error("Error fetching user data:", error);
    }
    return res;
}