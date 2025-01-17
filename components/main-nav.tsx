"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { docsConfig } from "@/config/docs"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"

interface MainNavProps {
  locale: string;
}

export function MainNav({ locale }: MainNavProps) {
  // Get the current pathname without the locale prefix
  const pathname = usePathname()?.replace(/\/[a-z]{2}/, "")
  const t = useTranslations("NavBarLinks")

  return (
    <div className="mr-4 hidden md:flex">
      <Link href={`/${locale}`} className="mr-4 flex items-center gap-2 lg:mr-6">
        <span className="hidden font-bold lg:inline-block pl-4">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm xl:gap-6">
        {docsConfig.mainNav?.map(
          (item) =>
            item.href && (
              <Button asChild
                variant="ghost"
                className={cn(
                  "transition-colors hover:bg-accent hover:rounded-lg",
                  pathname === item.href ? "bg-accent rounded-lg" : "text-foreground/80"
                )}
                key={item.href}
              >
                <Link
                  href={`/${locale}${item.href}`}
                >
                  {t(item.title)}
                </Link>
              </Button>
            )
        )}
      </nav>
    </div>
  )
}