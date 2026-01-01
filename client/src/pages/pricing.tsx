import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export default function Pricing() {
  return (
    <div className="container py-20">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold">Simple, Transparent Pricing</h1>
        <p className="text-xl text-muted-foreground">Choose the plan that fits your growth goals. Upgrade anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Free Plan */}
        <Card className="flex flex-col border-muted shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl font-heading">Free</CardTitle>
            <CardDescription>For hobbyists and personal blogs</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="text-4xl font-bold mb-6">$0</div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="bg-primary/10 p-1 rounded-full"><Check className="h-3 w-3 text-primary" /></div>
                <span className="text-sm">Standard Listing</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-primary/10 p-1 rounded-full"><Check className="h-3 w-3 text-primary" /></div>
                <span className="text-sm">Manual Approval (24-72h)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-primary/10 p-1 rounded-full"><Check className="h-3 w-3 text-primary" /></div>
                <span className="text-sm">Basic SEO Exposure</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/submit" className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
              Submit Free
            </Link>
          </CardFooter>
        </Card>

        {/* Pro Plan */}
        <Card className="flex flex-col border-primary shadow-xl relative scale-105 z-10">
          <div className="absolute top-0 inset-x-0 h-2 bg-primary" />
          <CardHeader>
            <div className="text-primary font-bold text-sm mb-2 uppercase tracking-wider">Most Popular</div>
            <CardTitle className="text-2xl font-heading">Pro</CardTitle>
            <CardDescription>For startups and small businesses</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="text-4xl font-bold mb-6">$7 <span className="text-lg text-muted-foreground font-normal">/ one-time</span></div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="bg-primary p-1 rounded-full"><Check className="h-3 w-3 text-white" /></div>
                <span className="text-sm font-medium">Priority Approval (Instant)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-primary p-1 rounded-full"><Check className="h-3 w-3 text-white" /></div>
                <span className="text-sm">Homepage Featured (7 Days)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-primary p-1 rounded-full"><Check className="h-3 w-3 text-white" /></div>
                <span className="text-sm">Dofollow Backlink</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-primary p-1 rounded-full"><Check className="h-3 w-3 text-white" /></div>
                <span className="text-sm">Faster Traffic Growth</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/submit" className={cn(buttonVariants({ className: "bg-primary hover:bg-primary/90" }), "w-full")}>
              Get Pro Access
            </Link>
          </CardFooter>
        </Card>

        {/* Business Plan */}
        <Card className="flex flex-col border-muted shadow-sm hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="text-2xl font-heading">Business</CardTitle>
            <CardDescription>For agencies and high-growth sites</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="text-4xl font-bold mb-6">$19 <span className="text-lg text-muted-foreground font-normal">/ one-time</span></div>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="bg-primary/10 p-1 rounded-full"><Check className="h-3 w-3 text-primary" /></div>
                <span className="text-sm">Instant Approval</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-primary/10 p-1 rounded-full"><Check className="h-3 w-3 text-primary" /></div>
                <span className="text-sm">Homepage Featured (30 Days)</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-primary/10 p-1 rounded-full"><Check className="h-3 w-3 text-primary" /></div>
                <span className="text-sm">Premium Dofollow Backlink</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-primary/10 p-1 rounded-full"><Check className="h-3 w-3 text-primary" /></div>
                <span className="text-sm">Global Promotion</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link href="/submit" className={cn(buttonVariants({ variant: "outline" }), "w-full")}>
              Get Business
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
