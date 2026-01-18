import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const players = [
  { nickname: "T1mPro", realName: "Awp", role: "AWP", iconColor: "text-primary" },
  { nickname: "Geness1s", realName: "Captain", role: "Captain", iconColor: "text-blue-400" },
  { nickname: "20.31", realName: "Rifler", role: "Rifler", iconColor: "text-green-400" },
  { nickname: "LIL_Nastuysha", realName: "Support", role: "Support", iconColor: "text-purple-400" },
  { nickname: "qwalaz", realName: "Lurker", role: "Lurk", iconColor: "text-red-400" },
  { nickname: "Donsollan", realName: "Substitute", role: "Reserve", iconColor: "text-orange-400" },
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
              <a href="#trophies" className="text-foreground hover:text-primary transition-colors font-medium">
                Трофеи
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
              <div className="text-4xl font-heading font-bold text-primary">6</div>
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

        <section id="trophies" className="space-y-8 animate-fade-in-up">
          <div className="text-center space-y-2">
            <h3 className="text-4xl font-heading font-bold text-foreground">Трофеи</h3>
            <p className="text-muted-foreground">Наши достижения и награды</p>
          </div>
          <div className="text-center py-16">
            <Icon name="Trophy" className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">Скоро здесь появятся наши трофеи</p>
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