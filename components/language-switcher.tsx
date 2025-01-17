"use client";

import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { languages } from "@/config/site";
import { usePathname, useRouter } from "next/navigation";

const LanguageSwitcher = ({ locale } : { locale: string}) => {
  const pathname = usePathname();
  const router = useRouter();

  const setLanguage = (code: string) => {
    const newLocale = code;
    const currentPath = pathname ? pathname.split("/").slice(2).join("/") : "";
    router.push(`/${newLocale}/${currentPath}`);
  }

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-32 capitalize">
            {languages.find((lang) => lang.code === locale)?.label || "Select"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {languages.map((lang) => (
            <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)}>
              {lang.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LanguageSwitcher;
