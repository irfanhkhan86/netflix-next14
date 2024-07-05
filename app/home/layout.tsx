// import { getServerSession } from "next-auth";
// import { ReactNode } from "react";
// import { authOptions } from "../utils/auth";
// import { redirect } from "next/navigation";
// export default async function HomeLayout({ children }: { children: ReactNode }) {
//     const session = await getServerSession(authOptions)
//     if(!session) {
//         return redirect('/login')
//     }
//     return { children };
// }
import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { authOptions } from "../utils/auth";
import { redirect } from "next/navigation";
import Navbar from "../components/Navbar";
import { Main } from "next/document";

export default async function HomeLayout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect('/login');
  }

  // Directly return the children prop (it's already ReactNode type)
  return (
        <>
        <Navbar />
        <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
        </main>
        </>
  )
}
