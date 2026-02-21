import { useState, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { Sidebar } from './Sidebar'
import { Button } from '@/components/ui/button'

const PAGE_TITLES: Record<string, string> = {
  '/': 'Dashboard',
  '/garden': 'My Garden',
  '/calendar': 'Planting Calendar',
  '/weather': 'Weather & Alerts',
  '/guides': 'Growing Guides',
  '/community': 'Community',
  '/settings': 'Settings',
}

export function AppShell() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const title = PAGE_TITLES[location.pathname] || 'Garden HQ'
    document.title = `${title} | Garden HQ`
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-stone-50">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Mobile header */}
        <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-stone-200 bg-white/80 backdrop-blur-md px-4 py-3 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <span className="font-serif text-lg font-bold text-garden-900">Garden HQ</span>
        </header>

        <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
