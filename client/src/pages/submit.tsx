import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Rocket, ShieldCheck, Zap, Globe2 } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  url: z.string().url("Please enter a valid URL including http:// or https://"),
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(3, "Website name must be at least 3 characters"),
  description: z.string().min(20, "Please provide a description of at least 20 characters"),
  plan: z.enum(["free", "pro", "business"]),
  honeypot: z.string().optional()
});

export default function Submit() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      email: "",
      name: "",
      description: "",
      plan: "free",
      honeypot: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (values.honeypot) return; // Spam trap
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.scrollTo(0, 0);
      toast({
        title: "Submission Received",
        description: "Your website has been successfully submitted for review.",
      });
    }, 1500);
  }

  if (isSuccess) {
    return (
      <div className="container py-20 max-w-2xl mx-auto text-center space-y-8">
        <div className="mx-auto w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
          <ShieldCheck className="w-12 h-12" />
        </div>
        <h1 className="text-4xl font-heading font-bold text-foreground">Submission Successful!</h1>
        <div className="bg-card border rounded-lg p-8 shadow-sm text-left space-y-4">
          <p className="text-lg">Thank you for submitting your website to SubmitMyURL.</p>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li>Free plan approval takes 24–72 hours.</li>
            <li>You will receive an email confirmation once approved.</li>
            <li>If you chose a paid plan, please complete payment in the email sent to you to activate instantly.</li>
          </ul>
        </div>
        <div className="flex gap-4 justify-center">
          <Link href="/" className={cn(buttonVariants({ variant: "outline" }))}>
            Return Home
          </Link>
          <Link href="/status" className={cn(buttonVariants())}>
            Check Status
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-12 md:py-20 max-w-4xl mx-auto">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-tight">Submit Your Website</h1>
        <p className="text-xl text-muted-foreground">Join our global directory and start getting traffic today.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Website Details</CardTitle>
              <CardDescription>Enter your website information accurately for the best results.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Honeypot - hidden */}
                  <FormField
                    control={form.control}
                    name="honeypot"
                    render={({ field }) => (
                      <FormItem className="hidden">
                        <FormControl><Input {...field} /></FormControl>
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website Name</FormLabel>
                          <FormControl>
                            <Input placeholder="My Awesome Startup" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="url"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="you@company.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Short Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe your website, its purpose, and target audience..." 
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="plan"
                    render={({ field }) => (
                      <FormItem className="space-y-4">
                        <FormLabel>Select Plan</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                          >
                            <FormItem>
                              <FormLabel className="[&:has([data-state=checked])>div]:border-primary [&:has([data-state=checked])>div]:bg-primary/5 cursor-pointer">
                                <FormControl>
                                  <RadioGroupItem value="free" className="sr-only" />
                                </FormControl>
                                <div className="border-2 rounded-lg p-4 hover:border-primary/50 transition-colors h-full">
                                  <div className="font-bold text-lg mb-1">Free</div>
                                  <div className="text-2xl font-bold mb-2">$0</div>
                                  <p className="text-xs text-muted-foreground">Standard listing, manual approval (72h).</p>
                                </div>
                              </FormLabel>
                            </FormItem>

                            <FormItem>
                              <FormLabel className="[&:has([data-state=checked])>div]:border-primary [&:has([data-state=checked])>div]:bg-primary/5 cursor-pointer">
                                <FormControl>
                                  <RadioGroupItem value="pro" className="sr-only" />
                                </FormControl>
                                <div className="border-2 rounded-lg p-4 hover:border-primary/50 transition-colors h-full relative overflow-hidden">
                                  <div className="absolute top-0 right-0 bg-accent text-accent-foreground text-[10px] font-bold px-2 py-0.5 rounded-bl">POPULAR</div>
                                  <div className="font-bold text-lg mb-1 text-primary">Pro</div>
                                  <div className="text-2xl font-bold mb-2">$7</div>
                                  <p className="text-xs text-muted-foreground">Priority approval, featured 7 days, dofollow link.</p>
                                </div>
                              </FormLabel>
                            </FormItem>

                            <FormItem>
                              <FormLabel className="[&:has([data-state=checked])>div]:border-primary [&:has([data-state=checked])>div]:bg-primary/5 cursor-pointer">
                                <FormControl>
                                  <RadioGroupItem value="business" className="sr-only" />
                                </FormControl>
                                <div className="border-2 rounded-lg p-4 hover:border-primary/50 transition-colors h-full">
                                  <div className="font-bold text-lg mb-1">Business</div>
                                  <div className="text-2xl font-bold mb-2">$19</div>
                                  <p className="text-xs text-muted-foreground">Instant approval, featured 30 days, max exposure.</p>
                                </div>
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Processing..." : "Submit Website"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-muted/30">
            <CardHeader>
              <CardTitle className="text-lg">Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <p>To ensure high quality, we manually review all free submissions. Please follow these rules:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>No adult, gambling, or illegal content.</li>
                <li>Site must be fully functional (no "under construction").</li>
                <li>Description must be in English.</li>
                <li>Do not submit the same URL multiple times.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="flex items-center gap-2 text-primary font-bold">
                <Zap className="h-5 w-5" />
                Why Go Pro?
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <p>Skip the waiting line and get instant SEO benefits.</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" /> Auto-Approval
                </li>
                <li className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-primary" /> Featured Placement
                </li>
                <li className="flex items-center gap-2">
                  <Globe2 className="h-4 w-4 text-primary" /> Dofollow Backlink
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
