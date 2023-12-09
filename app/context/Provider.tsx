'use client'
import React from 'react';
import {ThemeProvider} from "next-themes";
import Lines from "@/components/Lines";
import Header from "@/components/Header";
import ToasterContext from "@/app/context/ToastContext";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

interface Props {
    children:React.ReactNode;
}
const Providers = ({children}:Props) => {
    return (
        <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="dark"
        >
            <Lines />
            <Header />
            <ToasterContext />
            {children}
            <Footer />
            <ScrollToTop />
        </ThemeProvider>
    );
};
export default Providers;