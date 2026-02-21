/**
 * Planting window data by USDA Hardiness Zone.
 *
 * Windows are expressed as human-readable month–day strings so the
 * calendar sidebar and plant detail panel can display them directly.
 * The data covers the most common home-garden crops across zones 3–10.
 *
 * Sources: USDA planting guides, state extension offices, Farmer's Almanac.
 */

export interface PlantingWindowEntry {
  /** Human-friendly start date, e.g. "Mar 15" */
  start: string
  /** Human-friendly end date, e.g. "May 30" */
  end: string
  /** Indoor seed start window (optional) */
  indoorStart?: string
  /** Notes specific to this zone */
  note?: string
}

type ZonePlantMap = Record<string, PlantingWindowEntry>

// prettier-ignore
const PLANTING_DATA: Record<string, ZonePlantMap> = {
  // ── Zone 3 (−40 to −30 °F) ───────────────────────────
  '3': {
    'Tomatoes':    { start: 'Jun 1',  end: 'Jun 15',  indoorStart: 'Mar 15', note: 'Start indoors 8 weeks before last frost (~May 25)' },
    'Peppers':     { start: 'Jun 5',  end: 'Jun 20',  indoorStart: 'Mar 1',  note: 'Needs warm soil >60°F' },
    'Lettuce':     { start: 'May 1',  end: 'Jun 15',  note: 'Direct sow after last frost' },
    'Carrots':     { start: 'May 10', end: 'Jun 15',  note: 'Soil must be workable' },
    'Basil':       { start: 'Jun 1',  end: 'Jun 30',  indoorStart: 'Apr 15' },
    'Zucchini':    { start: 'Jun 1',  end: 'Jun 20',  note: 'Direct sow or transplant' },
    'Snap Peas':   { start: 'Apr 25', end: 'May 20',  note: 'Cool weather crop – plant early' },
    'Herbs Mix':   { start: 'May 15', end: 'Jun 15' },
    'Cucumbers':   { start: 'Jun 1',  end: 'Jun 20' },
    'Green Beans': { start: 'Jun 1',  end: 'Jun 20' },
    'Spinach':     { start: 'Apr 20', end: 'May 30' },
    'Kale':        { start: 'May 1',  end: 'Jun 15' },
    'Radishes':    { start: 'Apr 25', end: 'Jun 1' },
    'Swiss Chard': { start: 'May 10', end: 'Jun 15' },
    'Bush Beans':  { start: 'Jun 1',  end: 'Jun 20' },
  },
  // ── Zone 4 (−30 to −20 °F) ───────────────────────────
  '4': {
    'Tomatoes':    { start: 'May 20', end: 'Jun 10',  indoorStart: 'Mar 10' },
    'Peppers':     { start: 'May 25', end: 'Jun 15',  indoorStart: 'Mar 1' },
    'Lettuce':     { start: 'Apr 20', end: 'Jun 1' },
    'Carrots':     { start: 'May 1',  end: 'Jun 10' },
    'Basil':       { start: 'May 25', end: 'Jun 20', indoorStart: 'Apr 10' },
    'Zucchini':    { start: 'May 25', end: 'Jun 15' },
    'Snap Peas':   { start: 'Apr 15', end: 'May 15' },
    'Herbs Mix':   { start: 'May 10', end: 'Jun 10' },
    'Cucumbers':   { start: 'May 25', end: 'Jun 15' },
    'Green Beans': { start: 'May 25', end: 'Jun 15' },
    'Spinach':     { start: 'Apr 10', end: 'May 20' },
    'Kale':        { start: 'Apr 20', end: 'Jun 1' },
    'Radishes':    { start: 'Apr 15', end: 'May 30' },
    'Swiss Chard': { start: 'May 1',  end: 'Jun 10' },
    'Bush Beans':  { start: 'May 25', end: 'Jun 15' },
  },
  // ── Zone 5 (−20 to −10 °F) ───────────────────────────
  '5': {
    'Tomatoes':    { start: 'May 10', end: 'Jun 1',   indoorStart: 'Mar 1' },
    'Peppers':     { start: 'May 15', end: 'Jun 5',   indoorStart: 'Feb 20' },
    'Lettuce':     { start: 'Apr 10', end: 'May 20' },
    'Carrots':     { start: 'Apr 15', end: 'Jun 1' },
    'Basil':       { start: 'May 15', end: 'Jun 15', indoorStart: 'Apr 1' },
    'Zucchini':    { start: 'May 15', end: 'Jun 10' },
    'Snap Peas':   { start: 'Apr 1',  end: 'May 1' },
    'Herbs Mix':   { start: 'May 1',  end: 'Jun 1' },
    'Cucumbers':   { start: 'May 15', end: 'Jun 10' },
    'Green Beans': { start: 'May 15', end: 'Jun 10' },
    'Spinach':     { start: 'Mar 25', end: 'May 10' },
    'Kale':        { start: 'Apr 1',  end: 'May 20' },
    'Radishes':    { start: 'Apr 1',  end: 'May 20' },
    'Swiss Chard': { start: 'Apr 20', end: 'Jun 1' },
    'Bush Beans':  { start: 'May 15', end: 'Jun 10' },
  },
  // ── Zone 6 (−10 to 0 °F) ─────────────────────────────
  '6': {
    'Tomatoes':    { start: 'May 1',  end: 'May 25',  indoorStart: 'Feb 20' },
    'Peppers':     { start: 'May 5',  end: 'May 30',  indoorStart: 'Feb 15' },
    'Lettuce':     { start: 'Mar 25', end: 'May 10' },
    'Carrots':     { start: 'Apr 1',  end: 'May 20' },
    'Basil':       { start: 'May 5',  end: 'Jun 5',  indoorStart: 'Mar 20' },
    'Zucchini':    { start: 'May 10', end: 'Jun 5' },
    'Snap Peas':   { start: 'Mar 15', end: 'Apr 20' },
    'Herbs Mix':   { start: 'Apr 15', end: 'May 25' },
    'Cucumbers':   { start: 'May 10', end: 'Jun 5' },
    'Green Beans': { start: 'May 10', end: 'Jun 5' },
    'Spinach':     { start: 'Mar 15', end: 'Apr 30' },
    'Kale':        { start: 'Mar 20', end: 'May 10' },
    'Radishes':    { start: 'Mar 15', end: 'May 10' },
    'Swiss Chard': { start: 'Apr 10', end: 'May 25' },
    'Bush Beans':  { start: 'May 10', end: 'Jun 5' },
  },
  // ── Zone 7 (0 to 10 °F) ──────────────────────────────
  '7': {
    'Tomatoes':    { start: 'Apr 15', end: 'May 15',  indoorStart: 'Feb 10', note: 'Start indoors 6-8 weeks before last frost (~Apr 15)' },
    'Peppers':     { start: 'Apr 20', end: 'May 30',  indoorStart: 'Feb 1',  note: 'Wait for soil temps >60°F' },
    'Lettuce':     { start: 'Mar 15', end: 'Apr 30',  note: 'Direct sow or transplant. Succession plant every 2 weeks.' },
    'Carrots':     { start: 'Mar 15', end: 'May 1',   note: 'Direct sow in loose soil. Thin to 2-3 inches.' },
    'Basil':       { start: 'Apr 15', end: 'Jun 1',   indoorStart: 'Mar 10', note: 'Frost-sensitive — wait until nighttime lows are above 50°F' },
    'Zucchini':    { start: 'May 1',  end: 'Jun 15',  note: 'Direct sow when soil is warm. Give space — they spread!' },
    'Snap Peas':   { start: 'Mar 1',  end: 'Apr 15',  note: 'Cool season crop. Plant as soon as soil is workable.' },
    'Herbs Mix':   { start: 'Mar 20', end: 'May 15',  note: 'Most herbs handle light frost except basil' },
    'Cucumbers':   { start: 'May 1',  end: 'Jun 1' },
    'Green Beans': { start: 'Apr 25', end: 'May 30' },
    'Spinach':     { start: 'Feb 25', end: 'Apr 15',  note: 'Bolts in heat — plant early' },
    'Kale':        { start: 'Mar 1',  end: 'Apr 30',  note: 'Frost tolerant. Great for early spring.' },
    'Radishes':    { start: 'Mar 1',  end: 'Apr 30' },
    'Swiss Chard': { start: 'Mar 25', end: 'May 15' },
    'Bush Beans':  { start: 'Apr 25', end: 'Jun 5' },
  },
  // ── Zone 8 (10 to 20 °F) ─────────────────────────────
  '8': {
    'Tomatoes':    { start: 'Mar 25', end: 'May 1',   indoorStart: 'Jan 25' },
    'Peppers':     { start: 'Apr 1',  end: 'May 15',  indoorStart: 'Jan 15' },
    'Lettuce':     { start: 'Feb 15', end: 'Apr 10' },
    'Carrots':     { start: 'Feb 20', end: 'Apr 15' },
    'Basil':       { start: 'Apr 1',  end: 'May 20',  indoorStart: 'Feb 25' },
    'Zucchini':    { start: 'Apr 10', end: 'May 30' },
    'Snap Peas':   { start: 'Feb 10', end: 'Mar 25' },
    'Herbs Mix':   { start: 'Mar 1',  end: 'Apr 30' },
    'Cucumbers':   { start: 'Apr 10', end: 'May 20' },
    'Green Beans': { start: 'Apr 5',  end: 'May 20' },
    'Spinach':     { start: 'Feb 1',  end: 'Mar 30' },
    'Kale':        { start: 'Feb 10', end: 'Apr 10' },
    'Radishes':    { start: 'Feb 10', end: 'Apr 10' },
    'Swiss Chard': { start: 'Mar 1',  end: 'Apr 30' },
    'Bush Beans':  { start: 'Apr 5',  end: 'May 25' },
  },
  // ── Zone 9 (20 to 30 °F) ─────────────────────────────
  '9': {
    'Tomatoes':    { start: 'Mar 1',  end: 'Apr 15',  indoorStart: 'Jan 10' },
    'Peppers':     { start: 'Mar 10', end: 'Apr 20',  indoorStart: 'Jan 1' },
    'Lettuce':     { start: 'Jan 20', end: 'Mar 15' },
    'Carrots':     { start: 'Feb 1',  end: 'Mar 30' },
    'Basil':       { start: 'Mar 15', end: 'May 1',   indoorStart: 'Feb 10' },
    'Zucchini':    { start: 'Mar 20', end: 'May 10' },
    'Snap Peas':   { start: 'Jan 15', end: 'Mar 1' },
    'Herbs Mix':   { start: 'Feb 15', end: 'Apr 10' },
    'Cucumbers':   { start: 'Mar 20', end: 'May 1' },
    'Green Beans': { start: 'Mar 15', end: 'May 1' },
    'Spinach':     { start: 'Jan 10', end: 'Mar 10' },
    'Kale':        { start: 'Jan 15', end: 'Mar 15' },
    'Radishes':    { start: 'Jan 15', end: 'Mar 15' },
    'Swiss Chard': { start: 'Feb 10', end: 'Apr 10' },
    'Bush Beans':  { start: 'Mar 15', end: 'May 5' },
  },
  // ── Zone 10 (30 to 40 °F) ────────────────────────────
  '10': {
    'Tomatoes':    { start: 'Feb 1',  end: 'Mar 30',  note: 'Can also plant fall crop Aug-Sep' },
    'Peppers':     { start: 'Feb 10', end: 'Apr 1' },
    'Lettuce':     { start: 'Jan 1',  end: 'Feb 28',  note: 'Fall planting also Oct-Nov' },
    'Carrots':     { start: 'Jan 10', end: 'Mar 15' },
    'Basil':       { start: 'Feb 15', end: 'Apr 15' },
    'Zucchini':    { start: 'Feb 20', end: 'Apr 15' },
    'Snap Peas':   { start: 'Jan 1',  end: 'Feb 15' },
    'Herbs Mix':   { start: 'Jan 20', end: 'Mar 20' },
    'Cucumbers':   { start: 'Feb 20', end: 'Apr 10' },
    'Green Beans': { start: 'Feb 20', end: 'Apr 10' },
    'Spinach':     { start: 'Jan 1',  end: 'Feb 20' },
    'Kale':        { start: 'Jan 1',  end: 'Feb 20' },
    'Radishes':    { start: 'Jan 1',  end: 'Mar 1' },
    'Swiss Chard': { start: 'Jan 15', end: 'Mar 20' },
    'Bush Beans':  { start: 'Feb 20', end: 'Apr 15' },
  },
}

