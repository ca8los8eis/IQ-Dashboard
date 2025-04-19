import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-6 space-y-6">
      {/* Hero Section */}
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">Professional Value Investor Dashboard</h1>
        <p className="text-lg text-gray-600">Driven by Data. Guided by Wisdom.</p>
        <blockquote className="italic text-gray-700 mt-4">“Price is what you pay. Value is what you get.” – Warren Buffett</blockquote>
      </section>

      {/* Dashboard Overview */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Assets Under Management</h2>
            <p className="text-2xl font-bold mt-2">$12.4M</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Portfolio vs S&P 500</h2>
            <p className="mt-2 text-gray-500">Chart Placeholder</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">Stock Market to GDP</h2>
            <p className="mt-2 text-gray-500">Map Placeholder</p>
          </CardContent>
        </Card>
      </section>

      {/* Guru Moves */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Top Gurus & Their Latest Moves</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent>
              <h3 className="font-semibold">Warren Buffett</h3>
              <p className="text-sm text-gray-500">Bought: AAPL, Sold: USB</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="font-semibold">Seth Klarman</h3>
              <p className="text-sm text-gray-500">Bought: QCOM, Sold: EBAY</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h3 className="font-semibold">Joel Greenblatt</h3>
              <p className="text-sm text-gray-500">Bought: GOOG, Sold: AMZN</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quotes */}
      <section className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Guru Quotes</h2>
        <blockquote className="text-gray-600 italic">“Be fearful when others are greedy and greedy when others are fearful.” – Warren Buffett</blockquote>
        <blockquote className="text-gray-600 italic mt-2">“The big money is not in the buying or selling, but in the waiting.” – Charlie Munger</blockquote>
      </section>
    </div>
  );
}
