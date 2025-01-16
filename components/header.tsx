import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeSwitcher } from "@/components/mode-switcher"

export function SiteHeader() {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-wrapper">
        <div className="container flex h-14 items-center">
          <MainNav />
          <MobileNav />
          <ModeSwitcher />
          <div className="flex flex-1 items-center justify-between gap-2 md:justify-end">
            <div className="flex items-center gap-0.5">
            </div>
            {/* <nav className="flex items-center gap-0.5">
              <Button variant="ghost" size="icon" className="h-8 w-8 px-0">
                <Link
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer"
                >
                </Link>
              </Button>
            </nav> */}
          </div>
        </div>
      </div>
    </header>
  )
}