export type PlantStatus = 'planned' | 'planted' | 'growing' | 'harvesting' | 'done'

export interface Plant {
  id: string
  name: string
  variety: string
  emoji: string
  status: PlantStatus
  plantedDate: string | null
  expectedHarvest: string | null
  daysToMaturity: number
  notes: string
  zone: string
  optimalPlantWindow: { start: string; end: string }
  wateringFrequency: 'daily' | 'every-2-days' | 'twice-weekly' | 'weekly'
  sunRequirement: 'full-sun' | 'partial-shade' | 'shade'
  attunement: number // 0-100, how well adapted to local conditions
}

export interface GardenAction {
  id: string
  title: string
  description: string
  reason: string
  howTo: string
  dueDate: string
  priority: 'urgent' | 'high' | 'medium' | 'low'
  completed: boolean
  plantId: string | null
  attunement: number
}

export interface WeatherData {
  current: {
    temp: number
    feelsLike: number
    humidity: number
    wind: number
    condition: WeatherCondition
    soilTemp: number
    uvIndex: number
  }
  forecast: DayForecast[]
  alerts: WeatherAlert[]
}

export type WeatherCondition = 'sunny' | 'partly-cloudy' | 'cloudy' | 'rainy' | 'stormy' | 'snowy' | 'foggy'

export interface DayForecast {
  date: string
  high: number
  low: number
  condition: WeatherCondition
  precipChance: number
  humidity: number
}

export interface WeatherAlert {
  id: string
  type: 'frost' | 'heat' | 'storm' | 'wind' | 'rain'
  severity: 'watch' | 'warning' | 'advisory'
  title: string
  message: string
  actionRequired: string
  expiresAt: string
  affectedPlants: string[]
}

export interface CommunityInsight {
  plantName: string
  gardenersNearby: number
  peakPlanting: string
  successRate: number
}

export interface SuccessionSuggestion {
  plant: Pick<Plant, 'name' | 'variety' | 'emoji'>
  plantWindow: string
  harvestDate: string
  attunement: number
}

export interface UserProfile {
  id: string
  name: string
  email: string
  zipCode: string
  zone: string
  location: string
  avatarUrl: string | null
}

export interface GardenStats {
  totalPlants: number
  activePlants: number
  harvestedThisSeason: number
  daysUntilFirstFrost: number
  overallAttunement: number
}
