var data = ["account", "achiever", "acoustics", "act", "action", "activity", "actor", "addition", "adjustment", "advertisement", "advice", "aftermath", "afternoon", "afterthought", "agreement", "air", "airplane", "airport", "alarm", "amount", "amusement", "anger", "angle", "animal ", "answer", "ant", "ants ", "apparatus", "apparel", "apple", "apples ", "appliance", "approval", "arch", "argument", "arithmetic", "arm", "army", "art", "attack", "attempt", "attention", "attraction", "aunt", "authority", "babies ", "baby ", "back", "badge", "bag", "bait", "balance", "ball", "balloon", "balls ", "banana", "band", "base", "baseball", "basin", "basket", "basketball", "bat", "bath", "battle", "bead", "beam", "bean", "bear", "bears ", "beast", "bed", "bedroom", "beds ", "bee", "beef", "beetle", "beggar", "beginner", "behavior", "belief", "believe", "bell", "bells ", "berry", "bike", "bikes ", "bird", "birds ", "birth", "birthday", "bit", "bite", "blade", "blood", "blow", "board", "boat", "boats ", "body", "bomb", "bone", "book", "books ", "boot", "border", "bottle", "boundary", "box", "boy", "boys ", "brain", "brake", "branch", "brass", "bread", "breakfast", "breath", "brick", "bridge", "brother", "brothers ", "brush", "bubble", "bucket", "building", "bulb", "bun", "burn", "burst", "bushes", "business", "butter", "button", "cabbage", "cable", "cactus", "cake", "cakes ", "calculator", "calendar", "camera", "camp", "can", "cannon", "canvas", "cap", "caption", "car ", "card", "care", "carpenter", "carriage", "cars ", "cart", "cast", "cat", "cats ", "cattle", "cause", "cave", "celery", "cellar", "cemetery", "cent", "chain", "chair ", "chairs ", "chalk", "chance", "change", "channel", "cheese", "cherries", "cherry", "chess", "chicken ", "chickens ", "children", "chin", "church", "circle", "clam", "class", "clock", "clocks ", "cloth", "cloud", "clouds ", "clover", "club", "coach", "coal", "coast", "coat", "cobweb", "coil", "collar", "color", "comb", "comfort", "committee", "company", "comparison", "competition", "condition", "connection", "control", "cook", "copper", "copy", "cord", "cork", "corn ", "cough", "country", "cover", "cow", "cows ", "crack", "cracker", "crate", "crayon", "cream", "creator", "creature", "credit", "crib", "crime", "crook", "crow", "crowd", "crown", "crush", "cry", "cub", "cup", "current", "curtain", "curve", "cushion", "dad", "daughter", "day", "death", "debt", "decision", "deer", "degree", "design", "desire", "desk", "destruction", "detail", "development", "digestion", "dime", "dinner", "dinosaurs ", "direction", "dirt", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "dock", "doctor", "dog", "dogs ", "doll", "dolls ", "donkey", "door", "downtown", "drain", "drawer", "dress", "drink", "driving", "drop", "drug", "drum", "duck ", "ducks ", "dust", "ear", "earth", "earthquake", "edge", "education", "effect", "egg", "eggnog", "eggs ", "elbow", "end", "engine", "error", "event", "example", "exchange", "existence", "expansion", "experience", "expert", "eye", "eyes", "face", "fact", "fairies ", "fall", "family", "fan", "fang ", "farm", "farmer ", "father", "father", "faucet", "fear", "feast", "feather", "feeling", "feet", "fiction", "field", "fifth", "fight", "finger", "finger", "fire ", "fireman", "fish", "flag", "flame", "flavor", "flesh", "flight", "flock", "floor", "flower", "flowers ", "fly", "fog", "fold", "food", "foot", "force", "fork", "form", "fowl", "frame", "friction", "friend", "friends ", "frog", "frogs ", "front", "fruit", "fuel", "furniture", "alley", "game", "garden", "gate", "geese", "ghost", "giants ", "giraffe", "girl", "girls ", "glass", "glove", "glue", "goat", "gold", "goldfish", "good-bye ", "goose", "government", "governor", "grade", "grain", "grandfather", "grandmother", "grape", "grass", "grip", "ground", "group", "growth", "guide", "guitar", "gun", "hair", "haircut", "hall", "hammer", "hand", "hands ", "harbor", "harmony", "hat", "hate", "head", "health", "hearing", "heart", "heat", "help", "hen", "hill ", "history", "hobbies", "hole", "holiday", "home ", "honey", "hook", "hope", "horn", "horse", "horses ", "hose", "hospital", "hot", "hour", "house", "houses ", "humor", "hydrant", "ice", "icicle", "idea", "impulse", "income", "increase", "industry", "ink", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jail", "jam", "jar", "jeans", "jelly", "jellyfish", "jewel", "join", "joke", "journey", "judge", "juice", "jump", "kettle", "key", "kick", "kiss", "kite", "kitten", "kittens ", "kitty ", "knee", "knife", "knot", "knowledge", "laborer", "lace", "ladybug", "lake", "lamp", "land", "language", "laugh", "lawyer", "lead", "leaf", "learning", "leather", "leg ", "legs", "letter", "letters ", "lettuce", "level", "library", "lift", "light", "limit", "line", "linen", "lip", "liquid", "list", "lizards ", "loaf", "lock", "locket", "look", "loss", "love", "low", "lumber", "lunch", "lunchroom", "machine", "magic", "maid", "mailbox", "man", "manager", "map", "marble", "mark", "market", "mask", "mass", "match", "meal", "measure", "meat", "meeting", "memory", "men", "metal", "mice ", "middle", "milk", "mind", "mine", "minister", "mint", "minute", "mist", "mitten", "mom", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "muscle", "music", "nail", "name", "nation", "neck", "need", "needle", "nerve", "nest ", "net", "news", "night", "noise", "north", "nose", "note", "notebook", "number", "nut", "oatmeal", "observation", "ocean", "offer", "office", "oil", "operation", "opinion", "orange", "oranges ", "order", "organization", "ornament", "oven", "owl", "owner", "page", "pail", "pain", "paint", "pan", "pancake", "paper", "parcel", "parent", "park", "part", "partner", "party", "passenger", "paste", "patch", "payment", "peace", "pear", "pen", "pencil", "person", "pest", "pet", "pets ", "pickle", "picture", "pie", "pies ", "pig", "pigs ", "pin", "pipe", "pizzas ", "place", "plane", "planes ", "plant", "plantation", "plants ", "plastic", "plate", "play", "playground", "pleasure", "plot", "plough", "pocket", "point", "poison", "police", "polish", "pollution", "popcorn", "porter", "position", "pot", "potato", "powder", "power", "price", "print", "prison", "process", "produce", "profit", "property", "prose", "protest", "pull", "pump", "punishment", "purpose", "push", "quarter", "quartz", "queen", "question", "quicksand", "quiet", "quill", "quilt", "quince", "quiver", "rabbit ", "rabbits ", "rail", "railway", "rain", "rainstorm", "rake", "range", "rat", "rate", "ray", "reaction", "reading", "reason", "receipt", "recess", "record", "regret", "relation", "religion", "representative", "request", "respect", "rest", "reward", "rhythm", "rice", "riddle", "rifle", "ring", "rings ", "river", "road", "robin ", "rock", "rod", "roll", "roof", "room", "root", "rose", "route", "rub", "rule", "run", "sack", "sail", "salt", "sand", "scale", "scarecrow", "scarf", "scene", "scent", "school", "science", "scissors", "screw", "sea", "seashore", "seat", "secretary", "seed", "selection", "self", "sense", "servant", "shade", "shake", "shame", "shape", "sheep", "sheet", "shelf", "ship", "shirt", "shock", "shoe", "shoes ", "shop", "show", "side", "sidewalk", "sign", "silk", "silver", "sink", "sister", "sisters ", "size", "skate", "skin", "skirt", "sky", "slave", "sleep", "sleet", "slip", "slope", "smash", "smell", "smile", "smoke", "snail", "snails ", "snake", "snakes ", "sneeze", "snow", "soap", "society", "sock", "soda", "sofa", "son", "song", "songs ", "sort", "sound", "soup", "space", "spade", "spark", "spiders ", "sponge", "spoon", "spot", "spring", "spy", "square", "squirrel", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stew", "stick", "sticks ", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "stove", "stranger", "straw", "stream", "street", "stretch", "string", "structure", "substance", "sugar", "suggestion", "suit", "summer", "sun", "support", "surprise", "sweater", "swim", "swing", "system", "table", "tail", "talk", "tank", "taste", "tax", "teaching", "team", "teeth ", "temper", "tendency", "tent", "territory", "test", "texture", "theory", "thing", "things ", "thought", "thread", "thrill", "throat", "throne", "thumb", "thunder", "ticket", "tiger", "time", "tin", "title", "toad", "toe", "toes", "tomatoes ", "tongue", "tooth", "toothbrush", "toothpaste", "top ", "touch", "town", "toy ", "toys ", "trade", "trail", "train", "trains ", "tramp", "transport", "tray", "treatment", "tree", "trees ", "trick", "trip", "trouble", "trousers", "truck", "trucks ", "tub", "turkey", "turn", "twig", "twist", "umbrella", "uncle", "underwear", "unit", "use", "vacation", "value", "van", "vase", "vegetable", "veil", "vein", "verse", "vessel", "vest", "view", "visitor", "voice", "volcano", "volleyball", "voyage", "walk", "wall", "war", "wash", "waste", "watch", "water", "wave", "waves ", "wax", "way", "wealth", "weather", "week", "weight", "wheel", "whip", "whistle", "wilderness", "wind ", "window ", "wine", "wing", "winter", "wire", "wish", "woman", "women", "wood", "wool", "word", "work", "worm", "wound", "wren", "wrench", "wrist", "writer", "writing", "yak", "yam", "yard", "yarn", "year", "yoke", "zebra ", "zephyr", "zinc", "zipper", "zoo"];
var movieData = ["The Shawshank Redemption",
	"The Godfather",
	"The Godfather, Part II",
	"The Dark Knight",
	"Pulp Fiction",
	"The Good, The Bad and The Ugly",
	"12 Angry Men",
	"Schindler's List",
	"The Lord of the Rings: The Return of the King",
	"Fight Club",
	"The Fellowship Of The Ring",
	"Star Wars: Episode V - The Empire Strikes Back",
	"Inception",
	"Forrest Gump",
	"One Flew Over the Cuckoo's Nest",
	"The Lord of the Rings: The Two Towers",
	"Interstellar",
	"Goodfellas",
	"The Matrix",
	"Star Wars: Episode IV - A New Hope",
	"Seven Samurai",
	"City of God",
	"Se7en",
	"The Usual Suspects",
	"The Silence of the Lambs",
	"It's a Wonderful Life",
	"Once Upon a Time in the West",
	"Leon: The Professional",
	"Life Is Beautiful",
	"Casablanca",
	"Raiders of the Lost Ark",
	"American History X",
	"Saving Private Ryan",
	"City Lights",
	"Psycho",
	"Spirited Away",
	"Rear Window",
	"Intouchables",
	"Modern Times",
	"Whiplash",
	"Terminator 2: Judgment Day",
	"Memento",
	"The Green Mile",
	"The Pianist",
	"The Departed",
	"Sunset Boulevard",
	"Apocalypse Now",
	"Dr. Strangelove or How I Learned to Stop Worrying and Love the Bomb",
	"Gladiator",
	"Back to the Future",
	"Alien",
	"The Prestige",
	"The Great Dictator",
	"The Lives of Others",
	"The Lion King",
	"Django Unchained",
	"The Dark Knight Rises",
	"Cinema Paradiso",
	"The Shining",
	"Paths of Glory",
	"American Beauty",
	"Wall-E",
	"North by Northwest",
	"Aliens",
	"Citizen Kane",
	"Vertigo",
	"Amelie",
	"M",
	"Das Boot",
	"Grave of the Fireflies",
	"Toy Story 3",
	"Oldboy",
	"Princess Mononoke",
	"Star Wars: Episode VI - Return of the Jedi",
	"Once Upon a Time in America",
	"A Clockwork Orange",
	"Reservoir Dogs",
	"Taxi Driver",
	"Double Indemnity",
	"Braveheart",
	"Requiem for a Dream",
	"To Kill a Mockingbird",
	"Lawrence of Arabia",
	"Witness for the Prosecution",
	"Eternal Sunshine of the Spotless Mind",
	"Full Metal Jacket",
	"Singin' in the Rain",
	"The Sting",
	"Bicycle Thieves",
	"Amadeus",
	"Monty Python and the Holy Grail",
	"Snatch",
	"Rashomon",
	"L.A. Confidential",
	"For a Few Dollars More",
	"2001: A Space Odyssey",
	"The Kid",
	"All About Eve",
	"The Apartment",
	"Some Like It Hot",
	"Inglourious Basterds",
	"Birdman",
	"Indiana Jones and the Last Crusade",
	"The Treasure of the Sierra Madre",
	"The Third Man",
	"A Seperation",
	"Yojimbo",
	"Toy Story",
	"Batman Begins",
	"Metropolis",
	"Like Stars on Earth",
	"Unforgiven",
	"Scarface",
	"Raging Bull",
	"Up",
	"Chinatown",
	"3 Idiots",
	"The Great Escape",
	"Downfall",
	"Boyhood",
	"Die Hard",
	"On the Waterfront",
	"Pan's Labyrinth",
	"Mr. Smith Goes to Washington",
	"The Hunt",
	"Heat",
	"CM101MMXI Fundamentals",
	"Gone Girl",
	"The Bridge on the River Kwai",
	"Good Will Hunting",
	"The Bandit",
	"My Neighbor Totoro",
	"The Seventh Seal",
	"Ikiru",
	"The Gold Rush",
	"The Elephant Man",
	"The Wolf of Wall Street",
	"Ran",
	"Wild Strawberries",
	"Blade Runner",
	"The General",
	"Lock, Stock and Two Smoking Barrels",
	"The Secret in Their Eyes",
	"Casino",
	"Gran Torino",
	"The Big Lebowski",
	"Warrior",
	"Rebecca",
	"V for Vendetta",
	"Howl's Moving Castle",
	"Paint It Yellow",
	"The Deer Hunter",
	"It Happened One Night",
	"Cool Hand Luke",
	"How to Train Your Dragon",
	"Fargo",
	"Judgment at Nuremberg",
	"Trainspotting",
	"Gone with the Wind",
	"Rush",
	"Into the Wild",
	"The Maltese Falcon",
	"A Beautiful Mind",
	"Dial M for Murder",
	"The Sixth Sense",
	"The Wages of Fear",
	"Hotel Rwanda",
	"The Thing",
	"Finding Nemo",
	"Mary and Max",
	"No Country for Old Men",
	"Butch Cassidy and the Sundance Kid",
	"Kill Bill: Vol. 1",
	"Platoon",
	"Life of Brian",
	"Incendies",
	"Guardians of the Galaxy",
	"Dil Chahta Hai",
	"12 Years a Slave",
	"Network",
	"Touch of Evil",
	"Diabolique (1955)",
	"Annie Hall",
	"The Princess Bride",
	"There Will Be Blood",
	"The Grand Budapest Hotel",
	"Stand by Me",
	"Sin City",
	"Ben-Hur",
	"The 400 Blows",
	"Amores Perros",
	"In the Name of the Father",
	"Million Dollar Baby",
	"The Grapes of Wrath",
	"The Wizard of Oz",
	"Hachi: A Dog's Tale",
	"Persona",
	"The Best Years of Our Lives",
	"The Avengers",
	"Nausicaä of the Valley of the Wind",
	"The Bourne Ultimatum",
	"Gandhi",
	"The Imitation Game",
	"Donnie Darko",
	"8 1/2",
	"Gangs of Wasseypur",
	"Strangers on a Train",
	"Infernal Affairs",
	"Stalker",
	"12 Monkeys",
	"Jaws",
	"Shutter Island",
	"X-Men: Days of Future Past",
	"High Noon",
	"Lagaan: Once Upon a Time in India",
	"Notorious",
	"The Terminator",
	"Before Sunrise",
	"The King's Speech",
	"Groundhog Day",
	"Harry Potter and the Deathly Hallows: Part 2",
	"Fanny and Alexander",
	"Ip Man",
	"The Battle of Algiers",
	"Rocky",
	"Dog Day Afternoon",
	"The Night of the Hunter",
	"Monsters, Inc.",
	"La Haine",
	"Memories of Murder",
	"La Strada",
	"Pirates of the Caribbean: The Curse of the Black Pearl",
	"Who's Afraid of Virginia Woolf?",
	"Barry Lyndon",
	"A Fistful of Dollars",
	"Castle in the Sky",
	"The Truman Show",
	"The Big Sleep",
	"The Help",
	"Jurassic Park",
	"Roman Holiday",
	"The Graduate",
	"The Hustler",
	"Papillon",
	"Beauty and the Beast",
	"In the Mood for Love",
	"The Celebration",
	"Prisoners",
	"Rope",
	"Swades: We, the People"
];

