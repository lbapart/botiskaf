"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { docsConfig } from "@/config/docs"
import { Button } from "@/components/ui/button"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center gap-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
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
                  href={item.href}
                >
                  {item.title}
                </Link>
              </Button>
            )
        )}
      </nav>
    </div>
  )
}