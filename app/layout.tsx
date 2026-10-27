import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'Student Voice | ATS Abu Dhabi Boys',description:'Your student council hub: clubs, suggestions, council contacts, activities, and study planning.',icons:{icon:'/assets/actvet-ats-logos.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" suppressHydrationWarning><body>{children}</body></html>}
