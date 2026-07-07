export const LISTENING_PART_1 = {
  audioUrl: "https://storage.m3cdn.xyz/audio/1782652891560-hotel.mp3",
  title: "Part 1: Guest Check-in",
  description: "Listen to a woman checking into a hotel, and for questions 1 to 7, choose the correct answer.",
  warning: "Audio can only be played ONCE. Please listen carefully.",
  questions: [
    {
      id: "l1_1",
      type: "mcq",
      questionText: "What's Lisa's surname?",
      options: [
        { key: "A", text: "Berardelli" },
        { key: "B", text: "Bernardeli" },
        { key: "C", text: "Bianardelli" }
      ],
      correctAnswer: "A"
    },
    {
      id: "l1_2",
      type: "mcq",
      questionText: "What room has Lisa booked?",
      options: [
        { key: "A", text: "double" },
        { key: "B", text: "twin" },
        { key: "C", text: "single" }
      ],
      correctAnswer: "C"
    },
    {
      id: "l1_3",
      type: "mcq",
      questionText: "What was the problem with the reservation?",
      options: [
        { key: "A", text: "Lisa booked a different room" },
        { key: "B", text: "The computer didn't show a reservation" },
        { key: "C", text: "The receptionist made a mistake" }
      ],
      correctAnswer: "C"
    },
    {
      id: "l1_4",
      type: "mcq",
      questionText: "Where can Lisa have dinner today?",
      options: [
        { key: "A", text: "In the dining area" },
        { key: "B", text: "In the restaurant" },
        { key: "C", text: "In her room" }
      ],
      correctAnswer: "C"
    },
    {
      id: "l1_5",
      type: "mcq",
      questionText: "What time will Lisa check out tomorrow?",
      options: [
        { key: "A", text: "12 pm" },
        { key: "B", text: "11 am" },
        { key: "C", text: "Before 11 am" }
      ],
      correctAnswer: "A"
    },
    {
      id: "l1_6",
      type: "mcq",
      questionText: "What does Lisa ask the receptionist?",
      options: [
        { key: "A", text: "She asks her to wake her up tomorrow." },
        { key: "B", text: "She asks her for a phone charger." },
        { key: "C", text: "She asks her to let her charge her phone." }
      ],
      correctAnswer: "A"
    },
    {
      id: "l1_7",
      type: "mcq",
      questionText: "What time does Lisa want to get up tomorrow?",
      options: [
        { key: "A", text: "7:00 am" },
        { key: "B", text: "7:30 am" },
        { key: "C", text: "8:00 am" }
      ],
      correctAnswer: "B"
    }
  ]
};

export const LISTENING_PART_2 = {
  audioUrl: "https://storage.m3cdn.xyz/audio/section%201%20rented%20properties.mp3",
  title: "Part 2: Rented Properties",
  description: "Complete the table below. Write ONE WORD AND/OR A NUMBER for each answer.",
  warning: "Audio can only be played ONCE. Please listen carefully.",
  correctAnswers: {
    l2_1: "May 5th",
    l2_2: "1700",
    l2_3: "15",
    l2_4: "Kitchen",
    l2_5: "Dishwasher",
    l2_6: "Garage",
    l2_7: "Water",
    l2_8: "Recycling",
    l2_9: "Window",
    l2_10: "Dressler"
  }
};

