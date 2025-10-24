import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import ExpenseAnalyzer from "@/components/ExpenseAnalyzer";
import BudgetTracker from "@/components/BudgetTracker";
import InvestmentVisualizer from "@/components/InvestmentVisualizer";
import AIChatbot from "@/components/AIChatbot";
import Gamification from "@/components/Gamification";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "expenses":
        return <ExpenseAnalyzer />;
      case "budget":
        return <BudgetTracker />;
      case "investments":
        return <InvestmentVisualizer />;
      case "chatbot":
        return <AIChatbot />;
      case "rewards":
        return <Gamification />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
