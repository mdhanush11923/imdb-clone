'use client'

import { ThemeProvider } from 'next-themes'
import React from 'react'

export default function Providers({children, ...props}) {
   const [mounted, setMounted] = React.useState(false);

   // Ensure the component is mounted to avoid SSR issues with `window` usage
   React.useEffect(() => {
     setMounted(true);
   }, []);

   // If not mounted, return null to prevent rendering until client-side hydration is complete
   if (!mounted) return null;
   
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <div className="dark:text-gray-200 dark:bg-gray-700 text-gray-700 transition-colors duration-500 min-h-screen select-none">
        {children}
      </div>
    </ThemeProvider>
  );
}