export const SPEAKING_PART_1 = {
  title: "Part 1: Read Aloud",
  description: "Chọn mức độ khó phù hợp và đọc to đoạn văn tương ứng thành tiếng. Mỗi đoạn văn dài hơn và có cấu trúc từ vựng đa dạng để đánh giá chính xác hơn khả năng phát âm, trọng âm và ngắt nghỉ.",
  levels: [
    {
      id: "easy",
      name: "Dễ (Easy)",
      difficulty: "IELTS 4.0 - 5.0",
      description: "Đoạn văn có từ vựng thông dụng và cấu trúc đơn giản. Tập trung vào phát âm rõ ràng các âm đuôi cơ bản, duy trì tốc độ vừa phải.",
      passage: "Learning a new language is an amazing adventure that opens up many doors in life. Today, young students all over the world use online applications to practice English every single morning. They read storybooks, listen to popular songs, and talk to international friends. Computers and smartphones make it very easy to find useful resources, such as free videos and interactive games. Some people prefer studying alone in a quiet room, while others enjoy group activities at local clubs. No matter which method you like best, the most important key is to practice speaking out loud every day. Do not worry about making small mistakes because they are a natural part of the learning journey. With time and steady practice, your confidence will grow, and you will find yourself communicating with ease and joy in any conversation."
    },
    {
      id: "medium",
      name: "Trung bình (Medium)",
      difficulty: "IELTS 5.5 - 6.5",
      description: "Đoạn văn chủ đề Môi trường. Có các từ vựng học thuật phổ biến. Tập trung nhấn đúng trọng âm của các từ có 2-3 âm tiết trở lên.",
      passage: "Protecting our natural environment is one of the most urgent tasks facing modern society today. Across the globe, tropical forests and unique marine habitats are experiencing rapid changes due to human activity and climate shifts. Scientists are working tirelessly to collect critical data and monitor these vulnerable ecosystems before it is too late. They conduct field research, analyze complex weather patterns, and recommend sustainable policies to local governments. Interestingly, simple everyday actions by individuals can make a substantial impact on global efforts. For instance, reducing household waste, selecting reusable products, and conserving clean water can significantly preserve biodiversity. Educational institutions play a vital role by teaching students about the delicate balance of nature and the benefits of renewable energy. By working together and supporting environmental projects, we can secure a healthier, cleaner, and more vibrant planet for future generations."
    },
    {
      id: "hard",
      name: "Khó (Hard)",
      difficulty: "IELTS 7.0 - 7.5",
      description: "Đoạn văn chủ đề Đô thị hóa. Câu dài với nhiều mệnh đề quan hệ và cụm phụ âm đuôi phức tạp. Cần chú ý liên kết âm (linking sounds) và ngữ điệu.",
      passage: "Urbanization represents a defining global phenomenon of the twenty-first century, transforming landscapes and altering human lifestyles at unprecedented rates. As rural populations migrate to metropolitan areas in search of superior economic opportunities and social mobility, cities face immense pressure to develop robust infrastructure. Contemporary architects and urban planners must synthesize aesthetic design with practical functionality to address severe challenges, including housing shortages and traffic congestion. Green building initiatives have gained considerable momentum, emphasizing energy-efficient materials, rooftop gardens, and public parks to mitigate the heat island effect. Furthermore, the integration of smart technology allows city administrators to monitor energy grids, manage public transportation networks, and optimize water distribution systems efficiently. Ultimately, the success of future smart cities depends not only on advanced technological solutions but also on inclusive policies that foster social cohesion, promote public health, and ensure equal access to essential services for all residents."
    },
    {
      id: "advanced",
      name: "Rất khó (Advanced)",
      difficulty: "IELTS 8.0+",
      description: "Đoạn văn chuyên sâu về Trí tuệ nhân tạo và Nhận thức. Đòi hỏi khả năng kiểm soát hơi thở tốt, phát âm chuẩn xác các từ chuyên ngành phức tạp và nhấn trọng âm câu.",
      passage: "The rapid proliferation of artificial intelligence has catalyzed a profound paradigm shift across diverse academic disciplines, challenging traditional assumptions regarding human cognition and creativity. While machine learning algorithms demonstrate remarkable proficiency in processing vast datasets, recognizing complex patterns, and executing sophisticated computations, they lack genuine consciousness and subjective experience. Cognitive psychologists argue that human intelligence is inherently multidimensional, encompassing emotional empathy, contextual adaptation, and the unique capacity for philosophical introspection. Consequently, the optimal integration of technology involves a collaborative synergy, where computational speed complements human intuition and ethical judgment. However, this transition necessitates a rigorous reevaluation of intellectual property rights, educational methodologies, and workplace dynamics to safeguard individual autonomy and promote social equity. As society stands on the threshold of this unprecedented technological frontier, policymakers must proactively establish comprehensive regulatory frameworks. These guidelines must balance scientific innovation with ethical boundaries, ensuring that technological advancement ultimately serves to elevate human potential rather than diminish it."
    }
  ]
};

