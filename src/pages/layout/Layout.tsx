import type React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

type LayoutProps = {
    children: React.ReactNode
}

export default function Layout({children}:LayoutProps){

    

    return (
        <main>
            <Header />

            <section>{children}</section>

            <Footer />
        </main>
    )
}