/**
 * Look up the optimal planting window for a given crop and USDA zone.
 * Zone can include sub-zones (e.g. "7a", "7b") — we strip the letter.
 */
export function getPlantingWindow(
  plantName: string,
  zone: string,
): PlantingWindowEntry | null {
  // Normalize zone: "7a" → "7", "10b" → "10"
  const baseZone = zone.replace(/[ab]/i, '')
  const zoneData = PLANTING_DATA[baseZone]
  if (!zoneData) return null

  // Try exact match first, then case-insensitive
  if (zoneData[plantName]) return zoneData[plantName]

  const lower = plantName.toLowerCase()
  for (const [key, val] of Object.entries(zoneData)) {
    if (key.toLowerCase() === lower) return val
  }

  return null
}

/**
 * Get all planting windows for a zone (for the calendar sidebar).
 */
export function getAllPlantingWindows(zone: string): { plantName: string; window: PlantingWindowEntry }[] {
  const baseZone = zone.replace(/[ab]/i, '')
  const zoneData = PLANTING_DATA[baseZone]
  if (!zoneData) return []

  return Object.entries(zoneData).map(([plantName, window]) => ({
    plantName,
    window,
  }))
}

/* ─── ZIP Code → USDA Zone Lookup ─── */

/**
 * Approximate ZIP-to-zone mapping covering the major US ZIP ranges.
 * In production you'd use the USDA API or a proper database.
 * This covers the main ranges to give reasonable defaults.
 */