export const SPEAKING_PART_2 = {
  title: "Part 2: Interview Questions",
  description: "Listen to the questions and record your spoken answers. Answer each question in 30-45 seconds.",
  questions: [
    { id: "s2_1", text: "Do you like watching movies?" },
    { id: "s2_2", text: "Is it important to play sports?" },
    { id: "s2_3", text: "Why do many young people prefer living in cities?" }
  ]
};

export const GRAMMAR_QUESTIONS = [
  {
    id: "g_1",
    type: "text",
    questionText: "Yesterday, Linda ________ (visit) her grandparents.",
    hint: "Chia động từ visit ở thì phù hợp",
    correctAnswer: "visited"
  },
  {
    id: "g_2",
    type: "text",
    questionText: "Last weekend, my brother ________ (go) fishing with his friends.",
    hint: "Chia động từ go ở thì phù hợp",
    correctAnswer: "went"
  },
  {
    id: "g_3",
    type: "text",
    questionText: "I ________ (never / try) Japanese food before.",
    hint: "Điền động từ chia ở thì thích hợp (có thể viết hoa chữ đầu hoặc viết thường)",
    correctAnswer: "have never tried"
  },
  {
    id: "g_4",
    type: "text",
    questionText: "My father usually ________ (go) to work by bus.",
    hint: "Chia động từ go ở thì phù hợp",
    correctAnswer: "goes"
  },
  {
    id: "g_5",
    type: "text",
    questionText: "She bought a ________ (beauty) dress for the party.",
    hint: "Điền dạng đúng của từ beauty",
    correctAnswer: "beautiful"
  },
  {
    id: "g_6",
    type: "text",
    questionText: "The students listened ________ (care) to the teacher.",
    hint: "Điền dạng đúng của từ care",
    correctAnswer: "carefully"
  },
  {
    id: "g_7",
    type: "mcq",
    questionText: "The test was ________ easy, so everyone finished early.",
    options: [
      { key: "A", text: "extreme" },
      { key: "B", text: "extremely" },
      { key: "C", text: "extremeness" },
      { key: "D", text: "more extreme" }
    ],
    correctAnswer: "B"
  },
  {
    id: "g_8",
    type: "mcq",
    questionText: "My family moved to this city ________ 2021.",
    options: [
      { key: "A", text: "on" },
      { key: "B", text: "at" },
      { key: "C", text: "in" },
      { key: "D", text: "for" }
    ],
    correctAnswer: "C"
  },
  {
    id: "g_9",
    type: "text",
    questionText: "My teacher suggested ________ (read) more English books.",
    hint: "Chia động từ read ở dạng phù hợp",
    correctAnswer: "reading"
  },
  {
    id: "g_10",
    type: "mcq",
    questionText: "My parents always support ________.",
    options: [
      { key: "A", text: "I" },
      { key: "B", text: "my" },
      { key: "C", text: "me" },
      { key: "D", text: "mine" }
    ],
    correctAnswer: "C"
  },
  {
    id: "g_11",
    type: "mcq",
    questionText: "This backpack is not Tom's. It's ________.",
    options: [
      { key: "A", text: "my" },
      { key: "B", text: "mine" },
      { key: "C", text: "me" },
      { key: "D", text: "I" }
    ],
    correctAnswer: "B"
  },
  {
    id: "g_12",
    type: "mcq",
    questionText: "The woman ________ lives next door is a doctor.",
    options: [
      { key: "A", text: "which" },
      { key: "B", text: "whose" },
      { key: "C", text: "who" },
      { key: "D", text: "where" }
    ],
    correctAnswer: "C"
  },
  {
    id: "g_13",
    type: "mcq",
    questionText: "This is the restaurant ________ we had dinner yesterday.",
    options: [
      { key: "A", text: "where" },
      { key: "B", text: "who" },
      { key: "C", text: "which" },
      { key: "D", text: "whose" }
    ],
    correctAnswer: "A"
  },
  {
    id: "g_14",
    type: "mcq",
    questionText: "The boy ________ over there is my cousin.",
    options: [
      { key: "A", text: "standing" },
      { key: "B", text: "stood" },
      { key: "C", text: "stands" },
      { key: "D", text: "which stand" }
    ],
    correctAnswer: "A"
  },
  {
    id: "g_15",
    type: "mcq",
    questionText: "________ every day is good for your health.",
    options: [
      { key: "A", text: "Walk" },
      { key: "B", text: "Walking" },
      { key: "C", text: "Walked" },
      { key: "D", text: "To walked" }
    ],
    correctAnswer: "B"
  },
  {
    id: "g_16",
    type: "mcq",
    questionText: "This exercise is ________ than the previous one.",
    options: [
      { key: "A", text: "more easy" },
      { key: "B", text: "easiest" },
      { key: "C", text: "easier" },
      { key: "D", text: "easily" }
    ],
    correctAnswer: "C"
  },
  {
    id: "g_17",
    type: "mcq",
    questionText: "Among all the runners, Lisa finished the race ________.",
    options: [
      { key: "A", text: "fast" },
      { key: "B", text: "faster" },
      { key: "C", text: "fastest" },
      { key: "D", text: "the fastest" }
    ],
    correctAnswer: "D"
  },
  {
    id: "g_18",
    type: "mcq",
    questionText: "I stayed at home ________ it was raining heavily.",
    options: [
      { key: "A", text: "because" },
      { key: "B", text: "although" },
      { key: "C", text: "so" },
      { key: "D", text: "but" }
    ],
    correctAnswer: "A"
  },
  {
    id: "g_19",
    type: "mcq",
    questionText: "Tom studied hard, ________ he passed the final exam.",
    options: [
      { key: "A", text: "because" },
      { key: "B", text: "although" },
      { key: "C", text: "so" },
      { key: "D", text: "if" }
    ],
    correctAnswer: "C"
  },
  {
    id: "g_20",
    type: "mcq",
    questionText: "If she had left earlier, she ________ the train.",
    options: [
      { key: "A", text: "would catch" },
      { key: "B", text: "would have caught" },
      { key: "C", text: "caught" },
      { key: "D", text: "will catch" }
    ],
    correctAnswer: "B"
  },
  {
    id: "g_21",
    type: "mcq",
    questionText: "If I ________ enough money, I would buy a new laptop.",
    options: [
      { key: "A", text: "have" },
      { key: "B", text: "had" },
      { key: "C", text: "will have" },
      { key: "D", text: "had had" }
    ],
    correctAnswer: "B"
  },
  {
    id: "g_22",
    type: "mcq",
    questionText: "________ I you , I would learn another foreign language.",
    options: [
      { key: "A", text: "Have" },
      { key: "B", text: "Was" },
      { key: "C", text: "Were" },
      { key: "D", text: "If were" }
    ],
    correctAnswer: "C"
  },
  {
    id: "g_23",
    type: "mcq",
    questionText: "There aren't many ________ in the library today.",
    options: [
      { key: "A", text: "student" },
      { key: "B", text: "students" },
      { key: "C", text: "student's" },
      { key: "D", text: "studentes" }
    ],
    correctAnswer: "B"
  },
  {
    id: "g_24",
    type: "mcq",
    questionText: "My sister spends two hours ________ English every evening.",
    options: [
      { key: "A", text: "study" },
      { key: "B", text: "studying" },
      { key: "C", text: "to study" },
      { key: "D", text: "studied" }
    ],
    correctAnswer: "B"
  },
  {
    id: "g_25",
    type: "mcq",
    questionText: "After a few weeks of exercise, he became much ________.",
    options: [
      { key: "A", text: "strong" },
      { key: "B", text: "stronger" },
      { key: "C", text: "strongly" },
      { key: "D", text: "strength" }
    ],
    correctAnswer: "B"
  },
  {
    id: "g_26",
    type: "mcq",
    questionText: "It is important ________ enough water every day.",
    options: [
      { key: "A", text: "drink" },
      { key: "B", text: "drinking" },
      { key: "C", text: "to drink" },
      { key: "D", text: "drank" }
    ],
    correctAnswer: "C"
  },
  {
    id: "g_27",
    type: "mcq",
    questionText: "________ about the traffic jam, we would have left home earlier.",
    options: [
      { key: "A", text: "If we knew" },
      { key: "B", text: "Had we known" },
      { key: "C", text: "Were we knowing" },
      { key: "D", text: "Having known" }
    ],
    correctAnswer: "B"
  },
  {
    id: "g_28",
    type: "mcq",
    questionText: "The students ________ the international competition were invited to meet the principal.",
    options: [
      { key: "A", text: "winning" },
      { key: "B", text: "won" },
      { key: "C", text: "having won" },
      { key: "D", text: "who winning" }
    ],
    correctAnswer: "A"
  },
  {
    id: "g_29",
    type: "mcq",
    questionText: "Not only ________ the report on time, but she also gave an excellent presentation.",
    options: [
      { key: "A", text: "she finished" },
      { key: "B", text: "did she finish" },
      { key: "C", text: "finish" },
      { key: "D", text: "finished" }
    ],
    correctAnswer: "B"
  },
  {
    id: "g_30",
    type: "mcq",
    questionText: "Neither the manager nor the employees who work in the marketing department ________ aware of the new policy.",
    options: [
      { key: "A", text: "is" },
      { key: "B", text: "are" },
      { key: "C", text: "was" },
      { key: "D", text: "has been" }
    ],
    correctAnswer: "B"
  }
];

