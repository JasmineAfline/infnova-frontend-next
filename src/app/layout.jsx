import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "INFNOVA Academy",
  description: "Learn in-demand tech skills with industry projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}