const ZIP_ZONE_RANGES: [number, number, string][] = [
  // Alaska
  [99500, 99999, '4'],
  // Pacific Northwest / Northern CA
  [97000, 97999, '8'],  // Oregon
  [98000, 98999, '7'],  // Washington
  // California
  [90000, 91999, '10'], // SoCal / LA
  [92000, 92999, '10'], // San Diego
  [93000, 93999, '9'],  // Central CA
  [94000, 94999, '10'], // SF Bay Area
  [95000, 96199, '9'],  // NorCal
  // Mountain West
  [80000, 81999, '5'],  // Colorado
  [82000, 83999, '5'],  // Wyoming / Idaho
  [84000, 84999, '6'],  // Utah
  [85000, 85999, '9'],  // Arizona (Phoenix)
  [86000, 86999, '7'],  // Northern AZ
  [87000, 88499, '7'],  // New Mexico
  [88500, 89999, '8'],  // Nevada / Southern NV
  // Texas
  [73000, 74999, '8'],  // Northern TX
  [75000, 76999, '8'],  // Dallas / central TX
  [77000, 77999, '9'],  // Houston
  [78000, 79999, '8'],  // San Antonio / West TX
  // Midwest
  [50000, 52999, '5'],  // Iowa
  [53000, 54999, '5'],  // Wisconsin
  [55000, 56999, '4'],  // Minnesota
  [57000, 57999, '4'],  // South Dakota
  [58000, 58999, '4'],  // North Dakota
  [59000, 59999, '5'],  // Montana
  [60000, 62999, '6'],  // Illinois
  [63000, 65999, '6'],  // Missouri
  [66000, 67999, '6'],  // Kansas
  [68000, 69999, '5'],  // Nebraska
  [43000, 45999, '6'],  // Ohio
  [46000, 47999, '6'],  // Indiana
  [48000, 49999, '6'],  // Michigan
  // Northeast
  [1000,  2799,  '6'],  // Massachusetts
  [2800,  2999,  '6'],  // Rhode Island
  [3000,  3899,  '5'],  // New Hampshire
  [3900,  4999,  '5'],  // Maine
  [5000,  5999,  '4'],  // Vermont
  [6000,  6999,  '6'],  // Connecticut
  [7000,  8999,  '7'],  // New Jersey
  [10000, 14999, '7'],  // New York
  [15000, 19699, '7'],  // Pennsylvania
  // Mid-Atlantic / Southeast
  [19700, 19999, '7'],  // Delaware
  [20000, 20599, '7'],  // DC
  [20600, 21999, '7'],  // Maryland
  [22000, 24699, '7'],  // Virginia
  [24700, 26999, '6'],  // West Virginia
  [27000, 28999, '8'],  // North Carolina
  [29000, 29999, '8'],  // South Carolina
  [30000, 31999, '8'],  // Georgia
  [32000, 34999, '10'], // Florida
  [35000, 36999, '8'],  // Alabama
  [37000, 38599, '7'],  // Tennessee
  [38600, 39999, '8'],  // Mississippi
  [40000, 42799, '6'],  // Kentucky
  [70000, 71599, '9'],  // Louisiana
  [71600, 72999, '7'],  // Arkansas
  // Hawaii
  [96700, 96899, '11'],
]