export const VOCABULARY_QUESTIONS = [
  // A1
  {
    id: "v_1",
    level: "A1",
    type: "mcq",
    questionText: "Every morning, I go to the ________ to read books and borrow novels.",
    options: [
      { key: "A", text: "library" },
      { key: "B", text: "hospital" },
      { key: "C", text: "supermarket" },
      { key: "D", text: "factory" }
    ],
    correctAnswer: "A"
  },
  {
    id: "v_2",
    level: "A1",
    type: "mcq",
    questionText: "My brother goes to school by ________ because it is cheap and good for his health.",
    options: [
      { key: "A", text: "bicycle" },
      { key: "B", text: "airplane" },
      { key: "C", text: "ship" },
      { key: "D", text: "taxi" }
    ],
    correctAnswer: "A"
  },
  {
    id: "v_3",
    level: "A1",
    type: "mcq",
    questionText: "I didn't eat breakfast, so now I feel very ________.",
    options: [
      { key: "A", text: "hungry" },
      { key: "B", text: "busy" },
      { key: "C", text: "expensive" },
      { key: "D", text: "early" }
    ],
    correctAnswer: "A"
  },
  // A2
  {
    id: "v_4",
    level: "A2",
    type: "mcq",
    questionText: "Can you ________ me the dictionary? I forgot mine at home.",
    options: [
      { key: "A", text: "lend" },
      { key: "B", text: "borrow" },
      { key: "C", text: "sell" },
      { key: "D", text: "return" }
    ],
    correctAnswer: "A"
  },
  {
    id: "v_5",
    level: "A2",
    type: "mcq",
    questionText: "Please speak more ________. I can't hear what you are saying.",
    options: [
      { key: "A", text: "loudly" },
      { key: "B", text: "slowly" },
      { key: "C", text: "quietly" },
      { key: "D", text: "carefully" }
    ],
    correctAnswer: "A"
  },
  {
    id: "v_6",
    level: "A2",
    type: "mcq",
    questionText: "Could you ________ me a favour and carry this heavy box?",
    options: [
      { key: "A", text: "make" },
      { key: "B", text: "do" },
      { key: "C", text: "take" },
      { key: "D", text: "give" }
    ],
    correctAnswer: "B"
  },
  {
    id: "v_7",
    level: "A2",
    type: "mcq",
    questionText: "My cousin has made great ________ in English since she started reading books every day.",
    options: [
      { key: "A", text: "progress" },
      { key: "B", text: "experience" },
      { key: "C", text: "information" },
      { key: "D", text: "advice" }
    ],
    correctAnswer: "A"
  },
  {
    id: "v_8",
    level: "A2",
    type: "mcq",
    questionText: "Don't forget to ________ the lights before you leave the classroom.",
    options: [
      { key: "A", text: "pick up" },
      { key: "B", text: "put on" },
      { key: "C", text: "turn off" },
      { key: "D", text: "take away" }
    ],
    correctAnswer: "C"
  },
  {
    id: "v_9",
    level: "A2",
    type: "mcq",
    questionText: "Tom was very ________ when he heard that he had won first prize.",
    options: [
      { key: "A", text: "disappointed" },
      { key: "B", text: "surprised" },
      { key: "C", text: "worried" },
      { key: "D", text: "bored" }
    ],
    correctAnswer: "B"
  },
  // B1
  {
    id: "v_10",
    level: "B1",
    type: "mcq",
    questionText: "The company plans to ________ more workers next year because business is growing.",
    options: [
      { key: "A", text: "employ" },
      { key: "B", text: "deploy" },
      { key: "C", text: "find out" },
      { key: "D", text: "retire" }
    ],
    correctAnswer: "A"
  },
  {
    id: "v_11",
    level: "B1",
    type: "mcq",
    questionText: "You should read the ________ carefully before taking this medicine.",
    options: [
      { key: "A", text: "instructions" },
      { key: "B", text: "invitations" },
      { key: "C", text: "suggestions" },
      { key: "D", text: "introductions" }
    ],
    correctAnswer: "A"
  },
  {
    id: "v_12",
    level: "B1",
    type: "mcq",
    questionText: "The teacher asked us to work together to ________ the problem.",
    options: [
      { key: "A", text: "find" },
      { key: "B", text: "look up" },
      { key: "C", text: "celebrate" },
      { key: "D", text: "address" }
    ],
    correctAnswer: "D"
  },
  {
    id: "v_13",
    level: "B1",
    type: "mcq",
    questionText: "Employees are expected to ________ with safety regulations at all times.",
    options: [
      { key: "A", text: "comply" },
      { key: "B", text: "achieve" },
      { key: "C", text: "contribute" },
      { key: "D", text: "overcome" }
    ],
    correctAnswer: "A"
  },
  {
    id: "v_14",
    level: "B1",
    type: "mcq",
    questionText: "The meeting was ________ because the manager was ill.",
    options: [
      { key: "A", text: "looked after" },
      { key: "B", text: "called off" },
      { key: "C", text: "carried out" },
      { key: "D", text: "taken over" }
    ],
    correctAnswer: "B"
  },
  {
    id: "v_15",
    level: "B1",
    type: "mcq",
    questionText: "The charity was established to provide ________ for children from low-income families.",
    options: [
      { key: "A", text: "equipment" },
      { key: "B", text: "entertainment" },
      { key: "C", text: "assistance" },
      { key: "D", text: "evidence" }
    ],
    correctAnswer: "C"
  },
  // B2
  {
    id: "v_16",
    level: "B2",
    type: "mcq",
    questionText: "The company's success can largely be ________ to its highly skilled employees.",
    options: [
      { key: "A", text: "contributed" },
      { key: "B", text: "attributed" },
      { key: "C", text: "devoted" },
      { key: "D", text: "adapted" }
    ],
    correctAnswer: "B"
  },
  {
    id: "v_17",
    level: "B2",
    type: "mcq",
    questionText: "Many experts believe that governments should ________ stricter measures to reduce carbon emissions.",
    options: [
      { key: "A", text: "impose" },
      { key: "B", text: "attract" },
      { key: "C", text: "persuade" },
      { key: "D", text: "recover" }
    ],
    correctAnswer: "A"
  },
  {
    id: "v_18",
    level: "B2",
    type: "mcq",
    questionText: "With the rapid development of technology, change has become ________ in modern society.",
    options: [
      { key: "A", text: "flexible" },
      { key: "B", text: "inevitable" },
      { key: "C", text: "ordinary" },
      { key: "D", text: "temporary" }
    ],
    correctAnswer: "B"
  },
  {
    id: "v_19",
    level: "B2",
    type: "mcq",
    questionText: "The government has introduced several ________ to encourage people to use renewable energy.",
    options: [
      { key: "A", text: "incentives" },
      { key: "B", text: "occasions" },
      { key: "C", text: "symptoms" },
      { key: "D", text: "consequences" }
    ],
    correctAnswer: "A"
  },
  // C1
  {
    id: "v_20",
    level: "C1",
    type: "mcq",
    questionText: "The scientist was so ________ that he checked every detail of the experiment several times before publishing the results.",
    options: [
      { key: "A", text: "generous" },
      { key: "B", text: "meticulous" },
      { key: "C", text: "ambitious" },
      { key: "D", text: "humorous" }
    ],
    correctAnswer: "B"
  },
  {
    id: "v_21",
    level: "C1",
    type: "mcq",
    questionText: "Spreading false information online can seriously ________ public trust in the government.",
    options: [
      { key: "A", text: "establish" },
      { key: "B", text: "strengthen" },
      { key: "C", text: "undermine" },
      { key: "D", text: "improve" }
    ],
    correctAnswer: "C"
  },
  {
    id: "v_22",
    level: "C1",
    type: "mcq",
    questionText: "Obesity has become increasingly ________ among children due to unhealthy eating habits and a lack of exercise.",
    options: [
      { key: "A", text: "rare" },
      { key: "B", text: "prevalent" },
      { key: "C", text: "temporary" },
      { key: "D", text: "accidental" }
    ],
    correctAnswer: "B"
  }
];

