// Listening exercises use the browser's built-in Web Speech API (SpeechSynthesis)
// to read the script aloud, so no audio files are needed.
const listeningData = [
  {
    id: 'l1',
    level: 'Beginner',
    title: 'At the Cafe',
    script: `Waiter: Good morning! What would you like to order? Customer: Hi, can I have a coffee and a croissant, please? Waiter: Sure. Anything else? Customer: No, that's all, thank you. Waiter: That will be five dollars. Customer: Here you go. Waiter: Thank you, enjoy your breakfast!`,
    questions: [
      { q: 'What does the customer order?', options: ['Tea and cake', 'Coffee and a croissant', 'Juice and toast', 'Water only'], answer: 1 },
      { q: 'How much does the order cost?', options: ['Three dollars', 'Four dollars', 'Five dollars', 'Ten dollars'], answer: 2 },
    ],
  },
  {
    id: 'l2',
    level: 'Beginner',
    title: 'Asking for Directions',
    script: `Man: Excuse me, how do I get to the train station? Woman: Go straight for two blocks, then turn left. The station is on your right, next to the bank. Man: Is it far from here? Woman: No, it's about a five-minute walk. Man: Thank you so much! Woman: You're welcome.`,
    questions: [
      { q: 'Where does the man need to go?', options: ['The bank', 'The train station', 'The airport', 'The hospital'], answer: 1 },
      { q: 'How long does the walk take?', options: ['Two minutes', 'Five minutes', 'Ten minutes', 'One hour'], answer: 1 },
    ],
  },
  {
    id: 'l3',
    level: 'Elementary',
    title: 'Weekend Plans',
    script: `Sarah: What are you doing this weekend? Mike: I'm going hiking with my brother on Saturday. What about you? Sarah: I'm staying home. I want to clean my apartment and watch some movies. Mike: That sounds relaxing. Maybe we can meet on Sunday for lunch? Sarah: Sure, that sounds great! Let's meet at noon.`,
    questions: [
      { q: 'What is Mike doing on Saturday?', options: ['Cleaning', 'Hiking', 'Working', 'Watching movies'], answer: 1 },
      { q: 'What does Sarah plan to do?', options: ['Go hiking', 'Clean and watch movies', 'Go shopping', 'Visit family'], answer: 1 },
      { q: 'When will they meet?', options: ['Saturday morning', 'Sunday at noon', 'Friday evening', 'Monday'], answer: 1 },
    ],
  },
  {
    id: 'l4',
    level: 'Elementary',
    title: 'Booking a Hotel Room',
    script: `Receptionist: Good evening, how can I help you? Guest: I'd like to book a room for two nights, please. Receptionist: Certainly. Would you prefer a single or a double room? Guest: A double room, please, with a nice view if possible. Receptionist: We have one available on the fifth floor with a city view. Guest: Perfect, I'll take it. Receptionist: Great, may I have your name and phone number, please?`,
    questions: [
      { q: 'How many nights does the guest want to stay?', options: ['One', 'Two', 'Three', 'A week'], answer: 1 },
      { q: 'What type of room does the guest choose?', options: ['Single', 'Double', 'Family', 'Suite'], answer: 1 },
      { q: 'Which floor is the room on?', options: ['First', 'Third', 'Fifth', 'Tenth'], answer: 2 },
    ],
  },
  {
    id: 'l5',
    level: 'Intermediate',
    title: 'A Job Interview',
    script: `Interviewer: Thanks for coming in today. Can you tell me a bit about your previous work experience? Candidate: Of course. I worked as a marketing assistant for three years at a small company, where I managed social media campaigns and helped organize events. Interviewer: That's great. What would you say is your biggest strength? Candidate: I'd say my ability to stay organized and meet deadlines, even when working on several projects at once. Interviewer: Excellent. Do you have any questions for us? Candidate: Yes, could you tell me more about the team I'd be working with?`,
    questions: [
      { q: 'What did the candidate do at their previous job?', options: ['Sales', 'Managed social media and events', 'Accounting', 'Customer support'], answer: 1 },
      { q: 'How long did the candidate work there?', options: ['One year', 'Two years', 'Three years', 'Five years'], answer: 2 },
      { q: "What does the candidate say is their biggest strength?", options: ['Public speaking', 'Being organized and meeting deadlines', 'Coding skills', 'Leadership'], answer: 1 },
    ],
  },
  {
    id: 'l6',
    level: 'Intermediate',
    title: 'Talking About the News',
    script: `Anna: Did you see the news this morning? Ben: No, what happened? Anna: There was a big storm on the coast last night. Many flights were delayed at the airport. Ben: Oh no, that's terrible. Is anyone hurt? Anna: No injuries reported so far, but a lot of trees fell down and some streets are flooded. Ben: I hope the weather improves soon. Anna: Yes, they say it should clear up by tomorrow afternoon.`,
    questions: [
      { q: 'What happened last night?', options: ['An earthquake', 'A big storm', 'A fire', 'A power outage'], answer: 1 },
      { q: 'What was affected at the airport?', options: ['Nothing', 'Flights were delayed', 'It was closed permanently', 'Prices increased'], answer: 1 },
      { q: 'When is the weather expected to improve?', options: ['Tonight', 'Tomorrow afternoon', 'Next week', 'It already improved'], answer: 1 },
    ],
  },
  {
    id: 'l7',
    level: 'Intermediate',
    title: 'Ordering Food Delivery',
    script: `Operator: Thank you for calling Golden Dragon, how can I help you? Customer: Hi, I'd like to order some food for delivery. Operator: Sure, what would you like? Customer: Can I get one order of fried rice, two spring rolls, and a bottle of water? Operator: Of course. That will be about thirty-five minutes. Could I get your address, please? Customer: Yes, it's 24 Baker Street. Operator: Perfect, your total is eighteen dollars, and it will arrive in about thirty-five minutes.`,
    questions: [
      { q: 'What does the customer order?', options: ['Pizza and soda', 'Fried rice, spring rolls, and water', 'Only fried rice', 'Noodles'], answer: 1 },
      { q: 'How long will the delivery take?', options: ['Ten minutes', 'Twenty minutes', 'Thirty-five minutes', 'One hour'], answer: 2 },
      { q: 'What is the total cost?', options: ['Eight dollars', 'Eighteen dollars', 'Twenty-eight dollars', 'Thirty dollars'], answer: 1 },
    ],
  },
  {
    id: 'l8',
    level: 'Upper-Intermediate',
    title: 'A University Lecture Excerpt',
    script: `Professor: Today we'll look at how climate affects migration patterns in birds. Many species travel thousands of kilometers each year to find better breeding conditions and food sources. Interestingly, researchers have noticed that rising global temperatures are changing these patterns. Some birds now migrate earlier in the spring, while others have shortened their migration routes altogether. This can create problems, because if birds arrive at their destination before their food source is ready, their chances of survival decrease significantly.`,
    questions: [
      { q: 'Why do many bird species migrate?', options: ['To escape predators only', 'To find better breeding conditions and food', 'For no particular reason', 'To follow other animals'], answer: 1 },
      { q: 'How is climate change affecting migration?', options: ['It has no effect', 'Birds migrate earlier or shorten their routes', 'Birds stopped migrating entirely', 'Birds migrate to colder places'], answer: 1 },
      { q: 'What problem can early migration cause?', options: ['Birds get lost', 'Food may not be ready when birds arrive', 'Birds grow larger', 'Birds forget their routes'], answer: 1 },
    ],
  },
  {
    id: 'l9',
    level: 'Upper-Intermediate',
    title: 'Discussing a Business Plan',
    script: `Investor: So, walk me through your business plan. What problem are you solving? Founder: We're building an app that connects small local farms directly with customers, cutting out the middleman. This means farmers earn more, and customers get fresher produce at lower prices. Investor: Interesting. How do you plan to make money? Founder: We take a small commission on each transaction, around five percent. We're also planning a subscription option for regular customers. Investor: What's your biggest challenge right now? Founder: Honestly, it's building trust. Farmers are used to selling through traditional markets, so we need to show them the benefits clearly.`,
    questions: [
      { q: "What problem does the founder's app solve?", options: ['Connecting farmers directly with customers', 'Delivering packages faster', 'Teaching farming skills', 'Selling farm equipment'], answer: 0 },
      { q: 'How does the company make money?', options: ['Selling advertisements', 'A commission on transactions', 'Government funding', 'Selling farm land'], answer: 1 },
      { q: "What is the founder's biggest challenge?", options: ['Finding investors', 'Building trust with farmers', 'Hiring staff', 'Technical problems'], answer: 1 },
    ],
  },
  {
    id: 'l10',
    level: 'Upper-Intermediate',
    title: 'A Podcast About Habits',
    script: `Host: Welcome back to the show. Today we're talking about how small daily habits shape our long-term success. Guest: That's right. People often underestimate how powerful tiny, consistent actions can be. For example, reading just ten pages a day might not seem like much, but over a year, that adds up to several books. Host: So it's really about consistency rather than intensity? Guest: Exactly. Most people fail not because they lack motivation at the start, but because they can't maintain the habit once the initial excitement fades. Building systems, rather than relying on willpower alone, tends to work much better in the long run.`,
    questions: [
      { q: 'What do people often underestimate, according to the guest?', options: ['The cost of habits', 'The power of small, consistent actions', 'The need for motivation', 'The importance of rest'], answer: 1 },
      { q: 'What does the guest say matters more than intensity?', options: ['Speed', 'Consistency', 'Talent', 'Luck'], answer: 1 },
      { q: 'Why do most people fail to keep a habit, according to the guest?', options: ['They lack motivation at the start', "They can't maintain it once excitement fades", 'They set goals too low', 'They have no free time'], answer: 1 },
    ],
  },
]

export default listeningData