/**
 * Approximate USDA zone for a US ZIP code.
 * Returns a zone string like "7" or null if unknown.
 */
export function zipToZone(zip: string): string | null {
  const num = parseInt(zip, 10)
  if (isNaN(num)) return null

  for (const [lo, hi, zone] of ZIP_ZONE_RANGES) {
    if (num >= lo && num <= hi) return zone
  }

  return null
}

/* ─── Frost Date Estimates by Zone ─── */

/** Average first fall frost dates by zone (month, day). */
const FIRST_FROST: Record<string, [number, number]> = {
  '3':  [9, 10],   // Sep 10
  '4':  [9, 25],   // Sep 25
  '5':  [10, 10],  // Oct 10
  '6':  [10, 20],  // Oct 20
  '7':  [10, 30],  // Oct 30
  '8':  [11, 15],  // Nov 15
  '9':  [12, 5],   // Dec 5
  '10': [12, 25],  // Dec 25 (rare frost)
}

/** Average last spring frost dates by zone (month, day). */
const LAST_FROST: Record<string, [number, number]> = {
  '3':  [5, 25],  // May 25
  '4':  [5, 10],  // May 10
  '5':  [4, 25],  // Apr 25
  '6':  [4, 15],  // Apr 15
  '7':  [4, 5],   // Apr 5
  '8':  [3, 20],  // Mar 20
  '9':  [2, 28],  // Feb 28
  '10': [2, 1],   // Feb 1
}