export const READING_PASSAGE = {
  title: "The Problem of Fast Fashion",
  paragraphs: [
    "Many people enjoy buying new clothes because fashion changes quickly and prices are often low. However, this habit has created a serious environmental problem known as \"fast fashion.\" Fast fashion refers to clothing that is produced quickly and cheaply so that stores can keep up with the latest trends. Although this allows customers to buy fashionable clothes at affordable prices, it also encourages people to throw away clothes more frequently. As a result, millions of tons of textile waste are sent to landfills every year.",
    "Producing clothes also requires a large amount of water and energy. For example, growing cotton consumes huge quantities of water, while factories often use chemicals that may pollute nearby rivers if they are not treated properly. In addition, transporting clothes from factories to shops around the world releases greenhouse gases into the atmosphere.",
    "Fortunately, consumers can reduce these environmental impacts in several ways. Instead of buying new clothes every month, they can choose better-quality products that last longer. Repairing damaged clothes, buying used items, and donating unwanted clothing are also effective solutions. Although these actions may seem small, they can make a significant difference if many people take part. Ultimately, governments, clothing companies, and consumers all have an important role in making the fashion industry more environmentally friendly."
  ],
  questions: [
    {
      id: "r_1",
      type: "mcq",
      section: "Part A",
      questionText: "What is the main purpose of the passage?",
      options: [
        { key: "A", text: "To explain why fashion trends change rapidly" },
        { key: "B", text: "To discuss the environmental effects of fast fashion and possible solutions" },
        { key: "C", text: "To encourage people to become fashion designers" },
        { key: "D", text: "To compare expensive and cheap clothing" }
      ],
      correctAnswer: "B"
    },
    {
      id: "r_2",
      type: "mcq",
      section: "Part A",
      questionText: "Which paragraph mainly discusses the causes of pollution during clothing production?",
      options: [
        { key: "A", text: "Paragraph 1" },
        { key: "B", text: "Paragraph 2" },
        { key: "C", text: "Paragraph 3" },
        { key: "D", text: "Paragraph 4" }
      ],
      correctAnswer: "C" // Note: the prompt says "Which paragraph ... [ANSWER] C. Paragraph 3". Let's match the prompt exactly!
    },
    {
      id: "r_3",
      type: "mcq",
      section: "Part B",
      questionText: "Fast fashion makes people buy clothes less often.",
      options: [
        { key: "T", text: "True" },
        { key: "F", text: "False" },
        { key: "NG", text: "Not Given" }
      ],
      correctAnswer: "F"
    },
    {
      id: "r_4",
      type: "mcq",
      section: "Part B",
      questionText: "Cotton production use a large amount of water.",
      options: [
        { key: "T", text: "True" },
        { key: "F", text: "False" },
        { key: "NG", text: "Not Given" }
      ],
      correctAnswer: "T"
    },
    {
      id: "r_5",
      type: "mcq",
      section: "Part B",
      questionText: "Most clothing factories use renewable energy.",
      options: [
        { key: "T", text: "True" },
        { key: "F", text: "False" },
        { key: "NG", text: "Not Given" }
      ],
      correctAnswer: "NG"
    },
    {
      id: "r_6",
      type: "mcq",
      section: "Part B",
      questionText: "Buying second-hand clothes is suggested as one solution.",
      options: [
        { key: "T", text: "True" },
        { key: "F", text: "False" },
        { key: "NG", text: "Not Given" }
      ],
      correctAnswer: "T"
    }
  ]
};

