export type BlogArticle = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const blogCategories = ["All stories", "Travel guides", "Nature", "Slow travel"] as const;

export const blogArticles: BlogArticle[] = [
  {
    slug: "a-slower-way-through-the-fjords",
    title: "A slower way through the fjords",
    category: "Slow travel",
    date: "September 18, 2026",
    readTime: "6 min read",
    excerpt: "Trade the checklist for the long way around. In Norway, the in-between moments are often the ones you remember.",
    image: "/images/platform.jpg",
    imageAlt: "A wooden boat resting on a still lake beneath dramatic green mountains",
    intro: "There is a particular quiet that settles over a Norwegian fjord in the early morning. The water barely moves, the mountains catch the first soft light, and, for once, there is nowhere else you need to be.",
    sections: [
      {
        heading: "Leave room in the itinerary",
        paragraphs: [
          "It is tempting to fit every famous viewpoint into a single trip. But the best parts of travelling slowly rarely appear on a map: an extra coffee in a harbour café, a conversation with someone who knows the valley by heart, a path you only noticed because you were not rushing past it.",
          "Choose one fjord as your home base for a few days. Walk a little, take the local ferry, and let the weather make some of the decisions. A flexible plan often makes room for the most memorable detours.",
        ],
      },
      {
        heading: "Let the journey be the destination",
        paragraphs: [
          "In Western Norway, the boats and buses are part of the experience. Sit by the window, keep your camera within reach, and watch farms and waterfalls appear between the folds of the mountains.",
          "Pack a warm layer and a small picnic. A sheltered spot beside the water can be every bit as special as the famous lookout you came to see.",
        ],
      },
      {
        heading: "Travel gently",
        paragraphs: [
          "Small choices matter in a landscape this beautiful. Stay on marked trails, take your rubbish with you, and support local guides and independent places to eat. Travelling with care helps keep these quiet places welcoming for the people who call them home.",
        ],
      },
    ],
  },
  {
    slug: "the-northern-lights-without-the-rush",
    title: "The northern lights, without the rush",
    category: "Nature",
    date: "September 9, 2026",
    readTime: "5 min read",
    excerpt: "A little patience, a warm layer, and a dark Arctic sky: a gentler guide to aurora nights in the north.",
    image: "/images/preikestolen.jpg",
    imageAlt: "A bright, starry night sky above a dramatic mountain ridge",
    intro: "The aurora does not work to a schedule. That is part of its magic. A northern lights trip is less about chasing a perfect photograph and more about giving yourself time beneath a very big sky.",
    sections: [
      {
        heading: "Make warmth part of the plan",
        paragraphs: [
          "Bring more layers than you think you need, including warm socks, gloves, and something comfortable to sit on. When you are warm, waiting becomes an experience in its own right rather than something to endure.",
          "A flask of something hot and a little snack can turn a long, cold evening into a cosy one.",
        ],
      },
      {
        heading: "Look beyond the forecast",
        paragraphs: [
          "Aurora forecasts can help you decide when to look, but they cannot promise a display. Give yourself several evenings if you can, and keep an eye on local cloud cover as well as the activity forecast.",
          "A local guide can take you away from city lights and share the stories, weather knowledge, and favourite quiet spots that do not fit into an app.",
        ],
      },
      {
        heading: "Remember to look up",
        paragraphs: [
          "It is easy to experience the whole night through a camera screen. Take a few photos, then give your eyes a chance to adjust and simply watch. The memory of those moving colours may be the best thing you bring home.",
        ],
      },
    ],
  },
  {
    slug: "a-weekend-in-bergen",
    title: "A weekend in Bergen, well spent",
    category: "Travel guides",
    date: "August 27, 2026",
    readTime: "7 min read",
    excerpt: "Colourful wharves, neighbourhood cafés, and a mountain walk: make a long weekend feel like a real escape.",
    image: "/images/bergen.jpg",
    imageAlt: "A deep Norwegian fjord framed by green mountains",
    intro: "Bergen is a city that makes it easy to balance a little exploring with a lot of lingering. Its harbour is full of history, its hills begin just beyond the last street, and good coffee is rarely far away.",
    sections: [
      {
        heading: "Start by the water",
        paragraphs: [
          "Take an unhurried walk around Bryggen before the day gets busy. The old wooden buildings are beautiful, but the side lanes and little workshops are where you begin to get a feel for the place.",
          "For lunch, look for seasonal seafood and something warm if the weather has turned. Bergen is at its most inviting when you lean into the day it gives you.",
        ],
      },
      {
        heading: "Find your own view",
        paragraphs: [
          "The Fløibanen funicular is an easy way to get above the rooftops, but there are walking paths too if you would rather take your time. Pack a light rain jacket and follow a trail until the city feels pleasantly small below you.",
          "If you have another day, take a boat towards the fjords and let the coastline become the plan.",
        ],
      },
      {
        heading: "Keep the evening simple",
        paragraphs: [
          "Choose a neighbourhood restaurant, order what is fresh, and save space for a slow walk back past the harbour. The best city breaks are not always the ones with the most reservations.",
        ],
      },
    ],
  },
  {
    slug: "packing-light-for-norwegian-weather",
    title: "Packing light for Norwegian weather",
    category: "Travel guides",
    date: "August 14, 2026",
    readTime: "4 min read",
    excerpt: "A practical, no-fuss packing list for changeable skies, easy hikes, and days that move between town and trail.",
    image: "/images/cabin.jpg",
    imageAlt: "A snowy mountain landscape and a small cabin",
    intro: "Norwegian weather can change its mind halfway through a walk. Packing well is not about bringing more; it is about choosing a few useful layers that work together.",
    sections: [
      {
        heading: "Think in layers",
        paragraphs: [
          "Start with a comfortable base layer, add a warm mid-layer, and finish with a light waterproof shell. This combination takes up less space than a bulky coat and is much easier to adjust as the day changes.",
          "Even in summer, bring a warm layer for evenings by the water or higher up in the mountains.",
        ],
      },
      {
        heading: "Choose shoes for the day you have",
        paragraphs: [
          "For city streets, comfortable shoes you can wear all day are ideal. If a hike is on your plans, pack shoes with reliable grip and give them a test run before your trip.",
          "A small day bag, refillable bottle, and dry bag for your phone cover more situations than a suitcase full of extras.",
        ],
      },
      {
        heading: "Leave a little space",
        paragraphs: [
          "A lighter bag makes train changes and ferry steps easier. Keep a little room for a woollen souvenir or a local treat, and let the forecast guide any last-minute additions.",
        ],
      },
    ],
  },
  {
    slug: "finding-the-quiet-side-of-lofoten",
    title: "Finding the quiet side of Lofoten",
    category: "Slow travel",
    date: "July 30, 2026",
    readTime: "6 min read",
    excerpt: "Beyond the postcard views, find small fishing villages, calm coastal walks, and the pleasure of staying a little longer.",
    image: "/images/vesteralen.jpg",
    imageAlt: "A still mountain lake reflecting the evening light",
    intro: "The Lofoten Islands are every bit as striking as the photographs suggest. They are also a place where a slower pace makes all the difference: quieter mornings, small roads taken on foot, and time to simply be by the sea.",
    sections: [
      {
        heading: "Stay for more than a night",
        paragraphs: [
          "Choosing one village as a base gives you time to notice the changing light and support local businesses beyond the busiest hours. A few extra days can turn a list of stops into a sense of place.",
          "Look for locally run accommodation and ask your hosts which nearby walk they return to most often.",
        ],
      },
      {
        heading: "Follow the coast at its own pace",
        paragraphs: [
          "You do not need a summit for a memorable day out. A low-tide shoreline walk or a quiet harbour loop can offer its own kind of wonder, especially when the weather is doing something interesting.",
          "Check local trail advice, respect private land, and leave beaches and paths exactly as you found them.",
        ],
      },
      {
        heading: "Make space for a still day",
        paragraphs: [
          "Let one day have no ambitious plan at all. Pick up something local to eat, find a sheltered view, and see what the clouds do. In Lofoten, that can be more than enough.",
        ],
      },
    ],
  },
  {
    slug: "small-moments-in-trondheim",
    title: "Small moments in Trondheim",
    category: "Travel guides",
    date: "July 16, 2026",
    readTime: "5 min read",
    excerpt: "A riverside wander, a bakery stop, and a colourful old town: a city guide built around the simple pleasures.",
    image: "/images/trondheim.jpg",
    imageAlt: "Soft blue ocean waves and a pale Nordic sky",
    intro: "Trondheim rewards the traveller who likes to wander. It is a city of handsome old streets, lively student corners, and little pauses that seem to stretch pleasantly into an afternoon.",
    sections: [
      {
        heading: "Walk the river loop",
        paragraphs: [
          "Follow the Nidelva through the city and take time around the old wharves. Cross the bridges, double back through a side street, and let the colourful wooden facades set the pace.",
          "The best way to see the centre is on foot, with no need to turn every corner into a timed stop.",
        ],
      },
      {
        heading: "Take a proper café break",
        paragraphs: [
          "Find a local bakery or café, order something you have not tried before, and give yourself a little time to sit. A warm drink is as useful for planning the next walk as it is for watching the city go by.",
        ],
      },
      {
        heading: "Keep the day open",
        paragraphs: [
          "If the sky clears, take the longer route through a park. If it rains, duck into a museum or stay for a second coffee. Trondheim is a lovely city in which to let the weather choose.",
        ],
      },
    ],
  },
];

export function getBlogArticle(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}
