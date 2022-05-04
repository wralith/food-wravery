import { ReactElement, ReactNode } from "react";
import Navbar from "../Navigation/Navbar";

export default function Layout({ children } : {children :ReactNode}) {
  
  return (
    <>
    <Navbar />
    <main>{children}</main>
    </>
  )
}