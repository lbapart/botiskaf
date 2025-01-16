import { MainNavItem } from "@/types/nav"

export interface DocsConfig {
  mainNav: MainNavItem[]
}


export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "main",
      href: "/",
    },
    {
      title: "commands",
      href: "/commands",
    },
  ]
}