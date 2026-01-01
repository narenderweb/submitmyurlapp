import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Loader2 } from "lucide-react";
import { useState } from "react";

export default function Status() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { status: "pending" | "approved" | "rejected"; msg: string }>(null);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    setResult(null);

    // Mock API
    setTimeout(() => {
      setLoading(false);
      // Deterministic mock based on length of query just for demo variety
      if (query.length % 3 === 0) {
        setResult({ status: "approved", msg: "Great news! Your website is live and approved." });
      } else if (query.length % 3 === 1) {
        setResult({ status: "pending", msg: "Your submission is currently under review by our team." });
      } else {
        setResult({ status: "rejected", msg: "Unfortunately, your submission was not approved. Check your email for details." });
      }
    }, 1000);
  };

  return (
    <div className="container py-20 max-w-2xl mx-auto">
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-4xl font-heading font-bold">Check Submission Status</h1>
        <p className="text-muted-foreground text-lg">Enter your email address or website URL to check the status of your submission.</p>
      </div>

      <Card>
        <CardContent className="p-8">
          <form onSubmit={handleCheck} className="flex gap-4 mb-8">
            <Input 
              placeholder="Enter Website URL or Email..." 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-12 text-lg"
            />
            <Button type="submit" size="lg" disabled={loading || !query} className="h-12 w-32">
              {loading ? <Loader2 className="animate-spin" /> : "Check"}
            </Button>
          </form>

          {result && (
            <div className={`p-6 rounded-lg border ${
              result.status === "approved" ? "bg-green-50 border-green-200 text-green-800" :
              result.status === "pending" ? "bg-yellow-50 border-yellow-200 text-yellow-800" :
              "bg-red-50 border-red-200 text-red-800"
            }`}>
              <div className="font-bold text-xl mb-2 capitalize">{result.status}</div>
              <p>{result.msg}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
