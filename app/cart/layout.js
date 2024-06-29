import "../globals.css";
import Link from "next/link";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <p className="title">현대카드 무이자 이벤트 중!!</p>
        {children}
      </body>
    </html>
  );
}
