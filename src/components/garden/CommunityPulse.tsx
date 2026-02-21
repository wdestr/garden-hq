import { Users, TrendingUp, CheckCircle } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { mockCommunity } from '@/data/mock'

export function CommunityPulse() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Users className="h-4.5 w-4.5 text-garden-600" />
          Community Pulse
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mockCommunity.map((insight) => (
            <div key={insight.plantName} className="flex items-center justify-between text-sm">
              <div>
                <p className="font-medium text-stone-800">{insight.plantName}</p>
                <p className="text-xs text-stone-500">
                  {insight.gardenersNearby} gardeners nearby
                </p>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-1 text-xs text-stone-500">
                  <TrendingUp className="h-3 w-3" />
                  {insight.peakPlanting}
                </div>
                <div className="flex items-center gap-1 text-xs text-garden-600">
                  <CheckCircle className="h-3 w-3" />
                  {insight.successRate}% success
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
