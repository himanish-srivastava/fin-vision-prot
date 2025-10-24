import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, DollarSign, PieChart, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const InvestmentVisualizer = () => {
  const sipData = [
    { month: "Jan", investment: 5000, value: 5050 },
    { month: "Feb", investment: 10000, value: 10200 },
    { month: "Mar", investment: 15000, value: 15500 },
    { month: "Apr", investment: 20000, value: 21000 },
    { month: "May", investment: 25000, value: 26800 },
    { month: "Jun", investment: 30000, value: 32900 },
  ];

  const portfolio = [
    { type: "Equity Funds", amount: 15000, returns: "+12.5%", color: "bg-blue-500" },
    { type: "Debt Funds", amount: 8000, returns: "+6.2%", color: "bg-green-500" },
    { type: "Gold", amount: 5000, returns: "+8.1%", color: "bg-yellow-500" },
    { type: "Liquid Funds", amount: 4900, returns: "+4.8%", color: "bg-purple-500" },
  ];

  const totalInvestment = portfolio.reduce((acc, p) => acc + p.amount, 0);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold">Investment Visualizer</h2>
        <p className="text-muted-foreground mt-1">Track your SIP and portfolio performance</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="gradient-card shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-success" />
              SIP Progress
            </CardTitle>
            <CardDescription>Your systematic investment plan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <p className="text-xs text-muted-foreground">Total Invested</p>
                  <p className="text-xl font-bold mt-1">₹30,000</p>
                </div>
                <div className="p-3 rounded-lg bg-success/5 border border-success/20">
                  <p className="text-xs text-muted-foreground">Current Value</p>
                  <p className="text-xl font-bold mt-1 text-success">₹32,900</p>
                </div>
              </div>

              <div className="space-y-2">
                {sipData.slice(-3).map((data, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-muted/30">
                    <span className="text-sm font-medium">{data.month}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground">₹{data.investment.toLocaleString()}</span>
                      <Badge variant="secondary" className="text-success">
                        ₹{data.value.toLocaleString()}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Expected Returns</span>
                  <Badge className="bg-gradient-accent">+9.7% CAGR</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5 text-primary" />
              Portfolio Distribution
            </CardTitle>
            <CardDescription>Total: ₹{totalInvestment.toLocaleString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {portfolio.map((item, index) => {
                const percentage = ((item.amount / totalInvestment) * 100).toFixed(1);
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${item.color}`} />
                        <span className="text-sm font-medium">{item.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {item.returns}
                        </Badge>
                        <span className="text-sm font-semibold">₹{item.amount.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{percentage}% of portfolio</span>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvestmentVisualizer;
