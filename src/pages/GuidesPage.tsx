import { Clock, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const guides = [
  { title: 'Starting Seeds Indoors', category: 'Beginner', readTime: '5 min', emoji: '🌱', description: 'Everything you need to know about starting seeds indoors this spring.' },
  { title: 'Companion Planting Guide', category: 'Intermediate', readTime: '8 min', emoji: '🤝', description: 'Which plants thrive together and which to keep apart.' },
  { title: 'Frost Protection Strategies', category: 'Beginner', readTime: '4 min', emoji: '❄️', description: 'How to protect your garden from unexpected cold snaps.' },
  { title: 'Succession Planting 101', category: 'Intermediate', readTime: '6 min', emoji: '📅', description: 'Maximize your harvest with staggered planting schedules.' },
  { title: 'Container Gardening', category: 'Beginner', readTime: '5 min', emoji: '🪴', description: 'Grow a productive garden in small spaces with containers.' },
  { title: 'Composting Basics', category: 'Beginner', readTime: '7 min', emoji: '♻️', description: 'Turn kitchen scraps into garden gold with these composting tips.' },
  { title: 'Organic Pest Control', category: 'Advanced', readTime: '10 min', emoji: '🐛', description: 'Natural methods to keep pests at bay without chemicals.' },
  { title: 'Soil Health & Testing', category: 'Intermediate', readTime: '8 min', emoji: '🧪', description: 'Understanding your soil is the key to a thriving garden.' },
]

export function GuidesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">Growing Guides</h1>
        <p className="text-stone-500 mt-1">Learn techniques to grow your best garden yet</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {guides.map((guide) => (
          <Card key={guide.title} className="hover:shadow-md transition-shadow cursor-pointer group">
            <CardContent className="p-5">
              <span className="text-3xl block mb-3">{guide.emoji}</span>
              <Badge variant={guide.category === 'Beginner' ? 'default' : guide.category === 'Intermediate' ? 'info' : 'warning'} className="mb-2">
                {guide.category}
              </Badge>
              <h3 className="font-semibold text-stone-900 mb-1 group-hover:text-garden-700 transition-colors">
                {guide.title}
              </h3>
              <p className="text-sm text-stone-500 mb-3">{guide.description}</p>
              <div className="flex items-center justify-between text-xs text-stone-400">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {guide.readTime}
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-garden-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
