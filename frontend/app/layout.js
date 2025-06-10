
import "./globals.css";


export const metadata = {
  title: "Event Management Platform",
  description: "by Tere Naam Coders",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
