// KN Play catalogue data. Edit text here; images live in /public/kn-play.
// Prices are intentionally absent until drawings and BOQs are complete.

export type PlayGroup = "climb" | "lookouts" | "swing" | "dens" | "animals" | "forall";

export interface PlayPiece {
  g: PlayGroup;
  code: string;
  name: string;
  mean: string;
  type: string;
  ages: string;
  desc: string;
  learn: string;
  dev: string;
  size: string;
  img: string;
}

export interface PlayGarden {
  code: string;
  name: string;
  pcs: string;
  desc: string;
  img: string;
}

export const PLAY_GROUPS: [PlayGroup, string][] = [
  ["climb", "Climb"],
  ["lookouts", "Lookouts and slides"],
  ["swing", "Swing and balance"],
  ["dens", "Dens and play stations"],
  ["animals", "Animals"],
  ["forall", "Play for All"],
];

export const PLAY_PIECES: PlayPiece[] = [
  {
    g: "climb", code: "01", name: "Igisabo Dome", mean: "Milk gourd", type: "Climbing dome", ages: "3â€“10",
    desc: "A light steel dome shaped like the igisabo milk gourd, with rope nets, timber climbing panels and a padded ring at the top.",
    learn: "Numbered holds, and a panel on how the igisabo was used to churn butter.",
    dev: "Body Â· Mind Â· Words", size: "Ã˜ 3.0 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp01.jpg",
  },
  {
    g: "climb", code: "02", name: "Umuheto Arch", mean: "Bow", type: "Monkey bars", ages: "4â€“12",
    desc: "Monkey bars curved like a traditional umuheto bow, with a rope bound grip at the top and timber steps at each end.",
    learn: "Rungs numbered 1 to 10 with Kinyarwanda number words, rimwe to icumi.",
    dev: "Body Â· Mind Â· Words", size: "4.0 Ã— 1.2 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp02.jpg",
  },
  {
    g: "climb", code: "03", name: "Volcano Climber", mean: "Virunga", type: "Net climber", ages: "4â€“12",
    desc: "Three open steel cones, Bisoke, Muhabura and Karisimbi, rising in height. Climb the net inside, cross the bridges, slide down.",
    learn: "Each peak carries its volcano's name and real height, to compare and count.",
    dev: "Body Â· Mind Â· Heart", size: "7.0 Ã— 2.5 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp03.jpg",
  },
  {
    g: "climb", code: "04", name: "Imigongo Landscape", mean: "Imigongo art", type: "Toddler climbing terrain", ages: "2â€“6",
    desc: "Imigongo geometry in steel and timber: a zigzag ridge to climb, a see-through tunnel inside, and a stepped diamond mound.",
    learn: "Trace and name the triangles, zigzags and diamonds, then count them.",
    dev: "Body Â· Mind", size: "6.0 Ã— 3.0 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp04.jpg",
  },
  {
    g: "lookouts", code: "05", name: "Inzu Tower", mean: "House", type: "Play tower and slide", ages: "4â€“12",
    desc: "A dark steel frame carrying an open hardwood dome inspired by the inzu, on a raised deck with a curved stair and slide.",
    learn: "A growth chart on the inkingi post, to measure growing.",
    dev: "Body Â· Mind Â· Heart", size: "5.5 Ã— 3.0 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp05.jpg",
  },
  {
    g: "lookouts", code: "06", name: "Nyungwe Canopy Walk", mean: "Nyungwe forest", type: "Canopy walkway", ages: "4â€“12",
    desc: "An elevated walkway on steel tree columns under leaf sails, with a swaying bridge, net climb and slide.",
    learn: "Carved Nyungwe wildlife along the walk: colobus monkey, turaco and chameleon.",
    dev: "Body Â· Heart Â· Words", size: "10.0 Ã— 3.0 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp06.jpg",
  },
  {
    g: "lookouts", code: "07", name: "Little Inzu", mean: "Little house", type: "Toddler dome", ages: "1â€“5",
    desc: "A low inzu dome of steel ribs and hardwood bands, with two arches: in from the steps, out down a gentle slide.",
    learn: "Steps numbered 1 to 5 in colours, named in Kinyarwanda and English.",
    dev: "Body Â· Mind Â· Words", size: "3.0 Ã— 2.0 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp07.jpg",
  },
  {
    g: "lookouts", code: "08", name: "Kivu Boat Deck", mean: "Lake Kivu", type: "Play boat", ages: "3â€“12",
    desc: "A timber hull on dark steel ribs, with the arched poles of Lake Kivu fishing boats, portholes and a wheel.",
    learn: "A compass and map of Lake Kivu, to find north and plan a voyage.",
    dev: "Mind Â· Words", size: "6.0 Ã— 2.0 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp08.jpg",
  },
  {
    g: "swing", code: "09", name: "Agaseke Nest Swing", mean: "Woven basket", type: "Nest swing", ages: "2â€“12",
    desc: "One steel frame, two ways to swing. Option A is a large agaseke nest that several children share. Option B hangs two small agaseke seats, one child each, side by side on the same frame.",
    learn: "A shared swing that needs turn taking and teamwork to go higher.",
    dev: "Body Â· Heart", size: "3.0 Ã— 1.5 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp09.jpg",
  },
  {
    g: "swing", code: "10", name: "Ikirago Hammock", mean: "Woven mat", type: "Hammock net", ages: "3â€“12",
    desc: "A low steel frame on bolted base plates holding a rope hammock woven like an ikirago mat, for lying, bouncing and stories.",
    learn: "A picture board of Rwandan folk tales to start storytelling together.",
    dev: "Heart Â· Words", size: "2.5 Ã— 2.0 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp10.jpg",
  },
  {
    g: "swing", code: "11", name: "Akagera Trail", mean: "Akagera park", type: "Balance trail", ages: "3â€“12",
    desc: "A zigzag of timber beams on low steel posts with stepping posts, each beam marked with an Akagera animal.",
    learn: "Each animal's name in Kinyarwanda, English and French on its beam.",
    dev: "Body Â· Words", size: "6.0 Ã— 2.0 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp11.jpg",
  },
  {
    g: "swing", code: "12", name: "Gishwati Rope Trail", mean: "Gishwati forest", type: "Rope course", ages: "4â€“12",
    desc: "Green steel posts topped with carved forest animals, linked by leaf steps, a plank bridge and a balance cable.",
    learn: "Route cards to plan a path from start to finish, and time each run.",
    dev: "Body Â· Mind Â· Heart", size: "7.0 Ã— 1.5 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp12.jpg",
  },
  {
    g: "dens", code: "13", name: "Ikigega Den", mean: "Granary", type: "Woven den", ages: "3â€“12",
    desc: "A woven timber vessel inspired by the ikigega granary, raised on dark steel stilts under a floating lid. Climb up the net into it.",
    learn: "A chalkboard market counter below, for pretend trading and counting.",
    dev: "Mind Â· Heart Â· Words", size: "3.5 Ã— 3.0 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp13.jpg",
  },
  {
    g: "dens", code: "14", name: "Umusambi Pavilion", mean: "Crowned crane", type: "Shade pavilion", ages: "All ages",
    desc: "A shade roof shaped like the wings of the crowned crane, with climbing sides and a hanging net.",
    learn: "A shadow clock beside the pavilion that tells the time as the sun moves.",
    dev: "Body Â· Mind", size: "5.5 Ã— 3.0 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp14.jpg",
  },
  {
    g: "dens", code: "15", name: "Igikoni Mud Kitchen", mean: "Kitchen", type: "Mud kitchen", ages: "2â€“8",
    desc: "A dark steel frame with timber counter, shelves and shade canopy, a stainless sink and a pretend amashyiga three stone stove.",
    learn: "Measuring cups and a fraction board for mixing and naming amounts.",
    dev: "Mind Â· Words", size: "2.0 Ã— 0.8 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp15.jpg",
  },
  {
    g: "dens", code: "16", name: "Ingoma Sound Station", mean: "Drum", type: "Sensory station", ages: "1â€“8",
    desc: "A dark steel frame under a timber canopy, with three ingoma drums, an inanga string panel and an abacus.",
    learn: "A rhythm board for counting beats and copying patterns.",
    dev: "Body Â· Mind Â· Words", size: "3.0 Ã— 1.0 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp16.jpg",
  },
  {
    g: "animals", code: "17", name: "Uruvu Chameleon", mean: "Chameleon", type: "Deck, net and slide", ages: "3â€“10",
    desc: "A raised deck shaped like a chameleon's body. Climb the curled tail net up, and slide down its long tongue.",
    learn: "Colour cards on the deck: how a chameleon changes colour to hide.",
    dev: "Body Â· Mind", size: "6.0 Ã— 2.0 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp17.jpg",
  },
  {
    g: "animals", code: "18", name: "Inzovu Elephant", mean: "Elephant", type: "Deck, slide and den", ages: "2â€“10",
    desc: "A slatted elephant deck with ear shades and a trunk slide, and a shaded den under its belly for toddlers.",
    learn: "Elephant facts on the ears: how heavy, how tall and what it eats, to compare and count.",
    dev: "Body Â· Mind Â· Words", size: "5.5 Ã— 2.5 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp18.jpg",
  },
  {
    g: "animals", code: "19", name: "Intwiga Giraffe", mean: "Giraffe", type: "Deck, tube slide and den", ages: "4â€“12",
    desc: "A giraffe bending to drink: a sloping deck, a long neck tube slide, and a head den to crawl out of.",
    learn: "A height chart on the front leg: measure yourself against a giraffe.",
    dev: "Body Â· Mind", size: "8.0 Ã— 2.5 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp19.jpg",
  },
  {
    g: "animals", code: "20", name: "Ingona Crocodile", mean: "Crocodile", type: "Toddler tunnel and walk", ages: "1â€“6",
    desc: "A see-through steel ribcage to crawl through, in at the jaw, with a walk of timber scales along its back.",
    learn: "Count the scales as you walk, and spot the eyes and nostrils above the water.",
    dev: "Body Â· Mind", size: "6.0 Ã— 2.0 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp20.jpg",
  },
  {
    g: "animals", code: "21", name: "Inyambo Horns", mean: "Royal cattle", type: "Monkey bars", ages: "5â€“12",
    desc: "The great lyre horns of Rwanda's royal cattle as two curved monkey bars, rising from a low timber body.",
    learn: "Amazina y'inka: learn a short praise poem for the Inyambo.",
    dev: "Body Â· Heart Â· Words", size: "6.0 Ã— 2.5 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp21.jpg",
  },
  {
    g: "forall", code: "22", name: "Inzira Roll-on Deck", mean: "Path", type: "Ramp, deck and slide", ages: "3â€“12",
    desc: "A gentle ramp up to a level deck with see-through rails, play panels at seated height and a transfer platform onto the slide.",
    learn: "A built-in ingoma, mirror, abacus and imigongo puzzle, all within reach from a wheelchair.",
    dev: "Body Â· Mind Â· Heart Â· Words", size: "8.0 Ã— 3.0 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp22.jpg",
  },
  {
    g: "forall", code: "23", name: "Umurima Sensory Garden", mean: "Garden", type: "Sensory tables and planters", ages: "2â€“10",
    desc: "Planters, sand and water tables at 75 cm with knee space underneath, around an open floor where a wheelchair turns.",
    learn: "Smell, touch and name the plants; pump, pour and measure water.",
    dev: "Mind Â· Heart Â· Words", size: "4.5 Ã— 3.0 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp23.jpg",
  },
  {
    g: "forall", code: "24", name: "Ingobyi Supportive Swing", mean: "Baby carrier", type: "Supportive swing and nest", ages: "2â€“12",
    desc: "A high-back cradle seat with a harness, inspired by the ingobyi, beside a large woven nest on the same steel frame.",
    learn: "Rhythm and counting songs while swinging together.",
    dev: "Body Â· Heart", size: "3.0 Ã— 1.5 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp24.jpg",
  },
  {
    g: "forall", code: "25", name: "Akazu Quiet Den", mean: "Little hut", type: "Quiet den", ages: "2â€“12",
    desc: "A calm, shaded den of timber slats on a dark steel frame, with a step-free arched opening, padded floor, cushions and a hanging cocoon seat. Slats let carers see in.",
    learn: "A soft tactile wall and a picture board, Gukina, Ituze, Ubufasha, Kunywa, Ubwiherero, to say what you need.",
    dev: "Heart Â· Words", size: "2.5 Ã— 2.0 m", img: "https://res.cloudinary.com/cuucm48m/image/upload/kp25.jpg",
  },
];

