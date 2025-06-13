"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { pageview } from "../lib/gtag"; // Adjust the import path as necessary

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    pageview(pathname);
  }, [pathname]);

  return null;
}
