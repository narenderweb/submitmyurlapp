import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Check, Globe2, Rocket, Search, ShieldCheck, Zap } from "lucide-react";
import heroBg from "@assets/generated_images/global_digital_network_connection_background_for_saas_hero.png";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950 pt-16 pb-32 md:pt-24 md:pb-48">
        <div className="absolute inset-0 z-0 opacity-40">
           <img 
            src={heroBg} 
            alt="Global Digital Network" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/60 to-slate-950/90" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary-foreground backdrop-blur-md mb-6">
                <Rocket className="mr-2 h-4 w-4 text-accent" />
                Global Website Promotion Platform
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight leading-tight">
                Get High-Quality <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Backlinks</span> & Traffic
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
            >
              Submit your website URL to our global network. Boost your SEO, increase organic traffic, and get discovered by millions of users worldwide.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Link href="/submit" className={cn(buttonVariants({ size: "lg" }), "h-14 px-8 text-lg w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/25")}>
                Submit Website Free <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/features" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-14 px-8 text-lg w-full sm:w-auto border-slate-700 text-white hover:bg-slate-800 hover:text-white bg-transparent backdrop-blur-sm")}>
                How it Works
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="container -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card shadow-xl border-none">
            <CardContent className="flex items-center p-6 space-x-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Globe2 className="h-8 w-8 text-primary" />
              </div>
              <div>
                <p className="text-3xl font-bold font-heading">50M+</p>
                <p className="text-sm text-muted-foreground">Global Reach</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-xl border-none">
            <CardContent className="flex items-center p-6 space-x-4">
              <div className="p-3 bg-accent/10 rounded-full">
                <Zap className="h-8 w-8 text-accent" />
              </div>
              <div>
                <p className="text-3xl font-bold font-heading">24h</p>
                <p className="text-sm text-muted-foreground">Fast Approval</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card shadow-xl border-none">
            <CardContent className="flex items-center p-6 space-x-4">
              <div className="p-3 bg-purple-500/10 rounded-full">
                <ShieldCheck className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <p className="text-3xl font-bold font-heading">100%</p>
                <p className="text-sm text-muted-foreground">Safe & Secure</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Grid */}
      <section className="container py-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">Why Submit Your URL?</h2>
          <p className="text-muted-foreground text-lg">Our platform is designed to give your website the visibility it deserves through strategic placement and SEO optimization.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Search,
              title: "Submit URL to Search Engines",
              desc: "We ensure your site is indexed by major search engines including Google, Bing, and Yahoo."
            },
            {
              icon: Globe2,
              title: "Get Free Backlinks",
              desc: "Earn high-quality dofollow backlinks that improve your domain authority and search rankings."
            },
            {
              icon: BarChart3,
              title: "Increase Website Traffic",
              desc: "Get real organic visitors from our network of partner sites and directories worldwide."
            },
            {
              icon: ShieldCheck,
              title: "Anti-Scam Protection",
              desc: "We manually verify submissions to ensure a clean, safe, and high-quality link environment."
            },
            {
              icon: Rocket,
              title: "Website Promotion Free",
              desc: "Start with our generous free tier and upgrade only when you need more power."
            },
            {
              icon: Zap,
              title: "Instant Activation",
              desc: "Choose a premium plan for instant approval and immediate exposure on our homepage."
            }
          ].map((feature, i) => (
            <Card key={i} className="group hover:shadow-lg transition-all duration-300 border-muted/60">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container">
        <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 text-center text-primary-foreground relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">Ready to boost your traffic?</h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl">
              Join thousands of website owners who have successfully promoted their content with SubmitMyURL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/submit" className={cn(buttonVariants({ size: "lg", variant: "secondary" }), "h-14 px-8 text-lg font-semibold w-full sm:w-auto")}>
                Submit Website Now
              </Link>
              <Link href="/pricing" className={cn(buttonVariants({ size: "lg", variant: "outline" }), "h-14 px-8 text-lg bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 w-full sm:w-auto")}>
                View Pricing
              </Link>
            </div>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
      </section>
    </div>
  );
}
