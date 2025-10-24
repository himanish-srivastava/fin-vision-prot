import { LayoutDashboard, PieChart, Wallet, TrendingUp, MessageSquare, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar = ({ activeTab, setActiveTab }: SidebarProps) => {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "expenses", label: "Expenses", icon: PieChart },
    { id: "budget", label: "Budget", icon: Wallet },
    { id: "investments", label: "Investments", icon: TrendingUp },
    { id: "chatbot", label: "AI Mentor", icon: MessageSquare },
    { id: "rewards", label: "Rewards", icon: Trophy },
  ];

  return (
    <aside className="w-64 bg-card border-r border-border/50 p-6 space-y-6 animate-fade-in">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          FinVision
        </h2>
        <p className="text-xs text-muted-foreground">Financial Wellness Platform</p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant={isActive ? "default" : "ghost"}
              className={`w-full justify-start gap-3 ${
                isActive ? "gradient-primary shadow-md" : "hover:bg-muted"
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon className="h-4 w-4" />
              <span>{item.label}</span>
            </Button>
          );
        })}
      </nav>

      <div className="pt-6 border-t border-border/50">
        <div className="p-4 rounded-lg bg-gradient-accent text-white space-y-2">
          <p className="text-sm font-semibold">💡 Pro Tip</p>
          <p className="text-xs opacity-90">
            Set up auto-categorization for your expenses to save time!
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
