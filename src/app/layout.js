export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white text-black">
          {children}
        </div>
      </body>
    </html>
  );
}