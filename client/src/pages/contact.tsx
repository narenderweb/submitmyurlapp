import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="container py-20 max-w-xl mx-auto">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-heading font-bold">Contact Us</h1>
        <p className="text-muted-foreground text-lg">Have questions about our service? We're here to help.</p>
      </div>

      <Card>
        <CardContent className="p-8 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="How can we help?" className="min-h-[150px]" />
          </div>
          <Button className="w-full" size="lg">Send Message</Button>
        </CardContent>
      </Card>
    </div>
  );
}
