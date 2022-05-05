import { ReactNode } from "react";
import Navbar from "../Navigation/Navbar";
import SideMenu from "../Navigation/SideMenu";
import Footer from "../UI/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>
        <Navbar />
        <SideMenu />
        {children}
        <Footer />
      </main>
    </>
  );
}