var defaultData = ["AFRICA",
	"AGENT",
	"AIR",
	"ALIEN",
	"ALPS",
	"AMAZON",
	"AMBULANCE",
	"AMERICA",
	"ANGEL",
	"ANTARCTICA",
	"APPLE",
	"ARM",
	"ATLANTIS",
	"AUSTRALIA",
	"AZTEC",
	"BACK",
	"BALL",
	"BAND",
	"BANK",
	"BAR",
	"BARK",
	"BAT",
	"BATTERY",
	"BEACH",
	"BEAR",
	"BEAT",
	"BED",
	"BEIJING",
	"BELL",
	"BELT",
	"BERLIN",
	"BERMUDA",
	"BERRY",
	"BILL",
	"BLOCK",
	"BOARD",
	"BOLT",
	"BOMB",
	"BOND",
	"BOOM",
	"BOOT",
	"BOTTLE",
	"BOW",
	"BOX",
	"BRIDGE",
	"BRUSH",
	"BUCK",
	"BUFFALO",
	"BUG",
	"BUGLE",
	"BUTTON",
	"CALF",
	"CANADA",
	"CAP",
	"CAPITAL",
	"CAR",
	"CARD",
	"CARROT",
	"CASINO",
	"CAST",
	"CAT",
	"CELL",
	"CENTAUR",
	"CENTER",
	"CHAIR",
	"CHANGE",
	"CHARGE",
	"CHECK",
	"CHEST",
	"CHICK",
	"CHINA",
	"CHOCOLATE",
	"CHURCH",
	"CIRCLE",
	"CLIFF",
	"CLOAK",
	"CLUB",
	"CODE",
	"COLD",
	"COMIC",
	"COMPOUND",
	"CONCERT",
	"CONDUCTOR",
	"CONTRACT",
	"COOK",
	"COPPER",
	"COTTON",
	"COURT",
	"COVER",
	"CRANE",
	"CRASH",
	"CRICKET",
	"CROSS",
	"CROWN",
	"CYCLE",
	"CZECH",
	"DANCE",
	"DATE",
	"DAY",
	"DEATH",
	"DECK",
	"DEGREE",
	"DIAMOND",
	"DICE",
	"DINOSAUR",
	"DISEASE",
	"DOCTOR",
	"DOG",
	"DRAFT",
	"DRAGON",
	"DRESS",
	"DRILL",
	"DROP",
	"DUCK",
	"DWARF",
	"EAGLE",
	"EGYPT",
	"EMBASSY",
	"ENGINE",
	"ENGLAND",
	"EUROPE",
	"EYE",
	"FACE",
	"FAIR",
	"FALL",
	"FAN",
	"FENCE",
	"FIELD",
	"FIGHTER",
	"FIGURE",
	"FILE",
	"FILM",
	"FIRE",
	"FISH",
	"FLUTE",
	"FLY",
	"FOOT",
	"FORCE",
	"FOREST",
	"FORK",
	"FRANCE",
	"GAME",
	"GAS",
	"GENIUS",
	"GERMANY",
	"GHOST",
	"GIANT",
	"GLASS",
	"GLOVE",
	"GOLD",
	"GRACE",
	"GRASS",
	"GREECE",
	"GREEN",
	"GROUND",
	"HAM",
	"HAND",
	"HAWK",
	"HEAD",
	"HEART",
	"HELICOPTER",
	"HIMALAYAS",
	"HOLE",
	"HOLLYWOOD",
	"HONEY",
	"HOOD",
	"HOOK",
	"HORN",
	"HORSE",
	"HORSESHOE",
	"HOSPITAL",
	"HOTEL",
	"ICE",
	"ICE CREAM",
	"INDIA",
	"IRON",
	"IVORY",
	"JACK",
	"JAM",
	"JET",
	"JUPITER",
	"KANGAROO",
	"KETCHUP",
	"KEY",
	"KID",
	"KING",
	"KIWI",
	"KNIFE",
	"KNIGHT",
	"LAB",
	"LAP",
	"LASER",
	"LAWYER",
	"LEAD",
	"LEMON",
	"LEPRECHAUN",
	"LIFE",
	"LIGHT",
	"LIMOUSINE",
	"LINE",
	"LINK",
	"LION",
	"LITTER",
	"LOCH NESS",
	"LOCK",
	"LOG",
	"LONDON",
	"LUCK",
	"MAIL",
	"MAMMOTH",
	"MAPLE",
	"MARBLE",
	"MARCH",
	"MASS",
	"MATCH",
	"MERCURY",
	"MEXICO",
	"MICROSCOPE",
	"MILLIONAIRE",
	"MINE",
	"MINT",
	"MISSILE",
	"MODEL",
	"MOLE",
	"MOON",
	"MOSCOW",
	"MOUNT",
	"MOUSE",
	"MOUTH",
	"MUG",
	"NAIL",
	"NEEDLE",
	"NET",
	"NEW YORK",
	"NIGHT",
	"NINJA",
	"NOTE",
	"NOVEL",
	"NURSE",
	"NUT",
	"OCTOPUS",
	"OIL",
	"OLIVE",
	"OLYMPUS",
	"OPERA",
	"ORANGE",
	"ORGAN",
	"PALM",
	"PAN",
	"PANTS",
	"PAPER",
	"PARACHUTE",
	"PARK",
	"PART",
	"PASS",
	"PASTE",
	"PENGUIN",
	"PHOENIX",
	"PIANO",
	"PIE",
	"PILOT",
	"PIN",
	"PIPE",
	"PIRATE",
	"PISTOL",
	"PIT",
	"PITCH",
	"PLANE",
	"PLASTIC",
	"PLATE",
	"PLATYPUS",
	"PLAY",
	"PLOT",
	"POINT",
	"POISON",
	"POLE",
	"POLICE",
	"POOL",
	"PORT",
	"POST",
	"POUND",
	"PRESS",
	"PRINCESS",
	"PUMPKIN",
	"PUPIL",
	"PYRAMID",
	"QUEEN",
	"RABBIT",
	"RACKET",
	"RAY",
	"REVOLUTION",
	"RING",
	"ROBIN",
	"ROBOT",
	"ROCK",
	"ROME",
	"ROOT",
	"ROSE",
	"ROULETTE",
	"ROUND",
	"ROW",
	"RULER",
	"SATELLITE",
	"SATURN",
	"SCALE",
	"SCHOOL",
	"SCIENTIST",
	"SCORPION",
	"SCREEN",
	"SCUBA DIVER",
	"SEAL",
	"SERVER",
	"SHADOW",
	"SHAKESPEARE",
	"SHARK",
	"SHIP",
	"SHOE",
	"SHOP",
	"SHOT",
	"SINK",
	"SKYSCRAPER",
	"SLIP",
	"SLUG",
	"SMUGGLER",
	"SNOW",
	"SNOWMAN",
	"SOCK",
	"SOLDIER",
	"SOUL",
	"SOUND",
	"SPACE",
	"SPELL",
	"SPIDER",
	"SPIKE",
	"SPINE",
	"SPOT",
	"SPRING",
	"SPY",
	"SQUARE",
	"STADIUM",
	"STAFF",
	"STAR",
	"STATE",
	"STICK",
	"STOCK",
	"STRAW",
	"STREAM",
	"STRIKE",
	"STRING",
	"SUB",
	"SUIT",
	"SUPERHERO",
	"SWING",
	"SWITCH",
	"TABLE",
	"TABLET",
	"TAG",
	"TAIL",
	"TAP",
	"TEACHER",
	"TELESCOPE",
	"TEMPLE",
	"THEATER",
	"THIEF",
	"THUMB",
	"TICK",
	"TIE",
	"TIME",
	"TOKYO",
	"TOOTH",
	"TORCH",
	"TOWER",
	"TRACK",
	"TRAIN",
	"TRIANGLE",
	"TRIP",
	"TRUNK",
	"TUBE",
	"TURKEY",
	"UNDERTAKER",
	"UNICORN",
	"VACUUM",
	"VAN",
	"VET",
	"WAKE",
	"WALL",
	"WAR",
	"WASHER",
	"WASHINGTON",
	"WATCH",
	"WATER",
	"WAVE",
	"WEB",
	"WELL",
	"WHALE",
	"WHIP",
	"WIND",
	"WITCH",
	"WORM",
	"YARD"
];

