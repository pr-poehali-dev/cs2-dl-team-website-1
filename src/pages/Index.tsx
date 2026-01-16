import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const players = [
  { nickname: "Awaper", realName: "T1mPro", role: "AWP", iconColor: "text-primary" },
  { nickname: "Geness1s", realName: "Captain", role: "Captain", iconColor: "text-blue-400" },
  { nickname: "20.31", realName: "Rifler", role: "Rifler", iconColor: "text-green-400" },
  { nickname: "Lil_nastusha", realName: "Support", role: "Support", iconColor: "text-purple-400" },
  { nickname: "qwalaz", realName: "Lurker", role: "Lurk", iconColor: "text-red-400" },
];

const matches = [
  { date: "20 Января 2026", tournament: "IEM Katowice 2026", opponent: "Natus Vincere", time: "18:00 МСК", status: "upcoming" },
  { date: "23 Января 2026", tournament: "BLAST Premier Spring", opponent: "FaZe Clan", time: "21:00 МСК", status: "upcoming" },
  { date: "15 Января 2026", tournament: "ESL Pro League", opponent: "Team Liquid", result: "16:14", status: "win" },
  { date: "12 Января 2026", tournament: "PGL Major", opponent: "G2 Esports", result: "13:16", status: "loss" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="https://cdn.poehali.dev/files/IMG_1359.jpeg" 
                alt="DL-Team Logo" 
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div>
                <h1 className="text-3xl font-heading font-bold text-foreground">DL-Team</h1>
                <p className="text-sm text-muted-foreground">Counter-Strike 2 Professional Team</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#players" className="text-foreground hover:text-primary transition-colors font-medium">
                Игроки
              </a>
              <a href="#matches" className="text-foreground hover:text-primary transition-colors font-medium">
                Матчи
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 space-y-24">
        <section className="text-center space-y-6 animate-fade-in">
          <div className="inline-block">
            <Badge variant="outline" className="text-primary border-primary px-4 py-2 text-sm">
              EST. 2025
            </Badge>
          </div>
          <h2 className="text-6xl md:text-7xl font-heading font-bold text-foreground">
            DL-Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Профессиональная киберспортивная команда по Counter-Strike 2
          </p>
          <div className="flex items-center justify-center gap-8 pt-8">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">Игроков</div>
            </div>
          </div>
        </section>

        <section id="players" className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-2">
            <h3 className="text-4xl font-heading font-bold text-foreground">Состав команды</h3>
            <p className="text-muted-foreground">Наши профессиональные игроки</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {players.map((player, index) => (
              <Card
                key={index}
                className="bg-card border-border p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Icon name="User" className={`w-8 h-8 ${player.iconColor}`} />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h4 className="text-2xl font-heading font-bold text-foreground">{player.nickname}</h4>
                    <p className="text-sm text-muted-foreground">{player.realName}</p>
                    <Badge variant="secondary" className="mt-2">
                      {player.role}
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="matches" className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-2">
            <h3 className="text-4xl font-heading font-bold text-foreground">Расписание матчей</h3>
            <p className="text-muted-foreground">Предстоящие и последние игры</p>
          </div>
          <div className="space-y-4 max-w-4xl mx-auto">
            {matches.map((match, index) => (
              <Card
                key={index}
                className={`bg-card border-border p-6 hover:border-primary transition-all duration-300 ${
                  match.status === "upcoming" ? "border-l-4 border-l-primary" : ""
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <Icon
                        name={match.status === "upcoming" ? "Calendar" : match.status === "win" ? "Trophy" : "X"}
                        className={`w-5 h-5 ${
                          match.status === "upcoming"
                            ? "text-primary"
                            : match.status === "win"
                            ? "text-green-400"
                            : "text-red-400"
                        }`}
                      />
                      <span className="text-sm text-muted-foreground">{match.date}</span>
                    </div>
                    <h4 className="text-xl font-heading font-semibold text-foreground">{match.tournament}</h4>
                    <p className="text-foreground flex items-center gap-2">
                      <span className="font-medium">DL-Team</span>
                      <span className="text-muted-foreground">vs</span>
                      <span className="font-medium">{match.opponent}</span>
                    </p>
                  </div>
                  <div className="text-right">
                    {match.status === "upcoming" ? (
                      <div className="space-y-1">
                        <div className="text-2xl font-heading font-bold text-primary">{match.time}</div>
                        <Badge variant="outline" className="text-primary border-primary">
                          Скоро
                        </Badge>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="text-2xl font-heading font-bold text-foreground">{match.result}</div>
                        <Badge
                          variant={match.status === "win" ? "default" : "destructive"}
                          className={match.status === "win" ? "bg-green-600" : ""}
                        >
                          {match.status === "win" ? "Победа" : "Поражение"}
                        </Badge>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-24 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2026 DL-Team. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}