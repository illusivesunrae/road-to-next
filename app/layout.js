export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <header>
          <h1>Hello app</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
