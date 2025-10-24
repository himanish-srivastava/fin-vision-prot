import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Coffee, Home, Car, Heart } from "lucide-react";

const ExpenseAnalyzer = () => {
  const expenses = [
    { category: "Shopping", amount: "₹4,200", icon: ShoppingBag, color: "bg-purple-500/10 text-purple-600", date: "Oct 22" },
    { category: "Food & Dining", amount: "₹3,800", icon: Coffee, color: "bg-amber-500/10 text-amber-600", date: "Oct 21" },
    { category: "Housing", amount: "₹12,000", icon: Home, color: "bg-blue-500/10 text-blue-600", date: "Oct 20" },
    { category: "Transportation", amount: "₹2,100", icon: Car, color: "bg-green-500/10 text-green-600", date: "Oct 19" },
    { category: "Healthcare", amount: "₹1,500", icon: Heart, color: "bg-red-500/10 text-red-600", date: "Oct 18" },
  ];

  const topCategories = [
    { name: "Housing", percentage: 48, amount: "₹12,000" },
    { name: "Shopping", percentage: 17, amount: "₹4,200" },
    { name: "Food", percentage: 15, amount: "₹3,800" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold">Expense Analyzer</h2>
        <p className="text-muted-foreground mt-1">Track and analyze your spending patterns</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="gradient-card shadow-elegant">
          <CardHeader>
            <CardTitle>Top Spending Categories</CardTitle>
            <CardDescription>Your highest expenses this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {topCategories.map((cat, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{cat.name}</span>
                  <span className="text-muted-foreground">{cat.amount}</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-primary transition-all duration-500"
                    style={{ width: `${cat.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-elegant">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest expenses</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {expenses.map((expense, index) => {
                const Icon = expense.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${expense.color}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="font-medium text-sm">{expense.category}</p>
                        <p className="text-xs text-muted-foreground">{expense.date}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="font-semibold">
                      {expense.amount}
                    </Badge>
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

export default ExpenseAnalyzer;