/**
 * Estimated days until first fall frost from a given date.
 */
export function daysUntilFirstFrost(zone: string, from: Date = new Date()): number {
  const baseZone = zone.replace(/[ab]/i, '')
  const frost = FIRST_FROST[baseZone]
  if (!frost) return 180 // fallback

  const year = from.getFullYear()
  const frostDate = new Date(year, frost[0] - 1, frost[1])

  // If frost date has passed this year, use next year
  if (frostDate < from) {
    frostDate.setFullYear(year + 1)
  }

  return Math.max(0, Math.round((frostDate.getTime() - from.getTime()) / (1000 * 60 * 60 * 24)))
}

/**
 * Get last spring frost date string for display.
 */
export function lastFrostDate(zone: string): string | null {
  const baseZone = zone.replace(/[ab]/i, '')
  const frost = LAST_FROST[baseZone]
  if (!frost) return null
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[frost[0] - 1]} ${frost[1]}`
}

/**
 * Get first fall frost date string for display.
 */
export function firstFrostDate(zone: string): string | null {
  const baseZone = zone.replace(/[ab]/i, '')
  const frost = FIRST_FROST[baseZone]
  if (!frost) return null
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  return `${months[frost[0] - 1]} ${frost[1]}`
}

/** The simulated "now" date for the demo (matches mock data). */
export const SIM_NOW = new Date('2026-04-23')
