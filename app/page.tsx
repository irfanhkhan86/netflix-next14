import { getServerSession } from "next-auth"; // Add semicolon
import { authOptions } from "./utils/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession({authOptions}); // Corrected call

if (!session) {
  return redirect ("/login")
} else {
  return redirect ("/home")
}

};
