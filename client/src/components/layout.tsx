import { Link, useLocation } from "wouter";
import { Button, buttonVariants } from "@/components/ui/button";
import { CheckCircle, Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const isAdmin = location.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
              <div className="bg-primary rounded-md p-1.5">
                <Globe className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-foreground">
                SubmitMyURL
              </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">Home</Link>
            <Link href="/pricing" className="text-sm font-medium transition-colors hover:text-primary">Pricing</Link>
            <Link href="/features" className="text-sm font-medium transition-colors hover:text-primary">Features</Link>
            <Link href="/status" className="text-sm font-medium transition-colors hover:text-primary">Check Status</Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">Contact</Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/admin/login" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Login
            </Link>
            <Link href="/submit" className={buttonVariants()}>
              Submit Website
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-lg font-medium">Home</Link>
                <Link href="/pricing" className="text-lg font-medium">Pricing</Link>
                <Link href="/features" className="text-lg font-medium">Features</Link>
                <Link href="/status" className="text-lg font-medium">Check Status</Link>
                <Link href="/contact" className="text-lg font-medium">Contact</Link>
                <Link href="/submit" className={buttonVariants({ className: "w-full" })}>
                  Submit Website
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="border-t bg-muted/30">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-primary rounded-md p-1.5">
                  <Globe className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-heading font-bold text-lg">SubmitMyURL</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The global platform for website promotion and SEO growth. Get high-quality backlinks and organic traffic.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-semibold mb-4">Platform</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/submit" className="hover:text-primary">Submit URL</Link></li>
                <li><Link href="/pricing" className="hover:text-primary">Pricing Plans</Link></li>
                <li><Link href="/status" className="hover:text-primary">Check Status</Link></li>
                <li><Link href="/features" className="hover:text-primary">Features</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold mb-4">Legal</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link href="/terms" className="hover:text-primary">Terms of Service</Link></li>
                <li><Link href="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/admin/login" className="hover:text-primary">Admin Login</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold mb-4">Trust</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> 100% Secure</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> No Spam Policy</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Manual Review</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SubmitMyURL. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
