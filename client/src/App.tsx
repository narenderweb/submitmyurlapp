import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Layout } from "@/components/layout";

import Home from "@/pages/home";
import Submit from "@/pages/submit";
import Pricing from "@/pages/pricing";
import Features from "@/pages/features";
import Contact from "@/pages/contact";
import Status from "@/pages/status";
import AdminLogin from "@/pages/admin-login";
import AdminDashboard from "@/pages/admin-dashboard";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/submit" component={Submit} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/features" component={Features} />
        <Route path="/contact" component={Contact} />
        <Route path="/status" component={Status} />
        
        <Route path="/admin/login" component={AdminLogin} />
        <Route path="/admin/dashboard" component={AdminDashboard} />

        {/* Static pages usually just text */}
        <Route path="/terms">Terms of Service Placeholder</Route>
        <Route path="/privacy">Privacy Policy Placeholder</Route>
        
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
