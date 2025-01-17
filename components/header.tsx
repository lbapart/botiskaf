import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import LanguageSwitcher from "@/components/language-switcher"

interface SiteHeaderProps {
  locale: string;
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <MainNav locale={locale} />
          <MobileNav locale={locale} />
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <div className="flex items-center gap-0.5">
            </div>
            <nav className="flex items-center gap-0.5">
              <LanguageSwitcher locale={locale} />
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}