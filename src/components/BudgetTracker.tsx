import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle2, TrendingDown } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const BudgetTracker = () => {
  const budgets = [
    { category: "Food & Dining", spent: 3800, limit: 5000, status: "healthy" },
    { category: "Shopping", spent: 4200, limit: 4000, status: "over" },
    { category: "Entertainment", spent: 1200, limit: 2000, status: "healthy" },
    { category: "Transportation", spent: 2100, limit: 3000, status: "healthy" },
  ];

  const getProgressColor = (status: string) => {
    if (status === "over") return "bg-destructive";
    if (status === "warning") return "bg-warning";
    return "bg-success";
  };

  const totalBudget = budgets.reduce((acc, b) => acc + b.limit, 0);
  const totalSpent = budgets.reduce((acc, b) => acc + b.spent, 0);
  const overBudgetCount = budgets.filter(b => b.status === "over").length;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold">Budget Tracker</h2>
        <p className="text-muted-foreground mt-1">Monitor your monthly spending limits</p>
      </div>

      {overBudgetCount > 0 && (
        <Alert className="border-destructive/50 bg-destructive/10">
          <AlertCircle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-destructive">
            You're over budget in {overBudgetCount} {overBudgetCount === 1 ? "category" : "categories"}. 
            Consider adjusting your spending.
          </AlertDescription>
        </Alert>
      )}

      <Card className="gradient-card shadow-elegant">
        <CardHeader>
          <CardTitle>Overall Budget</CardTitle>
          <CardDescription>
            ₹{totalSpent.toLocaleString()} / ₹{totalBudget.toLocaleString()}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={(totalSpent / totalBudget) * 100} className="h-3" />
          <p className="text-sm text-muted-foreground mt-2">
            {((totalSpent / totalBudget) * 100).toFixed(1)}% of monthly budget used
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        {budgets.map((budget, index) => {
          const percentage = (budget.spent / budget.limit) * 100;
          const isOver = budget.status === "over";
          
          return (
            <Card key={index} className="gradient-card shadow-elegant">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-base">{budget.category}</CardTitle>
                    <CardDescription className="mt-1">
                      ₹{budget.spent.toLocaleString()} / ₹{budget.limit.toLocaleString()}
                    </CardDescription>
                  </div>
                  {isOver ? (
                    <AlertCircle className="h-5 w-5 text-destructive" />
                  ) : (
                    <CheckCircle2 className="h-5 w-5 text-success" />
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <Progress 
                  value={Math.min(percentage, 100)} 
                  className="h-2"
                />
                <div className="flex items-center justify-between mt-2">
                  <span className={`text-sm font-medium ${isOver ? "text-destructive" : "text-success"}`}>
                    {percentage.toFixed(1)}%
                  </span>
                  {!isOver && (
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <TrendingDown className="h-3 w-3" />
                      ₹{(budget.limit - budget.spent).toLocaleString()} left
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetTracker;
