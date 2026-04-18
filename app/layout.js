"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-gray-100">
        <Provider store={store}>
          <SessionProvider>{children}</SessionProvider>
        </Provider>
      </body>
    </html>
  );
}