var spanishData = [
	"aguila",
	"aguja",
	"agujero",
	"aire",
	"Alemania",
	"algodun",
	"alianza",
	"Alpes",
	"ambulancia",
	"America",
	"angel",
	"anillo",
	"Antartida",
	"antorcha",
	"araoa",
	"archivo",
	"arco",
	"Argentina",
	"articulo",
	"as",
	"Atlantida",
	"azteca",
	"baile",
	"bala",
	"ballena",
	"banco",
	"banda",
	"baoo",
	"barco",
	"barra",
	"bateria",
	"Berlin",
	"Bermudas",
	"bicho",
	"blanco",
	"bloque",
	"boca",
	"bola",
	"bolsa",
	"bomba",
	"bosque",
	"bota",
	"botella",
	"botun",
	"brazo",
	"bruja",
	"caballero",
	"caballo",
	"cabeza",
	"cabina",
	"cabo",
	"cactus",
	"cadena",
	"caja",
	"cama",
	"camara",
	"cambio",
	"campana",
	"campo",
	"canal",
	"canguro",
	"canto",
	"caoa",
	"capa",
	"capital",
	"caqui",
	"cara",
	"caravana",
	"carga",
	"carrera",
	"carro",
	"carta",
	"casco",
	"casino",
	"caza",
	"cementerio",
	"centauro",
	"centro",
	"Cervantes",
	"checo",
	"chocolate",
	"choque",
	"chuleta",
	"cientifico",
	"cinta",
	"cinturun",
	"circulo",
	"clase",
	"coche",
	"cocinero",
	"coco",
	"cudigo",
	"cola",
	"culera",
	"columna",
	"cometa",
	"compas",
	"concierto",
	"conejo",
	"contrabandista",
	"copa",
	"corazun",
	"corneta",
	"corona",
	"corredor",
	"corriente",
	"corte",
	"cresta",
	"cromo",
	"cruz",
	"cuadro",
	"cuarto",
	"cubierta",
	"cubo",
	"cuchillo",
	"cuello",
	"cuerda",
	"cuerno",
	"cura",
	"dama",
	"delta",
	"destino",
	"dia",
	"diamante",
	"diana",
	"diario",
	"diente",
	"dinosaurio",
	"disco",
	"don",
	"dragun",
	"duende",
	"Egipto",
	"embajada",
	"emperador",
	"enano",
	"enfermedad",
	"enfermera",
	"enlace",
	"escorpiun",
	"espacio",
	"espia",
	"estaciun",
	"estadio",
	"estado",
	"estrella",
	"estudio",
	"etiqueta",
	"Europa",
	"extraterrestre",
	"falda",
	"fantasma",
	"faro",
	"ficha",
	"fiesta",
	"figura",
	"flauta",
	"flecha",
	"foso",
	"Francia",
	"frente",
	"fuego",
	"fuente",
	"fuerza",
	"furgoneta",
	"gancho",
	"gato",
	"genio",
	"gigante",
	"golfo",
	"golondrina",
	"golpe",
	"goma",
	"gundola",
	"gota",
	"grado",
	"granada",
	"grano",
	"Grecia",
	"grifo",
	"guante",
	"guardia",
	"guerra",
	"gusano",
	"helado",
	"helicuptero",
	"hielo",
	"hierba",
	"hoja",
	"Hollywood",
	"horca",
	"hospital",
	"hotel",
	"iglesia",
	"iman",
	"india",
	"indice",
	"Inglaterra",
	"Italia",
	"jarra",
	"judia",
	"juicio",
	"kiwi",
	"ladrun",
	"lago Ness",
	"laser",
	"latigo",
	"lengua",
	"leun",
	"libra",
	"lima",
	"limusina",
	"linea",
	"lista",
	"llama",
	"llave",
	"lomo",
	"Londres",
	"luna",
	"luz",
	"maestro",
	"magia",
	"malta",
	"mancha",
	"mando",
	"manga",
	"mango",
	"mano",
	"manzana",
	"maoana",
	"marca",
	"marcha",
	"marfil",
	"masa",
	"mascara",
	"mazo",
	"medico",
	"mercurio",
	"mesa",
	"metro",
	"Mexico",
	"micro",
	"microscopio",
	"mielo",
	"millonario",
	"mina",
	"misil",
	"modelo",
	"mudulo",
	"monitor",
	"mono",
	"mortero",
	"Mosc˙",
	"motor",
	"muelle",
	"muerte",
	"muoeca",
	"muro",
	"naranja",
	"nave",
	"nieve",
	"Nilo",
	"ninja",
	"noche",
	"nota",
	"nudo",
	"Nueva York",
	"obra",
	"ojo",
	"ola",
	"olimpo",
	"upera",
	"orden",
	"urgano",
	"ornitorrinco",
	"oro",
	"oso",
	"pala",
	"palma",
	"pantalla",
	"papel",
	"paracaidas",
	"pase",
	"paso",
	"pasta",
	"pastel",
	"pavo",
	"Pekin",
	"pelicula",
	"pelotun",
	"pendiente",
	"perro",
	"pez",
	"pico",
	"pie",
	"pieza",
	"pila",
	"piloto",
	"pincho",
	"ping¸ino",
	"pinta",
	"pioa",
	"piramide",
	"pirata",
	"pista",
	"pistola",
	"placa",
	"plano",
	"planta",
	"platano",
	"playa",
	"plomo",
	"pluma",
	"policia",
	"polo",
	"portada",
	"portero",
	"potro",
	"prensa",
	"prima",
	"princesa",
	"puente",
	"puerto",
	"pulpo",
	"pulso",
	"punta",
	"punto",
	"radio",
	"rascacielos",
	"ratun",
	"rayo",
	"red",
	"regla",
	"reina",
	"reserva",
	"revoluciun",
	"rey",
	"robot",
	"rojo",
	"Roma",
	"ronda",
	"rosa",
	"ruleta",
	"sable",
	"Sa"
];