export const PLAY_GARDENS: PlayGarden[] = [
  {
    code: "A", name: "Family garden",
    pcs: "Inzovu Elephant Â· Little Inzu Â· Igikoni Mud Kitchen",
    desc: "One garden, every age. The elephant on the lawn, a little house and a mud kitchen on the terrace.",
    img: "https://res.cloudinary.com/cuucm48m/image/upload/garden-a.jpg",
  },
  {
    code: "B", name: "Savannah garden",
    pcs: "Intwiga Giraffe Â· Little Inzu Â· Igikoni Mud Kitchen",
    desc: "A giraffe on the lawn, a mud kitchen and a little house by the seats.",
    img: "https://res.cloudinary.com/cuucm48m/image/upload/garden-b.jpg",
  },
  {
    code: "C", name: "River garden",
    pcs: "Ingona Crocodile Â· Inyambo Horns Â· Little Inzu Â· Igikoni Mud Kitchen",
    desc: "A crocodile to crawl through and horns to swing on, with play on the terrace above.",
    img: "https://res.cloudinary.com/cuucm48m/image/upload/garden-c.jpg",
  },
  {
    code: "D", name: "Forest garden",
    pcs: "Nyungwe Canopy Walk Â· Ikirago Hammock Â· Igikoni Mud Kitchen",
    desc: "Nyungwe's canopy along the lawn, a hammock and a mud kitchen above.",
    img: "https://res.cloudinary.com/cuucm48m/image/upload/garden-d.jpg",
  },
  {
    code: "E", name: "Crane garden",
    pcs: "Umusambi Pavilion Â· Ikirago Hammock Â· Igikoni Mud Kitchen",
    desc: "Shade and play under the crane's wings, with a hammock and a mud kitchen nearby.",
    img: "https://res.cloudinary.com/cuucm48m/image/upload/garden-e.jpg",
  },
  {
    code: "F", name: "Lookout garden",
    pcs: "Inzu Tower Â· Ingoma Sound Station Â· Igikoni Mud Kitchen",
    desc: "Climb, slide, cook and play music in one garden.",
    img: "https://res.cloudinary.com/cuucm48m/image/upload/garden-f.jpg",
  },
];

export const PLAY_WHATSAPP = { display: "+250 788 841 556", link: "https://wa.me/250788841556" };