export const WRITING_QUESTIONS = [
  { id: "w_1", vietnamese: "Tập thể dục mỗi ngày giúp mọi người giữ gìn sức khỏe tốt." },
  { id: "w_2", vietnamese: "Giáo viên cho phép học sinh sử dụng từ điển trong giờ học." },
  { id: "w_3", vietnamese: "Nhiều gia đình dành thời gian tham gia các hoạt động ngoài trời vào cuối tuần." },
  { id: "w_4", vietnamese: "Các thành phố nên trồng thêm cây để cải thiện chất lượng không khí." },
  { id: "w_5", vietnamese: "Điện thoại thông minh, cái mà có thể sử dụng để liên lạc, cũng gây mất tập trung." },
  { id: "w_6", vietnamese: "Những học sinh yêu thích lịch sử thường tham quan các bảo tàng vào cuối tuần." },
  { id: "w_7", vietnamese: "Học sinh tham gia các câu lạc bộ thường phát triển kỹ năng giao tiếp nhanh hơn." },
  { id: "w_8", vietnamese: "Mọi người nên bảo tồn các lễ hội truyền thống, vốn phản ánh lịch sử và văn hóa địa phương." },
  { id: "w_9", vietnamese: "Mặc dù trí tuệ nhân tạo tiết kiệm thời gian, con người vẫn cần học cách sử dụng nó một cách thông minh/khôn khéo." },
  { id: "w_10", vietnamese: "Việc giảm sử dụng nhựa dùng một lần có thể bảo vệ đại dương cho các thế hệ tương lai." }
];
