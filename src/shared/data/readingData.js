const readingData = [
  {
    id: "r1",
    level: "Beginner",
    title: "My Family",
    text: `Hello! My name is Anna. I am twelve years old. I live with my mother, my father, and my little brother. My mother is a doctor. She works in a big hospital. My father is a teacher. He teaches math at a school. My brother is six years old. He likes to play with toy cars. We have a small dog. Her name is Lucy. On Sundays, we go to the park together. I love my family very much.`,
    questions: [
      {
        q: "How old is Anna?",
        options: ["Six", "Twelve", "Ten", "Eight"],
        answer: 1,
      },
      {
        q: "What does Anna's mother do?",
        options: ["Teacher", "Doctor", "Engineer", "Driver"],
        answer: 1,
      },
      {
        q: "What does Anna's brother like?",
        options: ["Toy cars", "Books", "Football", "Music"],
        answer: 0,
      },
      {
        q: "What is the dog's name?",
        options: ["Bella", "Max", "Lucy", "Rex"],
        answer: 2,
      },
    ],
  },
  {
    id: "r2",
    level: "Beginner",
    title: "A Day at School",
    text: `Every morning, Tom wakes up at seven o'clock. He eats breakfast with his family and then walks to school. School starts at eight thirty. His favorite subject is science because he likes doing experiments. At lunchtime, he eats sandwiches with his friends in the cafeteria. After school, Tom plays football with his classmates. He comes home at five o'clock and does his homework before dinner. Tom goes to bed at nine o'clock every night.`,
    questions: [
      {
        q: "What time does Tom wake up?",
        options: ["6:00", "7:00", "8:30", "9:00"],
        answer: 1,
      },
      {
        q: "What is his favorite subject?",
        options: ["Math", "Art", "Science", "History"],
        answer: 2,
      },
      {
        q: "Where does he eat lunch?",
        options: ["At home", "In the park", "In the cafeteria", "In class"],
        answer: 2,
      },
      {
        q: "What does he do after school?",
        options: ["Sleeps", "Plays football", "Watches TV", "Reads"],
        answer: 1,
      },
    ],
  },
  {
    id: "r3",
    level: "Elementary",
    title: "The Weather Today",
    text: `The weather changes every season. In summer, the days are long and hot. People wear light clothes and often go swimming. In winter, it is cold, and in many places, it snows. People wear warm coats, hats, and gloves. Spring brings flowers and rain, while autumn brings colorful leaves and cool wind. Many people say that autumn is the most beautiful season because the trees turn red, orange, and yellow.`,
    questions: [
      {
        q: "What do people do in summer?",
        options: ["Ski", "Swim", "Wear coats", "Stay inside"],
        answer: 1,
      },
      {
        q: "What happens in winter?",
        options: [
          "It gets hot",
          "Flowers grow",
          "It snows",
          "Leaves turn green",
        ],
        answer: 2,
      },
      {
        q: "What season brings flowers?",
        options: ["Winter", "Summer", "Spring", "Autumn"],
        answer: 2,
      },
      {
        q: "Which season is called the most beautiful?",
        options: ["Summer", "Winter", "Spring", "Autumn"],
        answer: 3,
      },
    ],
  },
  {
    id: "r4",
    level: "Elementary",
    title: "Going to the Market",
    text: `Every Saturday, Mrs. Johnson goes to the farmers market near her house. She likes buying fresh vegetables and fruit there because they are cheaper and tastier than in the supermarket. Today, she bought tomatoes, apples, and fresh bread. She also talked to the man who sells honey; he told her that this year's honey is especially sweet. On her way home, she stopped at a small cafe for a cup of coffee and watched people walking by.`,
    questions: [
      {
        q: "When does Mrs. Johnson go to the market?",
        options: ["Every day", "Every Saturday", "Once a month", "On Sundays"],
        answer: 1,
      },
      {
        q: "Why does she prefer the market?",
        options: [
          "It is closer",
          "It is cheaper and tastier",
          "It is bigger",
          "It has more shops",
        ],
        answer: 1,
      },
      {
        q: "What did she buy today?",
        options: [
          "Meat and fish",
          "Tomatoes, apples, bread",
          "Only vegetables",
          "Clothes",
        ],
        answer: 1,
      },
      {
        q: "What did she do before going home?",
        options: [
          "Bought a book",
          "Had coffee at a cafe",
          "Went to the bank",
          "Visited a friend",
        ],
        answer: 1,
      },
    ],
  },
  {
    id: "r5",
    level: "Intermediate",
    title: "Learning a New Language",
    text: `Learning a new language can be challenging, but it is also very rewarding. Scientists say that people who speak more than one language often find it easier to focus and switch between tasks. The best way to learn a language is through daily practice: listening to native speakers, reading simple texts, and trying to speak, even if you make mistakes. Many learners feel embarrassed about making errors, but mistakes are actually an important part of the learning process. Without practice, progress is almost impossible.`,
    questions: [
      {
        q: "What do scientists say about bilingual people?",
        options: [
          "They forget faster",
          "They focus better and switch tasks easily",
          "They read slower",
          "They cannot multitask",
        ],
        answer: 1,
      },
      {
        q: "What is the best way to learn a language according to the text?",
        options: [
          "Only reading grammar books",
          "Daily practice: listening, reading, speaking",
          "Watching TV once a week",
          "Memorizing dictionaries",
        ],
        answer: 1,
      },
      {
        q: "How do many learners feel about mistakes?",
        options: ["Proud", "Embarrassed", "Indifferent", "Excited"],
        answer: 1,
      },
      {
        q: "What does the text say about mistakes?",
        options: [
          "They should be avoided completely",
          "They are an important part of learning",
          "They slow down progress",
          "They are useless",
        ],
        answer: 1,
      },
    ],
  },
  {
    id: "r6",
    level: "Intermediate",
    title: "The Rise of Remote Work",
    text: `Over the past several years, remote work has become increasingly common. Many companies discovered that employees can be just as productive, or even more productive, working from home. This shift has brought several benefits: workers save time on commuting, spend more time with their families, and often report lower stress levels. However, remote work also has downsides. Some employees feel isolated without daily face-to-face contact with colleagues, and it can be harder to separate work life from personal life when both happen in the same space.`,
    questions: [
      {
        q: "What did many companies discover about remote employees?",
        options: [
          "They are less productive",
          "They can be just as or more productive",
          "They quit more often",
          "They need more supervision",
        ],
        answer: 1,
      },
      {
        q: "Which of these is mentioned as a benefit?",
        options: [
          "Higher salary",
          "Saving time on commuting",
          "Free lunch",
          "More vacation days",
        ],
        answer: 1,
      },
      {
        q: "What is one downside mentioned in the text?",
        options: [
          "Higher costs",
          "Feeling isolated",
          "Slower internet",
          "Fewer job opportunities",
        ],
        answer: 1,
      },
      {
        q: "Why is it harder to separate work and personal life?",
        options: [
          "Because of long commutes",
          "Because both happen in the same space",
          "Because of strict bosses",
          "Because of low pay",
        ],
        answer: 1,
      },
    ],
  },
  {
    id: "r7",
    level: "Intermediate",
    title: "Why Sleep Matters",
    text: `Sleep plays a crucial role in maintaining both physical and mental health. During sleep, the brain processes information gathered throughout the day and stores important memories. Lack of sleep has been linked to poor concentration, weakened immune systems, and a higher risk of certain illnesses. Experts recommend that adults get between seven and nine hours of sleep per night. Simple habits, such as avoiding screens before bed and keeping a consistent sleep schedule, can significantly improve sleep quality.`,
    questions: [
      {
        q: "What does the brain do during sleep?",
        options: [
          "It stops working",
          "It processes information and stores memories",
          "It only rests the eyes",
          "It burns calories",
        ],
        answer: 1,
      },
      {
        q: "What is lack of sleep linked to?",
        options: [
          "Better focus",
          "Poor concentration and weaker immunity",
          "Faster learning",
          "Longer life",
        ],
        answer: 1,
      },
      {
        q: "How many hours of sleep do experts recommend for adults?",
        options: ["3-4 hours", "5-6 hours", "7-9 hours", "10-12 hours"],
        answer: 2,
      },
      {
        q: "What habit is suggested to improve sleep quality?",
        options: [
          "Using screens before bed",
          "Avoiding screens before bed",
          "Sleeping at different times daily",
          "Drinking coffee before bed",
        ],
        answer: 1,
      },
    ],
  },
  {
    id: "r8",
    level: "Upper-Intermediate",
    title: "The Power of Habits",
    text: `Habits shape a large part of our daily lives, often without us even realizing it. Researchers estimate that a significant portion of our daily actions are performed automatically, driven by habit rather than conscious decision-making. Forming a new habit typically requires repetition over an extended period, and the process is easier when the new behavior is linked to an existing routine. For instance, someone hoping to read more might place a book next to their coffee maker, using the established habit of making coffee as a trigger for the new one.`,
    questions: [
      {
        q: "What does the text say about daily actions?",
        options: [
          "Most are carefully planned",
          "A large portion are done automatically by habit",
          "None are habitual",
          "They change every day",
        ],
        answer: 1,
      },
      {
        q: "What does forming a new habit typically require?",
        options: [
          "A single strong decision",
          "Repetition over time",
          "Complete isolation",
          "Financial investment",
        ],
        answer: 1,
      },
      {
        q: "What makes forming a new habit easier?",
        options: [
          "Doing it randomly",
          "Linking it to an existing routine",
          "Avoiding all routines",
          "Doing it only once",
        ],
        answer: 1,
      },
      {
        q: "In the example, what triggers the reading habit?",
        options: [
          "An alarm clock",
          "Making coffee",
          "Going to bed",
          "Eating dinner",
        ],
        answer: 1,
      },
    ],
  },
  {
    id: "r9",
    level: "Upper-Intermediate",
    title: "Cities of the Future",
    text: `As urban populations continue to grow, city planners are rethinking how cities should be designed. One major trend is the development of "15-minute cities," where residents can reach work, schools, shops, and parks within a short walk or bike ride from home. Proponents argue that this model reduces traffic congestion, lowers pollution, and strengthens local communities. Critics, however, worry about the cost of redesigning existing infrastructure and question whether such a model is realistic for cities that were built around cars decades ago.`,
    questions: [
      {
        q: 'What is a "15-minute city"?',
        options: [
          "A city with fast trains",
          "A city where daily needs are within a short walk or ride",
          "A city built in 15 minutes",
          "A city with no cars at all",
        ],
        answer: 1,
      },
      {
        q: "What do proponents say about this model?",
        options: [
          "It increases pollution",
          "It reduces congestion and strengthens communities",
          "It has no effect",
          "It only helps drivers",
        ],
        answer: 1,
      },
      {
        q: "What concern do critics raise?",
        options: [
          "It is too cheap",
          "The cost of redesigning infrastructure",
          "It creates more parks",
          "It is too popular",
        ],
        answer: 1,
      },
      {
        q: "Why might the model be hard to apply in some cities?",
        options: [
          "They lack residents",
          "They were built around cars",
          "They have no shops",
          "They are too small",
        ],
        answer: 1,
      },
    ],
  },
  {
    id: "r10",
    level: "Upper-Intermediate",
    title: "The Value of Failure",
    text: `Many successful people describe failure as an essential step on the path to achievement, rather than something to be avoided at all costs. When a project or plan does not go as expected, it often reveals valuable information about what does not work, allowing for adjustments in the future. Organizations that punish every mistake tend to discourage risk-taking and innovation among their employees, while those that treat failure as a learning opportunity often see more creative problem-solving. Of course, this does not mean failure should be sought out deliberately; rather, it should be accepted as a natural part of any ambitious effort.`,
    questions: [
      {
        q: "How do many successful people view failure?",
        options: [
          "As something to avoid entirely",
          "As an essential step toward achievement",
          "As proof of weakness",
          "As irrelevant to success",
        ],
        answer: 1,
      },
      {
        q: "What can failure reveal, according to the text?",
        options: [
          "Nothing useful",
          "Valuable information about what does not work",
          "Only financial loss",
          "The identity of competitors",
        ],
        answer: 1,
      },
      {
        q: "What happens in organizations that punish every mistake?",
        options: [
          "More innovation",
          "Less risk-taking and innovation",
          "Higher employee satisfaction",
          "Faster growth",
        ],
        answer: 1,
      },
      {
        q: "Does the text suggest seeking failure on purpose?",
        options: [
          "Yes, always",
          "No, but accept it as natural",
          "Yes, to get attention",
          "It does not mention this",
        ],
        answer: 1,
      },
    ],
  },
];

export default readingData;
