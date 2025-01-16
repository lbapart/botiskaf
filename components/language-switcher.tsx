// "use client";

// import React from "react";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import { languages } from "@/config/site";

// const LanguageSwitcher = () => {
//   return (
//     <div>
//       <DropdownMenu>
//         <DropdownMenuTrigger asChild>
//           <Button variant="outline" className="w-32 capitalize">
//             {languages.find((lang) => lang.code === language)?.label || "Select"}
//           </Button>
//         </DropdownMenuTrigger>
//         <DropdownMenuContent>
//           {languages.map((lang) => (
//             <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)}>
//               {lang.label}
//             </DropdownMenuItem>
//           ))}
//         </DropdownMenuContent>
//       </DropdownMenu>
//     </div>
//   );
// };

// export default LanguageSwitcher;
