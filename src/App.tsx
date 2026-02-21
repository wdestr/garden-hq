import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'sonner'
import { UserProvider } from '@/context/UserContext'
import { AppShell } from '@/components/layout/AppShell'
import { DashboardPage } from '@/pages/DashboardPage'
import { GardenPage } from '@/pages/GardenPage'
import { CalendarPage } from '@/pages/CalendarPage'
import { WeatherPage } from '@/pages/WeatherPage'
import { GuidesPage } from '@/pages/GuidesPage'
import { CommunityPage } from '@/pages/CommunityPage'
import { SettingsPage } from '@/pages/SettingsPage'

export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<DashboardPage />} />
            <Route path="garden" element={<GardenPage />} />
            <Route path="calendar" element={<CalendarPage />} />
            <Route path="weather" element={<WeatherPage />} />
            <Route path="guides" element={<GuidesPage />} />
            <Route path="community" element={<CommunityPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
        <Toaster position="bottom-right" richColors />
      </BrowserRouter>
    </UserProvider>
  )
}
