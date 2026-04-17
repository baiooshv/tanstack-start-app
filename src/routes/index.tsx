import { createFileRoute } from "@tanstack/react-router";
import { Star, ShieldCheck, Zap, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "💸 Tech Vinted + IBAN Illimité 🤑 — Méthode exclusive" },
      {
        name: "description",
        content:
          "💰 Découvre la tech Vinted + IBAN illimité. Méthode testée et approuvée. Envoi en privé TikTok après paiement PayPal.",
      },
      { property: "og:title", content: "💸 Tech Vinted + IBAN Illimité 🤑" },
      {
        property: "og:description",
        content: "La méthode exclusive 🔥 pour utiliser Vinted avec des IBAN illimités 💳",
      },
    ],
  }),
  component: Index,
});

const PAYPAL_LINK = "https://www.paypal.me/aldubiy";

const reviews = [
  {
    name: "Lucas M.",
    rating: 5,
    text: "Franchement au top 🔥, j'ai testé direct et ça marche nickel 💸 Merci !",
    time: "il y a 2 jours",
  },
  {
    name: "Sarah D.",
    rating: 5,
    text: "Méthode hyper claire 🤑, le vendeur répond vite sur TikTok. Je recommande à 100% ✅",
    time: "il y a 4 jours",
  },
  {
    name: "Kevin R.",
    rating: 5,
    text: "Ça fonctionne parfaitement 💯, bien expliqué étape par étape 🔥💰",
    time: "il y a 1 semaine",
  },
  {
    name: "Inès B.",
    rating: 4,
    text: "Très bonne tech 💸, j'ai eu une petite question et le vendeur m'a aidé direct 🙌",
    time: "il y a 1 semaine",
  },
  {
    name: "Mehdi T.",
    rating: 5,
    text: "Sérieux et rapide ⚡, ça vaut largement le prix 🤑 Ne changez rien !",
    time: "il y a 2 semaines",
  },
  {
    name: "Camille P.",
    rating: 5,
    text: "Je l'utilise depuis 3 semaines, aucun souci 💳✨ Top qualité.",
    time: "il y a 3 semaines",
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? "fill-primary text-primary" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-background to-primary/10">
      {/* Header */}
      <header className="border-b bg-card/80 sticky top-0 z-40 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-black shadow-lg">
              V
            </div>
            <span className="font-bold text-lg tracking-tight">VintedTech 💸</span>
          </div>
          <Badge variant="secondary" className="hidden sm:flex gap-1">
            <ShieldCheck className="h-3 w-3" /> Vendeur vérifié ✅
          </Badge>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <Badge className="mb-4">🔥 Méthode 2026 💰</Badge>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
            💸 Tech Vinted + <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">IBAN Illimité</span> 🤑
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            La méthode exclusive 🔥 pour générer des IBAN illimités 💳 et les utiliser sur Vinted
            en toute simplicité. Support direct par message privé TikTok 📲
          </p>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center gap-1">
              <StarRow count={5} />
              <span className="font-semibold ml-1">4.9/5 ⭐</span>
            </div>
            <span className="text-sm text-muted-foreground">· +320 ventes 💰</span>
          </div>

          <div className="mt-8 flex items-end gap-3">
            <span className="text-4xl font-black">15€ 💸</span>
            <span className="text-lg text-muted-foreground line-through mb-1">39€</span>
            <Badge variant="destructive" className="mb-1">-60% 🔥</Badge>
          </div>

          <a
            href={PAYPAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-6"
          >
            <Button size="lg" className="w-full md:w-auto text-base px-10 h-14 font-bold shadow-xl hover:shadow-2xl transition-all bg-gradient-to-r from-primary to-primary/80 hover:scale-105">
              💸 Acheter maintenant — 15€ 🤑
            </Button>
          </a>
          <p className="text-xs text-muted-foreground mt-2 flex items-center gap-1">
            <Lock className="h-3 w-3" /> Paiement 100% sécurisé via PayPal 🔒
          </p>
        </div>

        <Card className="p-8 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-primary/30 shadow-xl">
          <h3 className="font-black text-xl mb-4">✨ Ce que tu reçois :</h3>
          <div className="space-y-4">
            {[
              { e: "💳", t: "Génération d'IBAN illimités" },
              { e: "📲", t: "Méthode envoyée en privé sur TikTok" },
              { e: "🔥", t: "Compatible 2026, mises à jour incluses" },
              { e: "💬", t: "Support direct par message" },
              { e: "⚡", t: "Livraison rapide après paiement" },
            ].map((f) => (
              <div key={f.t} className="flex items-start gap-3">
                <span className="text-2xl">{f.e}</span>
                <span className="font-medium pt-0.5">{f.t}</span>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* How it works */}
      <section className="bg-gradient-to-r from-primary/15 to-primary/5 border-y border-primary/20">
        <div className="max-w-5xl mx-auto px-4 py-12">
          <h2 className="text-2xl md:text-3xl font-black text-center mb-8">
            📲 Comment ça marche ? 💸
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { n: "1️⃣", t: "Tu paies", d: "Clique sur le bouton et paie 15€ via PayPal 💳" },
              { n: "2️⃣", t: "Tu m'envoies un MP", d: "Sur TikTok, donne-moi simplement le nom avec lequel tu as payé 📲" },
              { n: "3️⃣", t: "Tu reçois la tech", d: "J'envoie la méthode complète en privé direct 🔥" },
            ].map((s) => (
              <Card key={s.n} className="p-6 text-center bg-card/80 backdrop-blur">
                <div className="text-4xl mb-3">{s.n}</div>
                <h3 className="font-bold text-lg">{s.t}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.d}</p>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Card className="inline-block px-6 py-4 bg-primary/10 border-primary/30">
              <p className="font-semibold text-sm">
                ⚠️ Pas de PDF ni de fichier — la tech est envoyée uniquement en MP TikTok 📲
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section>
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "⚡ Rapide", desc: "Mise en place en moins de 10 minutes." },
            { icon: ShieldCheck, title: "✅ Fiable", desc: "Méthode testée et approuvée." },
            { icon: Lock, title: "🔒 Sécurisé", desc: "Paiement protégé via PayPal." },
          ].map((f) => (
            <Card key={f.title} className="p-6 text-center bg-card/70 backdrop-blur">
              <div className="mx-auto h-12 w-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center mb-3">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{f.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black">🌟 Ils ont testé la tech 💸</h2>
          <div className="flex items-center justify-center gap-2 mt-3">
            <StarRow count={5} />
            <span className="font-bold">4.9</span>
            <span className="text-muted-foreground">· 320+ avis vérifiés ✅</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r) => (
            <Card key={r.name} className="p-5 bg-card/80 backdrop-blur hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 text-primary font-bold flex items-center justify-center">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.time}</p>
                  </div>
                </div>
                <ShieldCheck className="h-4 w-4 text-primary" />
              </div>
              <StarRow count={r.rating} />
              <p className="mt-2 text-sm leading-relaxed">{r.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-black">🤑 Prêt à passer au niveau supérieur ? 🔥</h2>
          <p className="mt-3 text-lg opacity-90">
            💸 Rejoins les 320+ utilisateurs qui font confiance à la tech Vinted + IBAN illimité 💳
          </p>
          <a
            href={PAYPAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8"
          >
            <Button size="lg" variant="secondary" className="text-base px-10 h-14 font-bold hover:scale-105 transition-transform shadow-xl">
              💸 Acheter maintenant — 15€ 🤑
            </Button>
          </a>
          <p className="text-xs opacity-90 mt-3">🔒 Paiement sécurisé via PayPal · 📲 Tech envoyée en MP TikTok</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-muted-foreground bg-card/50">
        <p>© 2025 VintedTech 💸 — Tous droits réservés</p>
      </footer>
    </div>
  );
}
