import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Globe2, Rocket, Search, ShieldCheck, Zap } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export default function Features() {
  return (
    <div className="container py-20">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold">Powerful Features for Growth</h1>
        <p className="text-xl text-muted-foreground">Everything you need to boost your website's visibility and authority.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {[
          {
            icon: Search,
            title: "Search Engine Submission",
            desc: "We submit your URL to over 500+ search engines and directories including Google, Bing, Yahoo, and DuckDuckGo."
          },
          {
            icon: Globe2,
            title: "Global Reach",
            desc: "Your website gets promoted to a worldwide audience, helping you reach users in new markets and regions."
          },
          {
            icon: BarChart3,
            title: "Traffic Analytics",
            desc: "Track the performance of your submission and see real-time clicks and visitors coming to your site."
          },
          {
            icon: ShieldCheck,
            title: "Spam Protection",
            desc: "Our rigorous vetting process ensures you are only listed alongside high-quality, legitimate websites."
          },
          {
            icon: Rocket,
            title: "SEO Boost",
            desc: "Get high-authority dofollow backlinks that signal to search engines that your site is trustworthy."
          },
          {
            icon: Zap,
            title: "Instant Indexing",
            desc: "Our premium plans use rapid-indexing protocols to get your site crawled faster than standard submission."
          }
        ].map((feature, i) => (
          <Card key={i} className="hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
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

      {/* CTA Section */}
      <div className="bg-slate-950 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Start Your Growth Journey</h2>
          <p className="text-slate-300 text-lg">
            Join 50,000+ website owners who trust SubmitMyURL for their SEO strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/submit" className={cn(buttonVariants({ size: "lg" }), "h-14 px-8 text-lg font-semibold w-full sm:w-auto bg-primary hover:bg-primary/90 text-white")}>
              Submit Website Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
