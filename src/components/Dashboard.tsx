import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet, TrendingUp, Target, Trophy } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Balance",
      value: "₹42,580",
      change: "+12.5%",
      icon: Wallet,
      trend: "up",
    },
    {
      title: "Monthly Expenses",
      value: "₹18,240",
      change: "-5.2%",
      icon: TrendingUp,
      trend: "down",
    },
    {
      title: "Savings Goal",
      value: "72%",
      change: "+8%",
      icon: Target,
      trend: "up",
    },
    {
      title: "Reward Points",
      value: "1,250",
      change: "+150",
      icon: Trophy,
      trend: "up",
    },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Welcome back, Rohan
          </h1>
          <p className="text-muted-foreground mt-1">
            Here's your financial overview for October 2025
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card
              key={index}
              className="gradient-card shadow-elegant hover:shadow-lg transition-all duration-300 border-border/50"
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="p-2 rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p
                  className={`text-xs mt-1 font-medium ${
                    stat.trend === "up" ? "text-success" : "text-accent"
                  }`}
                >
                  {stat.change} from last month
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
