import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    console.log("Debugging Route:", request.url); // Log all requests
    return NextResponse.json({ message: "Debug: Route not found", requestedPath: request.url });
}
