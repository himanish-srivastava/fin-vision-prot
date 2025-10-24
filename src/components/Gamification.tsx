import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Target, Award, Zap, TrendingUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Gamification = () => {
  const badges = [
    { name: "Budget Master", icon: Target, earned: true, color: "text-blue-500" },
    { name: "Savings Hero", icon: Trophy, earned: true, color: "text-yellow-500" },
    { name: "Smart Investor", icon: TrendingUp, earned: false, color: "text-green-500" },
    { name: "Streak Champion", icon: Zap, earned: true, color: "text-purple-500" },
  ];

  const leaderboard = [
    { rank: 1, name: "You (Rohan)", points: 1250, badge: "🥇" },
    { rank: 2, name: "Priya S.", points: 1180, badge: "🥈" },
    { rank: 3, name: "Arjun K.", points: 1050, badge: "🥉" },
    { rank: 4, name: "Neha M.", points: 980, badge: "4️⃣" },
    { rank: 5, name: "Rahul P.", points: 920, badge: "5️⃣" },
  ];

  const challenges = [
    { title: "Save ₹5000 this month", progress: 72, reward: "+100 pts" },
    { title: "Track 30 expenses", progress: 85, reward: "+50 pts" },
    { title: "Complete financial quiz", progress: 100, reward: "+75 pts" },
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold">Rewards & Achievements</h2>
        <p className="text-muted-foreground mt-1">Track your progress and compete with others</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="gradient-card shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              Your Badges
            </CardTitle>
            <CardDescription>Achievements unlocked: 3/4</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div
                    key={index}
                    className={`p-4 rounded-lg text-center transition-all ${
                      badge.earned
                        ? "bg-gradient-primary shadow-glow"
                        : "bg-muted/30 opacity-50"
                    }`}
                  >
                    <Icon className={`h-8 w-8 mx-auto mb-2 ${badge.earned ? "text-white" : badge.color}`} />
                    <p className={`text-xs font-medium ${badge.earned ? "text-white" : "text-muted-foreground"}`}>
                      {badge.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-warning" />
              Leaderboard
            </CardTitle>
            <CardDescription>Top performers this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {leaderboard.map((entry, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    entry.rank === 1 ? "bg-gradient-primary text-white" : "bg-muted/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{entry.badge}</span>
                    <span className={`font-medium text-sm ${entry.rank === 1 ? "text-white" : ""}`}>
                      {entry.name}
                    </span>
                  </div>
                  <Badge variant={entry.rank === 1 ? "secondary" : "outline"}>
                    {entry.points} pts
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="gradient-card shadow-elegant">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-accent" />
            Active Challenges
          </CardTitle>
          <CardDescription>Complete challenges to earn rewards</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {challenges.map((challenge, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{challenge.title}</span>
                  <Badge variant="secondary" className="bg-gradient-accent">
                    {challenge.reward}
                  </Badge>
                </div>
                <Progress value={challenge.progress} className="h-2" />
                <span className="text-xs text-muted-foreground">{challenge.progress}% complete</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Gamification;
