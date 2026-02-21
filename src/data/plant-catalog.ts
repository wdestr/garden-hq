/**
 * Comprehensive edible plant catalog.
 *
 * Each entry contains the plant name, notable varieties, a representative emoji,
 * an average days-to-maturity figure (from transplant / first fruit for perennials),
 * and a category tag for filtering.
 *
 * Sources: university extension guides, seed catalogs, USDA crop data.
 */

export interface CatalogEntry {
  name: string
  varieties: string[]
  emoji: string
  daysToMaturity: number
  category: string
}

// prettier-ignore
export const PLANT_CATALOG: CatalogEntry[] = [

  // ═══════════════════════════════════════════════════════════════════════════
  // FRUITS — Citrus
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Limes', varieties: ['Key Lime', 'Persian Lime', 'Kaffir Lime', 'Finger Lime', 'Bearss Lime'], emoji: '🍋‍🟩', daysToMaturity: 730, category: 'Fruits — Citrus' },
  { name: 'Lemons', varieties: ['Meyer Lemon', 'Eureka Lemon', 'Lisbon Lemon', 'Ponderosa Lemon', 'Variegated Pink Lemon'], emoji: '🍋', daysToMaturity: 730, category: 'Fruits — Citrus' },
  { name: 'Oranges', varieties: ['Navel', 'Valencia', 'Blood Orange', 'Cara Cara', 'Seville', 'Mandarin'], emoji: '🍊', daysToMaturity: 910, category: 'Fruits — Citrus' },
  { name: 'Grapefruits', varieties: ['Ruby Red', 'Marsh White', 'Star Ruby', 'Oro Blanco', 'Duncan'], emoji: '🍊', daysToMaturity: 1095, category: 'Fruits — Citrus' },
  { name: 'Tangerines', varieties: ['Clementine', 'Dancy', 'Satsuma', 'Honey Murcott', 'Pixie'], emoji: '🍊', daysToMaturity: 910, category: 'Fruits — Citrus' },
  { name: 'Kumquats', varieties: ['Nagami', 'Meiwa', 'Marumi', 'Centennial Variegated'], emoji: '🍊', daysToMaturity: 730, category: 'Fruits — Citrus' },
  { name: 'Pomelo', varieties: ['Chandler', 'Tahitian', 'Valentine', 'Hirado Buntan'], emoji: '🍊', daysToMaturity: 1095, category: 'Fruits — Citrus' },
  { name: 'Calamansi', varieties: ['Philippine Lime', 'Variegated Calamansi', 'Giant Calamansi'], emoji: '🍊', daysToMaturity: 730, category: 'Fruits — Citrus' },

  // ═══════════════════════════════════════════════════════════════════════════
  // FRUITS — Tropical
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Avocados', varieties: ['Hass', 'Fuerte', 'Bacon', 'Reed', 'Pinkerton', 'Lamb Hass', 'Zutano'], emoji: '🥑', daysToMaturity: 1460, category: 'Fruits — Tropical' },
  { name: 'Mangoes', varieties: ['Alphonso', 'Tommy Atkins', 'Haden', 'Kent', 'Keitt', 'Ataulfo', 'Palmer'], emoji: '🥭', daysToMaturity: 1825, category: 'Fruits — Tropical' },
  { name: 'Papayas', varieties: ['Solo', 'Maradol', 'Tainung', 'Strawberry Papaya', 'Mexican Red'], emoji: '🍈', daysToMaturity: 270, category: 'Fruits — Tropical' },
  { name: 'Passion Fruit', varieties: ['Purple Passion', 'Yellow Passion', 'Banana Passion', 'Sweet Granadilla', 'Frederick'], emoji: '🟣', daysToMaturity: 545, category: 'Fruits — Tropical' },
  { name: 'Guava', varieties: ['Tropical White', 'Ruby Supreme', 'Red Malaysian', 'Pineapple Guava', 'Mexican Cream', 'Strawberry Guava'], emoji: '🍈', daysToMaturity: 730, category: 'Fruits — Tropical' },
  { name: 'Dragon Fruit', varieties: ['American Beauty', 'Vietnamese White', 'Yellow Dragon', 'Edgar\'s Baby', 'Physical Graffiti', 'Cosmic Charlie'], emoji: '🐉', daysToMaturity: 545, category: 'Fruits — Tropical' },
  { name: 'Pineapple', varieties: ['Smooth Cayenne', 'Red Spanish', 'Queen', 'Sugarloaf', 'MD-2 Gold'], emoji: '🍍', daysToMaturity: 730, category: 'Fruits — Tropical' },
  { name: 'Bananas', varieties: ['Cavendish', 'Lady Finger', 'Blue Java', 'Red Banana', 'Plantain', 'Dwarf Namwah', 'Goldfinger'], emoji: '🍌', daysToMaturity: 365, category: 'Fruits — Tropical' },
  { name: 'Coconut', varieties: ['Malayan Dwarf', 'Fiji Dwarf', 'Maypan', 'King Coconut', 'Green Dwarf'], emoji: '🥥', daysToMaturity: 2190, category: 'Fruits — Tropical' },
  { name: 'Lychee', varieties: ['Brewster', 'Mauritius', 'Sweetheart', 'Emperor', 'Hak Ip'], emoji: '🔴', daysToMaturity: 1825, category: 'Fruits — Tropical' },
  { name: 'Starfruit', varieties: ['Arkin', 'Fwang Tung', 'Kary', 'Sri Kembangan', 'B-10'], emoji: '⭐', daysToMaturity: 1095, category: 'Fruits — Tropical' },
  { name: 'Jackfruit', varieties: ['Black Gold', 'Cheena', 'Cochin', 'NS-1', 'Golden Nugget'], emoji: '🟡', daysToMaturity: 1095, category: 'Fruits — Tropical' },
  { name: 'Soursop', varieties: ['Giant', 'Tropical Delight', 'Fibrous', 'Colombian'], emoji: '🟢', daysToMaturity: 1095, category: 'Fruits — Tropical' },
  { name: 'Cherimoya', varieties: ['Bays', 'El Bumpo', 'Pierce', 'White', 'Booth'], emoji: '🟢', daysToMaturity: 1460, category: 'Fruits — Tropical' },
  { name: 'Sapodilla', varieties: ['Hasya', 'Morena', 'Prolific', 'Tikal', 'Brown Sugar'], emoji: '🟤', daysToMaturity: 1825, category: 'Fruits — Tropical' },
  { name: 'Rambutan', varieties: ['R-134', 'R-156', 'Jitlee', 'Rongrien'], emoji: '🔴', daysToMaturity: 1825, category: 'Fruits — Tropical' },
  { name: 'Longan', varieties: ['Kohala', 'Biew Kiew', 'Sri Chompoo', 'Diamond River'], emoji: '🟤', daysToMaturity: 1825, category: 'Fruits — Tropical' },
  { name: 'Tamarind', varieties: ['Sweet Tamarind', 'Manila Sweet', 'Makham Thong', 'Giant'], emoji: '🟤', daysToMaturity: 2190, category: 'Fruits — Tropical' },

  // ═══════════════════════════════════════════════════════════════════════════
  // FRUITS — Berries
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Strawberries', varieties: ['Albion', 'Seascape', 'Chandler', 'Ozark Beauty', 'Earliglow', 'Jewel', 'Sweet Charlie'], emoji: '🍓', daysToMaturity: 90, category: 'Fruits — Berries' },
  { name: 'Blueberries', varieties: ['Duke', 'Bluecrop', 'Jersey', 'Patriot', 'Pink Lemonade', 'Sunshine Blue', 'Climax'], emoji: '🫐', daysToMaturity: 730, category: 'Fruits — Berries' },
  { name: 'Raspberries', varieties: ['Heritage', 'Caroline', 'Autumn Bliss', 'Tulameen', 'Jewel (Black)', 'Anne (Yellow)', 'Boyne'], emoji: '🫐', daysToMaturity: 545, category: 'Fruits — Berries' },
  { name: 'Blackberries', varieties: ['Triple Crown', 'Navaho', 'Chester', 'Ouachita', 'Apache', 'Prime-Ark Freedom', 'Thornfree'], emoji: '🫐', daysToMaturity: 545, category: 'Fruits — Berries' },
  { name: 'Cranberries', varieties: ['Stevens', 'Ben Lear', 'Pilgrim', 'Early Black', 'Howes'], emoji: '🔴', daysToMaturity: 1095, category: 'Fruits — Berries' },
  { name: 'Gooseberries', varieties: ['Invicta', 'Hinnonmaki Red', 'Pixwell', 'Captivator', 'Black Velvet'], emoji: '🟢', daysToMaturity: 730, category: 'Fruits — Berries' },
  { name: 'Currants', varieties: ['Red Lake', 'Rovada', 'Ben Sarek (Black)', 'White Versailles', 'Crandall (Clove)'], emoji: '🔴', daysToMaturity: 730, category: 'Fruits — Berries' },
  { name: 'Elderberries', varieties: ['Adams', 'York', 'Johns', 'Nova', 'Bob Gordon', 'Black Lace'], emoji: '🟣', daysToMaturity: 730, category: 'Fruits — Berries' },
  { name: 'Mulberries', varieties: ['Illinois Everbearing', 'Pakistan', 'Shangri-La', 'Oscar', 'Dwarf Everbearing'], emoji: '🟣', daysToMaturity: 730, category: 'Fruits — Berries' },
  { name: 'Boysenberries', varieties: ['Thornless Boysenberry', 'Brulee', 'Original Thorny'], emoji: '🟣', daysToMaturity: 545, category: 'Fruits — Berries' },
  { name: 'Lingonberries', varieties: ['Koralle', 'Red Pearl', 'Sanna', 'Balsgard'], emoji: '🔴', daysToMaturity: 730, category: 'Fruits — Berries' },
  { name: 'Goji Berries', varieties: ['Crimson Star', 'Phoenix Tears', 'Big Lifeberry', 'Sweet Lifeberry'], emoji: '🔴', daysToMaturity: 730, category: 'Fruits — Berries' },
  { name: 'Huckleberries', varieties: ['Garden Huckleberry', 'Evergreen', 'Black', 'Red'], emoji: '🟣', daysToMaturity: 730, category: 'Fruits — Berries' },

  // ═══════════════════════════════════════════════════════════════════════════
  // FRUITS — Tree Fruits
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Apples', varieties: ['Honeycrisp', 'Fuji', 'Granny Smith', 'Gala', 'Pink Lady', 'Golden Delicious', 'Braeburn', 'McIntosh'], emoji: '🍎', daysToMaturity: 1460, category: 'Fruits — Tree Fruits' },
  { name: 'Pears', varieties: ['Bartlett', 'Anjou', 'Bosc', 'Comice', 'Asian (Hosui)', 'Seckel', 'Conference'], emoji: '🍐', daysToMaturity: 1460, category: 'Fruits — Tree Fruits' },
  { name: 'Peaches', varieties: ['Elberta', 'Redhaven', 'Belle of Georgia', 'Contender', 'Donut (Saturn)', 'O\'Henry', 'Hale Haven'], emoji: '🍑', daysToMaturity: 1095, category: 'Fruits — Tree Fruits' },
  { name: 'Plums', varieties: ['Santa Rosa', 'Satsuma', 'Stanley', 'Italian Prune', 'Methley', 'Green Gage', 'Shiro'], emoji: '🟣', daysToMaturity: 1095, category: 'Fruits — Tree Fruits' },
  { name: 'Cherries', varieties: ['Bing', 'Rainier', 'Stella', 'Montmorency (Tart)', 'Lapins', 'Black Tartarian', 'North Star'], emoji: '🍒', daysToMaturity: 1460, category: 'Fruits — Tree Fruits' },
  { name: 'Apricots', varieties: ['Blenheim (Royal)', 'Goldcot', 'Moorpark', 'Tilton', 'Harglow', 'Puget Gold'], emoji: '🍑', daysToMaturity: 1095, category: 'Fruits — Tree Fruits' },
  { name: 'Nectarines', varieties: ['Fantasia', 'Flavortop', 'Arctic Star', 'Independence', 'Goldmine', 'Sunraycer'], emoji: '🍑', daysToMaturity: 1095, category: 'Fruits — Tree Fruits' },
  { name: 'Figs', varieties: ['Black Mission', 'Brown Turkey', 'Kadota', 'Celeste', 'Chicago Hardy', 'Adriatic', 'Tiger'], emoji: '🟤', daysToMaturity: 545, category: 'Fruits — Tree Fruits' },
  { name: 'Pomegranates', varieties: ['Wonderful', 'Eversweet', 'Angel Red', 'Parfianka', 'Granada', 'Sweet'], emoji: '🔴', daysToMaturity: 730, category: 'Fruits — Tree Fruits' },
  { name: 'Persimmons', varieties: ['Fuyu', 'Hachiya', 'Chocolate', 'Jiro', 'Giant Fuyu', 'Saijo', 'Tanenashi'], emoji: '🟠', daysToMaturity: 1095, category: 'Fruits — Tree Fruits' },
  { name: 'Olives', varieties: ['Mission', 'Manzanilla', 'Arbequina', 'Kalamata', 'Picual', 'Leccino'], emoji: '🫒', daysToMaturity: 1460, category: 'Fruits — Tree Fruits' },
  { name: 'Quince', varieties: ['Pineapple', 'Orange', 'Champion', 'Smyrna', 'Aromatnaya'], emoji: '🍐', daysToMaturity: 1095, category: 'Fruits — Tree Fruits' },
  { name: 'Jujube', varieties: ['Li', 'Lang', 'Honey Jar', 'Shanxi Li', 'Sugar Cane', 'Sherwood'], emoji: '🟤', daysToMaturity: 1095, category: 'Fruits — Tree Fruits' },
  { name: 'Pawpaw', varieties: ['Sunflower', 'Shenandoah', 'Susquehanna', 'Mango', 'Peterson', 'Wabash'], emoji: '🟢', daysToMaturity: 1825, category: 'Fruits — Tree Fruits' },
  { name: 'Medlar', varieties: ['Royal', 'Nottingham', 'Breda Giant', 'Dutch'], emoji: '🟤', daysToMaturity: 1095, category: 'Fruits — Tree Fruits' },
  { name: 'Crabapples', varieties: ['Dolgo', 'Chestnut', 'Whitney', 'Transcendent', 'Centennial'], emoji: '🍎', daysToMaturity: 1095, category: 'Fruits — Tree Fruits' },

  // ═══════════════════════════════════════════════════════════════════════════
  // FRUITS — Melons
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Watermelon', varieties: ['Crimson Sweet', 'Sugar Baby', 'Charleston Gray', 'Jubilee', 'Yellow Doll', 'Moon & Stars', 'Orangeglo'], emoji: '🍉', daysToMaturity: 85, category: 'Fruits — Melons' },
  { name: 'Cantaloupe', varieties: ['Hales Best', 'Ambrosia', 'Hearts of Gold', 'Sugar Cube', 'Athena', 'Edisto 47'], emoji: '🍈', daysToMaturity: 80, category: 'Fruits — Melons' },
  { name: 'Honeydew', varieties: ['Green Flesh', 'Orange Flesh', 'Honey Gold', 'Snow Mass', 'Tam Dew'], emoji: '🍈', daysToMaturity: 90, category: 'Fruits — Melons' },
  { name: 'Casaba Melon', varieties: ['Golden Beauty', 'Sungold', 'Santa Claus', 'Crenshaw'], emoji: '🍈', daysToMaturity: 95, category: 'Fruits — Melons' },
  { name: 'Galia Melon', varieties: ['Galia', 'Passport', 'Diplomat', 'Arava'], emoji: '🍈', daysToMaturity: 80, category: 'Fruits — Melons' },
  { name: 'Bitter Melon', varieties: ['Indian Long', 'Chinese Green', 'White Pearl', 'Jade'], emoji: '🍈', daysToMaturity: 60, category: 'Fruits — Melons' },

  // ═══════════════════════════════════════════════════════════════════════════
  // FRUITS — Vine Fruits
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Grapes', varieties: ['Concord', 'Thompson Seedless', 'Flame Seedless', 'Muscadine', 'Niagara', 'Crimson Seedless', 'Champagne'], emoji: '🍇', daysToMaturity: 1095, category: 'Fruits — Vine Fruits' },
  { name: 'Kiwi', varieties: ['Hayward', 'Hardy (Issai)', 'Golden Kiwi', 'Red Kiwi', 'Arctic Beauty', 'Jenny'], emoji: '🥝', daysToMaturity: 1460, category: 'Fruits — Vine Fruits' },
  { name: 'Hardy Kiwi', varieties: ['Issai', 'Ananasnaya', 'Ken\'s Red', 'Geneva', 'Dumbarton Oaks'], emoji: '🥝', daysToMaturity: 1095, category: 'Fruits — Vine Fruits' },
  { name: 'Hops', varieties: ['Cascade', 'Centennial', 'Chinook', 'Nugget', 'Willamette', 'Saaz'], emoji: '🌿', daysToMaturity: 120, category: 'Fruits — Vine Fruits' },
  { name: 'Maypop (Passionflower)', varieties: ['Incense', 'Maypop Native', 'Lady Margaret', 'Blue Crown'], emoji: '💜', daysToMaturity: 545, category: 'Fruits — Vine Fruits' },

  // ═══════════════════════════════════════════════════════════════════════════
  // VEGETABLES — Leafy Greens
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Lettuce', varieties: ['Buttercrunch', 'Romaine', 'Iceberg', 'Red Leaf', 'Oak Leaf', 'Little Gem', 'Lollo Rossa'], emoji: '🥬', daysToMaturity: 45, category: 'Vegetables — Leafy Greens' },
  { name: 'Spinach', varieties: ['Bloomsdale', 'Baby Leaf', 'Savoy', 'Space', 'Giant Nobel', 'Malabar'], emoji: '🥬', daysToMaturity: 40, category: 'Vegetables — Leafy Greens' },
  { name: 'Kale', varieties: ['Lacinato (Dinosaur)', 'Curly Green', 'Red Russian', 'Winterbor', 'Scarlet', 'Dwarf Blue Curled'], emoji: '🥬', daysToMaturity: 55, category: 'Vegetables — Leafy Greens' },
  { name: 'Swiss Chard', varieties: ['Bright Lights', 'Fordhook Giant', 'Ruby Red', 'Rhubarb Chard', 'Peppermint'], emoji: '🥬', daysToMaturity: 50, category: 'Vegetables — Leafy Greens' },
  { name: 'Arugula', varieties: ['Astro', 'Rocket', 'Wasabi', 'Wild (Sylvetta)', 'Surrey'], emoji: '🥬', daysToMaturity: 30, category: 'Vegetables — Leafy Greens' },
  { name: 'Collard Greens', varieties: ['Georgia Southern', 'Vates', 'Champion', 'Morris Heading', 'Flash'], emoji: '🥬', daysToMaturity: 60, category: 'Vegetables — Leafy Greens' },
  { name: 'Mustard Greens', varieties: ['Red Giant', 'Tatsoi', 'Mizuna', 'Green Wave', 'Ruby Streaks', 'Golden Frill'], emoji: '🥬', daysToMaturity: 35, category: 'Vegetables — Leafy Greens' },
  { name: 'Endive', varieties: ['Broad Batavian', 'Frisee', 'Belgian Endive (Witloof)', 'Rhodos'], emoji: '🥬', daysToMaturity: 50, category: 'Vegetables — Leafy Greens' },
  { name: 'Radicchio', varieties: ['Chioggia', 'Treviso', 'Castelfranco', 'Palla Rossa'], emoji: '🥬', daysToMaturity: 65, category: 'Vegetables — Leafy Greens' },
  { name: 'Bok Choy', varieties: ['Toy Choy', 'Shanghai', 'Mei Qing Choi', 'Win-Win', 'Canton'], emoji: '🥬', daysToMaturity: 40, category: 'Vegetables — Leafy Greens' },
  { name: 'Watercress', varieties: ['Broadleaf', 'Curly', 'Aqua', 'Large Leaf'], emoji: '🌱', daysToMaturity: 30, category: 'Vegetables — Leafy Greens' },
  { name: 'Sorrel', varieties: ['Garden Sorrel', 'French Sorrel', 'Blood-Veined', 'Red-Veined'], emoji: '🌱', daysToMaturity: 40, category: 'Vegetables — Leafy Greens' },
  { name: 'Microgreens', varieties: ['Sunflower', 'Pea Shoots', 'Radish', 'Broccoli', 'Wheatgrass', 'Amaranth'], emoji: '🌱', daysToMaturity: 10, category: 'Vegetables — Leafy Greens' },

  // ═══════════════════════════════════════════════════════════════════════════
  // VEGETABLES — Root Vegetables
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Carrots', varieties: ['Nantes', 'Danvers', 'Chantenay', 'Imperator', 'Purple Haze', 'Cosmic Purple', 'Little Finger'], emoji: '🥕', daysToMaturity: 70, category: 'Vegetables — Root Vegetables' },
  { name: 'Beets', varieties: ['Detroit Dark Red', 'Chioggia', 'Golden', 'Bull\'s Blood', 'Cylindra', 'Avalanche (White)'], emoji: '🟣', daysToMaturity: 55, category: 'Vegetables — Root Vegetables' },
  { name: 'Radishes', varieties: ['Cherry Belle', 'French Breakfast', 'Watermelon', 'Daikon', 'Black Spanish', 'Easter Egg Mix'], emoji: '🟥', daysToMaturity: 25, category: 'Vegetables — Root Vegetables' },
  { name: 'Turnips', varieties: ['Purple Top White Globe', 'Tokyo Cross', 'Hakurei', 'Scarlet Queen', 'Gold Ball'], emoji: '🟣', daysToMaturity: 50, category: 'Vegetables — Root Vegetables' },
  { name: 'Parsnips', varieties: ['Hollow Crown', 'Gladiator', 'Harris Model', 'Albion', 'Lancer'], emoji: '🥕', daysToMaturity: 100, category: 'Vegetables — Root Vegetables' },
  { name: 'Rutabaga', varieties: ['American Purple Top', 'Laurentian', 'Joan', 'Helenor', 'Wilhelmsburger'], emoji: '🟣', daysToMaturity: 90, category: 'Vegetables — Root Vegetables' },
  { name: 'Sweet Potatoes', varieties: ['Beauregard', 'Jewel', 'Covington', 'Georgia Jet', 'Japanese (Murasaki)', 'Hannah', 'Garnet'], emoji: '🍠', daysToMaturity: 100, category: 'Vegetables — Root Vegetables' },
  { name: 'Potatoes', varieties: ['Yukon Gold', 'Russet', 'Red Pontiac', 'Fingerling', 'Kennebec', 'Purple Majesty', 'All Blue'], emoji: '🥔', daysToMaturity: 90, category: 'Vegetables — Root Vegetables' },
  { name: 'Ginger', varieties: ['Common Ginger', 'Baby Ginger', 'Blue Hawaiian', 'Yellow Ginger', 'Galangal'], emoji: '🫚', daysToMaturity: 240, category: 'Vegetables — Root Vegetables' },
  { name: 'Turmeric', varieties: ['Alleppey', 'Madras', 'Hawaiian Red', 'White Turmeric', 'Indira Yellow'], emoji: '🟡', daysToMaturity: 270, category: 'Vegetables — Root Vegetables' },
  { name: 'Horseradish', varieties: ['Common', 'Bohemian', 'Maliner Kren', 'Big Top Western'], emoji: '🌱', daysToMaturity: 150, category: 'Vegetables — Root Vegetables' },
  { name: 'Celeriac', varieties: ['Brilliant', 'Giant Prague', 'Diamant', 'Mars', 'Monarch'], emoji: '🟤', daysToMaturity: 110, category: 'Vegetables — Root Vegetables' },
  { name: 'Jicama', varieties: ['Mexican Yam Bean', 'San Pablo', 'Agua'], emoji: '🟤', daysToMaturity: 150, category: 'Vegetables — Root Vegetables' },
  { name: 'Taro', varieties: ['Dasheen', 'Eddoe', 'Bun Long', 'Lehua Maoli'], emoji: '🟤', daysToMaturity: 210, category: 'Vegetables — Root Vegetables' },
  { name: 'Yams', varieties: ['Japanese Mountain Yam', 'Chinese Yam', 'Purple Yam (Ube)', 'White Guinea Yam'], emoji: '🍠', daysToMaturity: 240, category: 'Vegetables — Root Vegetables' },
  { name: 'Sunchokes', varieties: ['Stampede', 'Red Fuseau', 'Clearwater', 'Dwarf Sunray'], emoji: '🌻', daysToMaturity: 120, category: 'Vegetables — Root Vegetables' },

  // ═══════════════════════════════════════════════════════════════════════════
  // VEGETABLES — Nightshades
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Tomatoes', varieties: ['Cherry (Sun Gold)', 'Roma', 'Beefsteak', 'Brandywine', 'Cherokee Purple', 'San Marzano', 'Green Zebra', 'Black Krim'], emoji: '🍅', daysToMaturity: 75, category: 'Vegetables — Nightshades' },
  { name: 'Peppers (Sweet)', varieties: ['California Wonder', 'Red Bell', 'Orange Bell', 'Jimmy Nardello', 'Sweet Banana', 'Shishito', 'Cubanelle'], emoji: '🫑', daysToMaturity: 70, category: 'Vegetables — Nightshades' },
  { name: 'Peppers (Hot)', varieties: ['Jalapeno', 'Habanero', 'Serrano', 'Cayenne', 'Thai Chili', 'Ghost Pepper', 'Carolina Reaper', 'Poblano', 'Anaheim'], emoji: '🌶️', daysToMaturity: 80, category: 'Vegetables — Nightshades' },
  { name: 'Eggplant', varieties: ['Black Beauty', 'Japanese (Ichiban)', 'Rosa Bianca', 'Graffiti', 'Thai', 'Fairy Tale', 'Listada de Gandia'], emoji: '🍆', daysToMaturity: 70, category: 'Vegetables — Nightshades' },
  { name: 'Tomatillos', varieties: ['Verde', 'Purple', 'Pineapple', 'Grande Rio Verde', 'Amarylla'], emoji: '🟢', daysToMaturity: 70, category: 'Vegetables — Nightshades' },
  { name: 'Ground Cherries', varieties: ['Aunt Molly\'s', 'Cossack Pineapple', 'Goldie', 'Schoenbrunn Gold'], emoji: '🟡', daysToMaturity: 70, category: 'Vegetables — Nightshades' },

  // ═══════════════════════════════════════════════════════════════════════════
  // VEGETABLES — Cruciferous
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Broccoli', varieties: ['Calabrese', 'Waltham 29', 'De Cicco', 'Marathon', 'Belstar', 'Sprouting (Purple)'], emoji: '🥦', daysToMaturity: 60, category: 'Vegetables — Cruciferous' },
  { name: 'Cauliflower', varieties: ['Snowball', 'Cheddar (Orange)', 'Graffiti (Purple)', 'Romanesco', 'Amazing', 'Self-Blanche'], emoji: '🥦', daysToMaturity: 70, category: 'Vegetables — Cruciferous' },
  { name: 'Cabbage', varieties: ['Golden Acre', 'Red Acre', 'Napa (Michihili)', 'Savoy King', 'Brunswick', 'Copenhagen Market'], emoji: '🥬', daysToMaturity: 70, category: 'Vegetables — Cruciferous' },
  { name: 'Brussels Sprouts', varieties: ['Long Island Improved', 'Jade Cross', 'Catskill', 'Franklin', 'Diablo', 'Churchill'], emoji: '🥬', daysToMaturity: 90, category: 'Vegetables — Cruciferous' },
  { name: 'Kohlrabi', varieties: ['Purple Vienna', 'White Vienna', 'Kolibri', 'Winner', 'Kossak (Giant)'], emoji: '🟢', daysToMaturity: 50, category: 'Vegetables — Cruciferous' },
  { name: 'Broccoli Rabe', varieties: ['Rapini', 'Sessantina', 'Spring Raab', 'Zamboni'], emoji: '🥦', daysToMaturity: 45, category: 'Vegetables — Cruciferous' },

  // ═══════════════════════════════════════════════════════════════════════════
  // VEGETABLES — Alliums
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Onions', varieties: ['Yellow Sweet Spanish', 'Red Burgundy', 'Walla Walla', 'Cipollini', 'Vidalia', 'Texas 1015', 'Candy'], emoji: '🧅', daysToMaturity: 100, category: 'Vegetables — Alliums' },
  { name: 'Garlic', varieties: ['Softneck (California Early)', 'Hardneck (Music)', 'Elephant Garlic', 'Chesnok Red', 'German Extra Hardy', 'Inchelium Red'], emoji: '🧄', daysToMaturity: 240, category: 'Vegetables — Alliums' },
  { name: 'Leeks', varieties: ['American Flag', 'King Richard', 'Musselburgh', 'Giant Carentan', 'Bandit', 'Blue Solaise'], emoji: '🧅', daysToMaturity: 100, category: 'Vegetables — Alliums' },
  { name: 'Shallots', varieties: ['French Gray', 'Dutch Yellow', 'Ambition', 'Conservor', 'Zebrune'], emoji: '🧅', daysToMaturity: 90, category: 'Vegetables — Alliums' },
  { name: 'Green Onions (Scallions)', varieties: ['Evergreen Hardy', 'Tokyo Long', 'Parade', 'Red Beard', 'Warrior'], emoji: '🧅', daysToMaturity: 60, category: 'Vegetables — Alliums' },
  { name: 'Chives', varieties: ['Common Chives', 'Garlic Chives', 'Giant Siberian', 'Staro', 'Purly'], emoji: '🌿', daysToMaturity: 60, category: 'Vegetables — Alliums' },

  // ═══════════════════════════════════════════════════════════════════════════
  // VEGETABLES — Legumes
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Green Beans', varieties: ['Blue Lake', 'Provider', 'Contender', 'Kentucky Wonder (Pole)', 'Dragon Tongue', 'Haricots Verts', 'Royal Burgundy'], emoji: '🫘', daysToMaturity: 55, category: 'Vegetables — Legumes' },
  { name: 'Snap Peas', varieties: ['Sugar Snap', 'Super Sugar Snap', 'Cascadia', 'Sugar Ann', 'Amish Snap'], emoji: '🫛', daysToMaturity: 60, category: 'Vegetables — Legumes' },
  { name: 'Snow Peas', varieties: ['Oregon Sugar Pod', 'Mammoth Melting Sugar', 'Oregon Giant', 'Golden Sweet'], emoji: '🫛', daysToMaturity: 60, category: 'Vegetables — Legumes' },
  { name: 'Shelling Peas', varieties: ['Green Arrow', 'Lincoln', 'Little Marvel', 'Wando', 'Alderman (Tall Telephone)'], emoji: '🫛', daysToMaturity: 65, category: 'Vegetables — Legumes' },
  { name: 'Lima Beans', varieties: ['Henderson Bush', 'Fordhook 242', 'King of the Garden', 'Christmas', 'Jackson Wonder'], emoji: '🫘', daysToMaturity: 75, category: 'Vegetables — Legumes' },
  { name: 'Edamame', varieties: ['Butterbean', 'Chiba Green', 'Envy', 'Midori Giant', 'BeSweet'], emoji: '🫛', daysToMaturity: 80, category: 'Vegetables — Legumes' },
  { name: 'Fava Beans', varieties: ['Windsor', 'Broad Windsor', 'Aquadulce', 'Crimson Flowered', 'Vroma'], emoji: '🫘', daysToMaturity: 80, category: 'Vegetables — Legumes' },
  { name: 'Lentils', varieties: ['Red Chief', 'Pardina', 'French Green (Puy)', 'Black Beluga', 'Crimson'], emoji: '🫘', daysToMaturity: 100, category: 'Vegetables — Legumes' },
  { name: 'Chickpeas', varieties: ['Desi', 'Kabuli', 'Black Kaala Chana', 'Sierra', 'Cole'], emoji: '🫘', daysToMaturity: 100, category: 'Vegetables — Legumes' },
  { name: 'Cowpeas (Black-Eyed Peas)', varieties: ['California Blackeye', 'Queen Anne', 'Mississippi Silver', 'Pinkeye Purple Hull', 'Iron Clay'], emoji: '🫘', daysToMaturity: 70, category: 'Vegetables — Legumes' },
  { name: 'Peanuts', varieties: ['Virginia', 'Valencia', 'Spanish', 'Runner', 'Tennessee Red'], emoji: '🥜', daysToMaturity: 120, category: 'Vegetables — Legumes' },

  // ═══════════════════════════════════════════════════════════════════════════
  // VEGETABLES — Squash & Gourds
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Zucchini', varieties: ['Black Beauty', 'Golden', 'Costata Romanesco', 'Dark Star', 'Dunja', 'Raven'], emoji: '🥒', daysToMaturity: 50, category: 'Vegetables — Squash & Gourds' },
  { name: 'Yellow Squash', varieties: ['Early Prolific Straightneck', 'Crookneck', 'Yellow Scallop', 'Gold Rush', 'Superpik'], emoji: '🟡', daysToMaturity: 50, category: 'Vegetables — Squash & Gourds' },
  { name: 'Butternut Squash', varieties: ['Waltham', 'Butterbush', 'Honeynut', 'JWS 6823', 'Metro'], emoji: '🎃', daysToMaturity: 100, category: 'Vegetables — Squash & Gourds' },
  { name: 'Acorn Squash', varieties: ['Table Queen', 'Carnival', 'Honey Bear', 'Sweet REBA', 'Table Gold'], emoji: '🎃', daysToMaturity: 85, category: 'Vegetables — Squash & Gourds' },
  { name: 'Spaghetti Squash', varieties: ['Vegetable Spaghetti', 'Orangetti', 'Small Wonder', 'Tivoli'], emoji: '🎃', daysToMaturity: 90, category: 'Vegetables — Squash & Gourds' },
  { name: 'Delicata Squash', varieties: ['Cornell\'s Bush Delicata', 'Honey Boat', 'Sugar Loaf', 'Zeppelin'], emoji: '🎃', daysToMaturity: 80, category: 'Vegetables — Squash & Gourds' },
  { name: 'Pumpkins', varieties: ['Jack O\'Lantern', 'Sugar Pie', 'Cinderella (Rouge Vif)', 'Atlantic Giant', 'Lumina (White)', 'Baby Boo', 'Jarrahdale'], emoji: '🎃', daysToMaturity: 100, category: 'Vegetables — Squash & Gourds' },
  { name: 'Hubbard Squash', varieties: ['Blue Hubbard', 'Golden Hubbard', 'Baby Blue', 'Chicago Warted'], emoji: '🎃', daysToMaturity: 110, category: 'Vegetables — Squash & Gourds' },
  { name: 'Kabocha Squash', varieties: ['Red Kuri', 'Sunshine', 'Burgess Buttercup', 'Sweet Mama', 'Cha Cha'], emoji: '🎃', daysToMaturity: 95, category: 'Vegetables — Squash & Gourds' },
  { name: 'Cucumbers', varieties: ['Marketmore', 'Straight Eight', 'Lemon', 'Persian', 'Kirby (Pickling)', 'Armenian', 'Japanese (Suyo Long)'], emoji: '🥒', daysToMaturity: 55, category: 'Vegetables — Squash & Gourds' },
  { name: 'Luffa (Loofah)', varieties: ['Smooth Luffa', 'Angled Luffa', 'Chinese Okra'], emoji: '🟢', daysToMaturity: 90, category: 'Vegetables — Squash & Gourds' },
  { name: 'Bottle Gourd', varieties: ['Birdhouse', 'Long Handle Dipper', 'Bushel Basket', 'Penguin'], emoji: '🟢', daysToMaturity: 100, category: 'Vegetables — Squash & Gourds' },
  { name: 'Chayote', varieties: ['Green Smooth', 'White', 'Prickly', 'Costa Rican'], emoji: '🟢', daysToMaturity: 120, category: 'Vegetables — Squash & Gourds' },

  // ═══════════════════════════════════════════════════════════════════════════
  // VEGETABLES — Corn & Grains
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Sweet Corn', varieties: ['Silver Queen', 'Peaches & Cream', 'Golden Bantam', 'Honey Select', 'Mirai', 'Illini Xtra Sweet'], emoji: '🌽', daysToMaturity: 75, category: 'Vegetables — Corn & Grains' },
  { name: 'Popcorn', varieties: ['Tom Thumb', 'Strawberry', 'Japanese Hulless', 'Robust', 'Dakota Black'], emoji: '🍿', daysToMaturity: 100, category: 'Vegetables — Corn & Grains' },
  { name: 'Flour Corn', varieties: ['Hopi Blue', 'Oaxacan Green', 'Painted Mountain', 'Tuscarora'], emoji: '🌽', daysToMaturity: 100, category: 'Vegetables — Corn & Grains' },
  { name: 'Wheat', varieties: ['Hard Red Spring', 'Soft White Winter', 'Durum', 'Emmer (Farro)', 'Einkorn'], emoji: '🌾', daysToMaturity: 120, category: 'Vegetables — Corn & Grains' },
  { name: 'Oats', varieties: ['Ogle', 'Jerry', 'Streaker (Hulless)', 'Common'], emoji: '🌾', daysToMaturity: 100, category: 'Vegetables — Corn & Grains' },
  { name: 'Rice', varieties: ['Jasmine', 'Basmati', 'Arborio', 'Forbidden Black', 'Carolina Gold'], emoji: '🌾', daysToMaturity: 120, category: 'Vegetables — Corn & Grains' },
  { name: 'Barley', varieties: ['Bere', 'Purple (Ethiopian)', 'Robust', 'Conlon', 'Lacey'], emoji: '🌾', daysToMaturity: 90, category: 'Vegetables — Corn & Grains' },
  { name: 'Sorghum', varieties: ['Dale', 'Sugar Drip', 'Mennonite', 'Black Amber', 'Tarahumara'], emoji: '🌾', daysToMaturity: 110, category: 'Vegetables — Corn & Grains' },
  { name: 'Quinoa', varieties: ['Cherry Vanilla', 'Brightest Brilliant Rainbow', 'Dave', 'Oro de Valle', 'Red Head'], emoji: '🌾', daysToMaturity: 90, category: 'Vegetables — Corn & Grains' },
  { name: 'Amaranth', varieties: ['Burgundy', 'Golden Giant', 'Plainsman', 'Hopi Red Dye', 'Love Lies Bleeding'], emoji: '🌾', daysToMaturity: 90, category: 'Vegetables — Corn & Grains' },
  { name: 'Buckwheat', varieties: ['Mancan', 'Japanese', 'Common', 'Tartary'], emoji: '🌾', daysToMaturity: 75, category: 'Vegetables — Corn & Grains' },
  { name: 'Millet', varieties: ['Proso', 'Pearl', 'Japanese', 'Foxtail'], emoji: '🌾', daysToMaturity: 70, category: 'Vegetables — Corn & Grains' },

  // ═══════════════════════════════════════════════════════════════════════════
  // VEGETABLES — Other
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Celery', varieties: ['Tall Utah', 'Golden Pascal', 'Tango', 'Ventura', 'Giant Red'], emoji: '🌿', daysToMaturity: 100, category: 'Vegetables — Other' },
  { name: 'Asparagus', varieties: ['Mary Washington', 'Jersey Knight', 'Purple Passion', 'Millennium', 'Sweet Purple'], emoji: '🌿', daysToMaturity: 730, category: 'Vegetables — Other' },
  { name: 'Rhubarb', varieties: ['Victoria', 'Crimson Red', 'Canada Red', 'Valentine', 'Chipman\'s'], emoji: '🟥', daysToMaturity: 730, category: 'Vegetables — Other' },
  { name: 'Artichokes', varieties: ['Green Globe', 'Imperial Star', 'Violetto', 'Big Heart', 'Purple of Romagna'], emoji: '🌿', daysToMaturity: 180, category: 'Vegetables — Other' },
  { name: 'Okra', varieties: ['Clemson Spineless', 'Burgundy', 'Emerald', 'Hill Country Heirloom Red', 'Star of David', 'Jambalaya'], emoji: '🟢', daysToMaturity: 55, category: 'Vegetables — Other' },
  { name: 'Fennel', varieties: ['Florence', 'Orion', 'Zefa Fino', 'Perfection', 'Bronze'], emoji: '🌿', daysToMaturity: 65, category: 'Vegetables — Other' },
  { name: 'Mushrooms', varieties: ['Shiitake', 'Oyster', 'Lion\'s Mane', 'King Trumpet', 'Wine Cap', 'Maitake', 'Reishi', 'Morel'], emoji: '🍄', daysToMaturity: 60, category: 'Vegetables — Other' },
  { name: 'Sprouts', varieties: ['Alfalfa', 'Mung Bean', 'Broccoli', 'Clover', 'Radish', 'Lentil'], emoji: '🌱', daysToMaturity: 5, category: 'Vegetables — Other' },

  // ═══════════════════════════════════════════════════════════════════════════
  // HERBS — Culinary
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Basil', varieties: ['Sweet Genovese', 'Thai', 'Purple Opal', 'Lemon', 'Cinnamon', 'African Blue', 'Holy (Tulsi)'], emoji: '🌿', daysToMaturity: 60, category: 'Herbs — Culinary' },
  { name: 'Cilantro', varieties: ['Slow Bolt', 'Santo', 'Calypso', 'Long Standing', 'Confetti'], emoji: '🌿', daysToMaturity: 45, category: 'Herbs — Culinary' },
  { name: 'Parsley', varieties: ['Italian Flat Leaf', 'Curly (Moss)', 'Hamburg Root', 'Giant of Italy', 'Titan'], emoji: '🌿', daysToMaturity: 70, category: 'Herbs — Culinary' },
  { name: 'Dill', varieties: ['Bouquet', 'Mammoth', 'Fernleaf', 'Hera', 'Long Island Mammoth'], emoji: '🌿', daysToMaturity: 50, category: 'Herbs — Culinary' },
  { name: 'Mint', varieties: ['Peppermint', 'Spearmint', 'Chocolate Mint', 'Apple Mint', 'Mojito Mint', 'Orange Mint'], emoji: '🌿', daysToMaturity: 60, category: 'Herbs — Culinary' },
  { name: 'Oregano', varieties: ['Greek', 'Italian', 'Mexican', 'Hot & Spicy', 'Golden'], emoji: '🌿', daysToMaturity: 80, category: 'Herbs — Culinary' },
  { name: 'Thyme', varieties: ['English', 'French', 'Lemon', 'Creeping', 'Silver', 'Orange Balsam'], emoji: '🌿', daysToMaturity: 75, category: 'Herbs — Culinary' },
  { name: 'Rosemary', varieties: ['Tuscan Blue', 'Arp', 'Salem', 'Prostrate', 'Spice Islands', 'Hill Hardy'], emoji: '🌿', daysToMaturity: 90, category: 'Herbs — Culinary' },
  { name: 'Sage', varieties: ['Common', 'Purple', 'Golden', 'Tricolor', 'Berggarten', 'Pineapple Sage'], emoji: '🌿', daysToMaturity: 75, category: 'Herbs — Culinary' },
  { name: 'Tarragon', varieties: ['French', 'Russian', 'Mexican (Texas Tarragon)'], emoji: '🌿', daysToMaturity: 60, category: 'Herbs — Culinary' },
  { name: 'Chervil', varieties: ['Curled', 'Flat Leaf', 'Brussels Winter', 'Vertissimo'], emoji: '🌿', daysToMaturity: 45, category: 'Herbs — Culinary' },
  { name: 'Marjoram', varieties: ['Sweet', 'Italian', 'Golden', 'Pot Marjoram'], emoji: '🌿', daysToMaturity: 70, category: 'Herbs — Culinary' },
  { name: 'Bay Laurel', varieties: ['Sweet Bay', 'California Bay', 'Turkish Bay', 'Willow Leaf'], emoji: '🍃', daysToMaturity: 730, category: 'Herbs — Culinary' },
  { name: 'Lemongrass', varieties: ['East Indian', 'West Indian', 'Cymbopogon Citratus', 'Malabar'], emoji: '🌿', daysToMaturity: 100, category: 'Herbs — Culinary' },
  { name: 'Savory', varieties: ['Summer Savory', 'Winter Savory', 'Creeping Savory', 'Lemon Savory'], emoji: '🌿', daysToMaturity: 60, category: 'Herbs — Culinary' },
  { name: 'Lovage', varieties: ['Common', 'Czech', 'Maggi Plant'], emoji: '🌿', daysToMaturity: 80, category: 'Herbs — Culinary' },
  { name: 'Epazote', varieties: ['Common Epazote', 'Red Epazote'], emoji: '🌿', daysToMaturity: 50, category: 'Herbs — Culinary' },
  { name: 'Shiso (Perilla)', varieties: ['Green Shiso', 'Red Shiso', 'Bi-Color', 'Korean Perilla'], emoji: '🌿', daysToMaturity: 60, category: 'Herbs — Culinary' },
  { name: 'Vietnamese Coriander', varieties: ['Rau Ram', 'Laksa Leaf'], emoji: '🌿', daysToMaturity: 60, category: 'Herbs — Culinary' },
  { name: 'Culantro', varieties: ['Recao', 'Fitweed', 'Long Coriander'], emoji: '🌿', daysToMaturity: 70, category: 'Herbs — Culinary' },

  // ═══════════════════════════════════════════════════════════════════════════
  // HERBS — Medicinal / Specialty
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Chamomile', varieties: ['German', 'Roman', 'Zloty Lan', 'Bodegold'], emoji: '🌼', daysToMaturity: 60, category: 'Herbs — Medicinal' },
  { name: 'Lavender', varieties: ['English (Munstead)', 'French', 'Hidcote', 'Grosso', 'Provence', 'Spanish'], emoji: '💜', daysToMaturity: 100, category: 'Herbs — Medicinal' },
  { name: 'Echinacea', varieties: ['Purpurea', 'Angustifolia', 'Pallida', 'Magnus', 'White Swan'], emoji: '🌸', daysToMaturity: 120, category: 'Herbs — Medicinal' },
  { name: 'Calendula', varieties: ['Pacific Beauty', 'Resina', 'Flashback', 'Indian Prince', 'Neon'], emoji: '🌼', daysToMaturity: 45, category: 'Herbs — Medicinal' },
  { name: 'Lemon Balm', varieties: ['Common', 'Aurea (Gold Leaf)', 'Compacta', 'Quedlinburger', 'Lime Balm'], emoji: '🌿', daysToMaturity: 70, category: 'Herbs — Medicinal' },
  { name: 'Valerian', varieties: ['Common Valerian', 'Red Valerian', 'Garden Heliotrope'], emoji: '🌸', daysToMaturity: 120, category: 'Herbs — Medicinal' },
  { name: 'Feverfew', varieties: ['Common', 'Golden Moss', 'Snowball', 'Ultra Double White'], emoji: '🌼', daysToMaturity: 90, category: 'Herbs — Medicinal' },
  { name: 'Borage', varieties: ['Common Blue', 'Alba (White)', 'Variegata'], emoji: '🌸', daysToMaturity: 50, category: 'Herbs — Medicinal' },
  { name: 'Comfrey', varieties: ['Bocking 14', 'Common', 'Russian', 'Dwarf'], emoji: '🌿', daysToMaturity: 90, category: 'Herbs — Medicinal' },
  { name: 'St. John\'s Wort', varieties: ['Common', 'Topaz', 'Elixir', 'New Stem'], emoji: '🌼', daysToMaturity: 120, category: 'Herbs — Medicinal' },
  { name: 'Ashwagandha', varieties: ['Common', 'Nagori', 'Rajasthani'], emoji: '🌿', daysToMaturity: 150, category: 'Herbs — Medicinal' },
  { name: 'Stevia', varieties: ['Sweet Leaf', 'Sugar In A Pot', 'Candy'], emoji: '🌿', daysToMaturity: 80, category: 'Herbs — Medicinal' },
  { name: 'Catnip', varieties: ['Common', 'Lemon Catnip', 'Six Hills Giant', 'Walker\'s Low'], emoji: '🌿', daysToMaturity: 60, category: 'Herbs — Medicinal' },
  { name: 'Hyssop', varieties: ['Blue', 'Pink', 'White', 'Anise Hyssop', 'Korean Mint'], emoji: '🌸', daysToMaturity: 75, category: 'Herbs — Medicinal' },

  // ═══════════════════════════════════════════════════════════════════════════
  // HERBS — Spice Seeds
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Cumin', varieties: ['Common', 'Black Cumin (Nigella)', 'Indian'], emoji: '🌿', daysToMaturity: 120, category: 'Herbs — Culinary' },
  { name: 'Coriander (Seed)', varieties: ['Slow Bolt', 'Santo', 'Jantar', 'Moroccan'], emoji: '🌿', daysToMaturity: 100, category: 'Herbs — Culinary' },
  { name: 'Fennel Seed', varieties: ['Florence', 'Bronze', 'Sweet Fennel', 'Grosfruchtiger'], emoji: '🌿', daysToMaturity: 65, category: 'Herbs — Culinary' },
  { name: 'Caraway', varieties: ['Common Caraway', 'Arterner', 'Volhouden'], emoji: '🌿', daysToMaturity: 70, category: 'Herbs — Culinary' },
  { name: 'Fenugreek', varieties: ['Common', 'Kasuri Methi', 'Rajasthani'], emoji: '🌿', daysToMaturity: 60, category: 'Herbs — Culinary' },
  { name: 'Saffron Crocus', varieties: ['Crocus Sativus', 'Kashmir', 'Spanish'], emoji: '🌸', daysToMaturity: 240, category: 'Herbs — Culinary' },

  // ═══════════════════════════════════════════════════════════════════════════
  // NUTS
  // ═══════════════════════════════════════════════════════════════════════════
  { name: 'Almonds', varieties: ['Nonpareil', 'Carmel', 'All-In-One', 'Hall\'s Hardy', 'Texas Mission', 'Garden Prince'], emoji: '🌰', daysToMaturity: 1825, category: 'Nuts' },
  { name: 'Walnuts', varieties: ['English (Chandler)', 'Black Walnut', 'Carpathian', 'Franquette', 'Heartnut'], emoji: '🌰', daysToMaturity: 2555, category: 'Nuts' },
  { name: 'Pecans', varieties: ['Desirable', 'Pawnee', 'Cape Fear', 'Elliot', 'Kanza', 'Stuart'], emoji: '🌰', daysToMaturity: 2555, category: 'Nuts' },
  { name: 'Hazelnuts (Filberts)', varieties: ['Barcelona', 'Yamhill', 'Jefferson', 'Tonda di Giffoni', 'Red Dragon'], emoji: '🌰', daysToMaturity: 1460, category: 'Nuts' },
  { name: 'Chestnuts', varieties: ['Colossal', 'Chinese Chestnut', 'Dunstan', 'Nevada', 'Bouche de Betizac'], emoji: '🌰', daysToMaturity: 1095, category: 'Nuts' },
  { name: 'Pistachios', varieties: ['Kerman', 'Peters (Pollinator)', 'Golden Hills', 'Lost Hills'], emoji: '🌰', daysToMaturity: 2190, category: 'Nuts' },
  { name: 'Macadamia', varieties: ['Beaumont', 'A4', 'Kakea', 'Mauka', 'Pahala'], emoji: '🌰', daysToMaturity: 2555, category: 'Nuts' },
  { name: 'Pine Nuts', varieties: ['Italian Stone Pine', 'Korean Pine', 'Pinyon Pine', 'Swiss Stone Pine'], emoji: '🌰', daysToMaturity: 3650, category: 'Nuts' },
  { name: 'Cashews', varieties: ['Tropical Cashew', 'Dwarf Cashew', 'Red Cashew'], emoji: '🌰', daysToMaturity: 1095, category: 'Nuts' },
  { name: 'Brazil Nuts', varieties: ['Common Brazil Nut', 'Castanha-do-Para'], emoji: '🌰', daysToMaturity: 5475, category: 'Nuts' },
]