var christianData = [
	"LORD",
	"GOD",
	"MAN",
	"ISRAEL",
	"PEOPLE",
	"KING",
	"SON",
	"MEN",
	"HOUSE",
	"DAY",
	"CHILDREN",
	"LAND",
	"THINGS",
	"HAND",
	"EARTH",
	"SONS",
	"JERUSALEM",
	"CITY",
	"JESUS",
	"FATHER",
	"NAME",
	"HEART",
	"DAYS",
	"DAVID",
	"MOSES",
	"PLACE",
	"TIME",
	"JUDAH",
	"WORD",
	"EVIL",
	"HEAVEN",
	"BRETHREN",
	"WORDS",
	"FIRE",
	"EGYPT",
	"THING",
	"LAW",
	"FATHERS",
	"LIFE",
	"HANDS",
	"EYES",
	"FEAR",
	"VOICE",
	"CHRIST",
	"PRIEST",
	"SPIRIT",
	"SERVANTS",
	"SOUL",
	"SERVANT",
	"GLORY",
	"PEACE",
	"GOLD",
	"MOUTH",
	"DEATH",
	"PRIESTS",
	"CITIES",
	"SWORD",
	"SIN",
	"FACE",
	"WATER",
	"SEA",
	"LEFT",
	"WORK",
	"BLOOD",
	"WIFE",
	"FLESH",
	"WOMAN",
	"BROTHER",
	"HEAD",
	"YEAR",
	"SIDE",
	"END",
	"RIGHT",
	"KINGDOM",
	"NATIONS",
	"POWER",
	"SIGHT",
	"ALTAR",
	"JACOB",
	"KINGS",
	"ENEMIES",
	"CONGREGATION",
	"BREAD",
	"NIGHT",
	"SILVER",
	"WORLD",
	"WISDOM",
	"JUDGMENT",
	"JEWS",
	"MULTITUDE",
	"LOVE",
	"DAUGHTER",
	"SAUL",
	"REST",
	"AARON",
	"WILDERNESS",
	"CHIEF",
	"COVENANT",
	"TABERNACLE",
	"TEMPLE"
];
