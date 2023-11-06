"use client";
import Navbar from '@/components/navbar';
import Home from '@/components/home';
import { QueryClient, QueryClientProvider } from "react-query";

export default function Page() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
          <div>
            <Navbar />
            <Home />
          </div>
    </QueryClientProvider>
  );
}
