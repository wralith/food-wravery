import { ReactElement, ReactNode } from "react";
import Navbar from "../Navigation/Navbar";
import SideMenu from "../Navigation/SideMenu";

export default function Layout({ children } : {children :ReactNode}) {
  
  return (
    <>
    <Navbar />
    <SideMenu />
    <main>{children}</main>
    </>
  )
}