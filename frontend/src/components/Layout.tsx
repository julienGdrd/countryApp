import Header from "./Header";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
  }

export default function Layout({ children }: LayoutProps){
    return(
        <>
        <Header/>
        <main className="main">{children}</main>
        </>
    )
}