import { Users, MapPin, TrendingUp, MessageSquare } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useUser } from '@/context/UserContext'
import { mockCommunity } from '@/data/mock'

const recentActivity = [
  { user: 'Sarah M.', action: 'planted Tomatoes (Sun Gold)', time: '2 hours ago', emoji: '🍅' },
  { user: 'Mike R.', action: 'harvested Lettuce (Romaine)', time: '4 hours ago', emoji: '🥬' },
  { user: 'Chen L.', action: 'added Basil to their garden', time: '6 hours ago', emoji: '🌿' },
  { user: 'Priya K.', action: 'reported frost damage on Peppers', time: '8 hours ago', emoji: '🫑' },
  { user: 'David W.', action: 'shared a tip about companion planting', time: '12 hours ago', emoji: '💡' },
]

export function CommunityPage() {
  const { user } = useUser()
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">Community</h1>
        <p className="text-stone-500 mt-1">See what gardeners near {user.location} are growing</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* What's Popular */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-4.5 w-4.5 text-garden-600" />
              Popular in Zone {user.zone}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockCommunity.map((insight, i) => (
                <div key={insight.plantName} className="flex items-center gap-4 p-3 rounded-lg bg-stone-50">
                  <span className="text-lg font-bold text-stone-300 w-6">#{i + 1}</span>
                  <div className="flex-1">
                    <p className="font-medium text-stone-800">{insight.plantName}</p>
                    <div className="flex items-center gap-3 text-xs text-stone-500 mt-0.5">
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {insight.gardenersNearby} nearby
                      </span>
                      <span>Peak: {insight.peakPlanting}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-garden-600">{insight.successRate}%</p>
                    <p className="text-[10px] text-stone-400">success rate</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-4.5 w-4.5 text-garden-600" />
              Nearby Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-stone-50 transition-colors">
                  <span className="text-lg mt-0.5">{activity.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-stone-800">
                      <span className="font-medium">{activity.user}</span>{' '}
                      {activity.action}
                    </p>
                    <p className="text-xs text-stone-400 mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Map placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-4.5 w-4.5 text-garden-600" />
            Gardeners Near You
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-xl bg-stone-100 h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-stone-300 mx-auto mb-2" />
              <p className="text-sm text-stone-400">Community map coming soon</p>
              <p className="text-xs text-stone-300 mt-1">See who's growing what in your neighborhood</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
