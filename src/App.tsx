import { Search, ShoppingBag, Truck, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { SiApple, SiFacebook, SiGoogleplay, SiInstagram, SiTiktok } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  APP_STORE_URL,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PLAY_STORE_URL,
  PRIVACY_URL,
  TIKTOK_URL,
} from "@/lib/links";

const features: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ShoppingBag,
    title: "آلاف المنتجات",
    body: "اكتشف المنتجات من أفضل الوكالات المحلية والعالمية.",
  },
  {
    icon: Search,
    title: "تسوق بسهولة",
    body: "تصفح الفئات وابحث عن ما يحتاجه محلك بنقرة واحدة.",
  },
  {
    icon: Truck,
    title: "توصيل إلى المحل",
    body: "من باب الوكالة إلى باب محلك.",
  },
];

const stores: { href: string; kicker: string; name: string; icon: IconType }[] = [
  { href: APP_STORE_URL, kicker: "حمّل من", name: "App Store", icon: SiApple },
  { href: PLAY_STORE_URL, kicker: "حمّل من", name: "Google Play", icon: SiGoogleplay },
];

const socials: { href: string; name: string; handle: string; icon: IconType }[] = [
  { href: TIKTOK_URL, name: "TikTok", handle: "@jamaloon7", icon: SiTiktok },
  { href: INSTAGRAM_URL, name: "Instagram", handle: "@jamaloon77", icon: SiInstagram },
  { href: FACEBOOK_URL, name: "Facebook", handle: "جملون", icon: SiFacebook },
];

function ExternalLink({
  href,
  className,
  children,
  label,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  label: string;
}) {
  return (
    <Button asChild variant="outline" size="lg" className={className}>
      <a href={href} target="_blank" rel="noreferrer" aria-label={label}>
        {children}
      </a>
    </Button>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-border/80 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex items-center gap-3 text-primary no-underline">
            <img src="/icon.png" alt="" width={42} height={42} className="size-11 rounded-xl" />
            <span className="text-xl font-bold">جملون</span>
          </a>
          <nav className="flex items-center gap-2 text-sm font-medium">
            <a href="#download" className="rounded-md px-3 py-2 text-foreground no-underline hover:bg-accent">
              التحميل
            </a>
            <a href="#social" className="rounded-md px-3 py-2 text-foreground no-underline hover:bg-accent">
              حساباتنا
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-5xl px-5 pb-8 pt-14 sm:pt-20">
          <p className="mb-4 inline-flex rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            للمحلات والوكالات في العراق
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-primary sm:text-6xl">جملون</h1>
          <p className="mt-4 max-w-xl text-xl font-medium leading-9 sm:text-2xl">
            منصة بيع الجملة الأولى في العراق
          </p>
          <p className="mt-3 max-w-xl text-base leading-8 text-muted-foreground">
            اكتشف آلاف المنتجات من أفضل الوكالات المحلية والعالمية.
          </p>

          <div id="download" className="mt-8 flex scroll-mt-24 flex-col gap-3 sm:flex-row">
            {stores.map((store) => (
              <Button
                key={store.name}
                asChild
                size="lg"
                className="h-16 justify-start rounded-2xl bg-black px-5 text-white hover:bg-black/85"
              >
                <a href={store.href} target="_blank" rel="noreferrer">
                  <store.icon className="size-7" aria-hidden />
                  <span className="flex flex-col items-start leading-tight">
                    <span className="text-xs font-normal text-white/80">{store.kicker}</span>
                    <span className="text-lg font-semibold">{store.name}</span>
                  </span>
                </a>
              </Button>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-5xl gap-4 px-5 py-8 sm:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/80">
              <CardHeader>
                <span className="grid size-11 place-items-center rounded-xl bg-accent text-primary">
                  <feature.icon className="size-5" aria-hidden />
                </span>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.body}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </section>

        <section id="social" className="mx-auto max-w-5xl scroll-mt-24 px-5 py-10">
          <h2 className="text-2xl font-bold">حساباتنا</h2>
          <p className="mt-2 text-muted-foreground">تابع جملون على مواقع التواصل.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {socials.map((social) => (
              <ExternalLink
                key={social.name}
                href={social.href}
                label={social.name}
                className="h-auto justify-start rounded-2xl px-4 py-4"
              >
                <social.icon className="size-6 text-primary" aria-hidden />
                <span className="flex flex-col items-start leading-tight">
                  <span className="font-semibold">{social.name}</span>
                  <span className="text-sm text-muted-foreground">{social.handle}</span>
                </span>
              </ExternalLink>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© جملون. جميع الحقوق محفوظة.</span>
          {PRIVACY_URL ? (
            <a href={PRIVACY_URL} className="text-primary">
              سياسة الخصوصية
            </a>
          ) : null}
        </div>
      </footer>
    </div>
  );
}
