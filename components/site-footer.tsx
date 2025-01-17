export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-grid border-t py-6 md:px-8 md:py-0 z-50">
      <div className="container-wrapper">
        <div className="container py-4">
          <div className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
            © botiskaf.com 2024-{currentYear}
          </div>
        </div>
      </div>
    </footer>
  )
}