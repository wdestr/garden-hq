import { NavLink } from 'react-router-dom'
import {
  Sprout,
  LayoutDashboard,
  Calendar,
  CloudSun,
  BookOpen,
  Settings,
  Users,
  LogOut,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { mockUser } from '@/data/mock'

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/garden', icon: Sprout, label: 'My Garden' },
  { to: '/calendar', icon: Calendar, label: 'Planting Calendar' },
  { to: '/weather', icon: CloudSun, label: 'Weather & Alerts' },
  { to: '/guides', icon: BookOpen, label: 'Growing Guides' },
  { to: '/community', icon: Users, label: 'Community' },
]

interface SidebarProps {
  open: boolean
  onClose: () => void
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-garden-950 text-white transition-transform duration-200 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 py-5 border-b border-garden-800">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-garden-700">
            <Sprout className="h-5 w-5 text-garden-200" />
          </div>
          <div>
            <h1 className="font-serif text-lg font-bold tracking-tight">Garden HQ</h1>
            <p className="text-[11px] text-garden-400 -mt-0.5">The Living Almanac</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              end={item.to === '/'}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-garden-800 text-white"
                    : "text-garden-300 hover:bg-garden-900 hover:text-white"
                )
              }
            >
              <item.icon className="h-4.5 w-4.5 shrink-0" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* User section */}
        <div className="border-t border-garden-800 p-3">
          <NavLink
            to="/settings"
            onClick={onClose}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors mb-1",
                isActive
                  ? "bg-garden-800 text-white"
                  : "text-garden-300 hover:bg-garden-900 hover:text-white"
              )
            }
          >
            <Settings className="h-4.5 w-4.5" />
            Settings
          </NavLink>

          <div className="flex items-center gap-3 rounded-lg px-3 py-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-garden-700 text-xs font-bold">
              {mockUser.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">{mockUser.name}</p>
              <p className="text-[11px] text-garden-400 truncate">{mockUser.location} &middot; Zone {mockUser.zone}</p>
            </div>
            <button className="text-garden-400 hover:text-white transition-colors cursor-pointer" title="Sign out">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}
