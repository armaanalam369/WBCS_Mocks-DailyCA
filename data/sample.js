/* Sample paper: 2 questions for each of the 18 WBCS topics.
   These are practice placeholders, NOT real WBCS PYQs. Replace with real papers
   (copy this file to data/2019.js, change the year, paste real questions). */
const Q = (section, question, options, correctAnswer, explanation) => ({ section, question, options, correctAnswer, explanation, source: "Sample" });

registerPYQ("Sample", [
  Q("English", "Choose the synonym of 'Benevolent'.", ["Kind", "Cruel", "Lazy", "Proud"], 0, "Benevolent means well-meaning and kindly."),
  Q("English", "Choose the antonym of 'Scarce'.", ["Rare", "Abundant", "Little", "Few"], 1, "Scarce means insufficient; its opposite is abundant."),

  Q("Ancient History", "Who founded the Maurya Empire?", ["Chandragupta Maurya", "Ashoka", "Bindusara", "Bimbisara"], 0, "Chandragupta Maurya founded the empire around 321 BCE with Chanakya's help."),
  Q("Ancient History", "The Harappan site Lothal is famous for its:", ["Dockyard", "Great Bath", "Granary", "Pillared hall"], 0, "Lothal in Gujarat had a well-known dockyard. The Great Bath is at Mohenjo-daro."),

  Q("Medieval History", "Who was defeated by Babur in the First Battle of Panipat (1526)?", ["Ibrahim Lodi", "Sikandar Lodi", "Hemu", "Rana Sanga"], 0, "Babur defeated Ibrahim Lodi, the last Delhi Sultan, and founded the Mughal Empire."),
  Q("Medieval History", "Construction of the Qutub Minar was begun by:", ["Qutb ud-Din Aibak", "Alauddin Khalji", "Balban", "Firoz Shah Tughlaq"], 0, "Aibak started it; Iltutmish completed it."),

  Q("Modern History", "In which year was the Battle of Plassey fought?", ["1757", "1764", "1857", "1699"], 0, "Robert Clive defeated Siraj-ud-Daulah at Plassey in 1757."),
  Q("Modern History", "The Doctrine of Lapse was introduced by:", ["Lord Dalhousie", "Lord Wellesley", "Lord Curzon", "Lord Canning"], 0, "Lord Dalhousie (1848–56) used it to annex states without a natural heir."),

  Q("Indian National Movement", "The Chauri Chaura incident (1922) led Gandhi to withdraw which movement?", ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Swadeshi Movement"], 0, "Gandhi suspended the Non-Cooperation Movement after violence at Chauri Chaura."),
  Q("Indian National Movement", "The slogan 'Do or Die' was given by Gandhi during the:", ["Quit India Movement", "Dandi March", "Champaran Satyagraha", "Khilafat Movement"], 0, "He gave it in his 8 August 1942 speech at Gowalia Tank, Bombay."),

  Q("Indian Geography", "Which is the longest river flowing entirely within India?", ["Ganga", "Godavari", "Krishna", "Yamuna"], 0, "The Ganga (about 2,525 km) is the longest river flowing within India."),
  Q("Indian Geography", "The Tropic of Cancer does NOT pass through which state?", ["Jharkhand", "Chhattisgarh", "Odisha", "Tripura"], 2, "It passes through Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram."),

  Q("World & Physical Geography", "Which is the largest hot desert in the world?", ["Sahara", "Gobi", "Kalahari", "Thar"], 0, "The Sahara in North Africa is the largest hot desert."),
  Q("World & Physical Geography", "The deepest known point of the oceans is in the:", ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Tonga Trench"], 0, "Challenger Deep in the Mariana Trench is the deepest known point."),

  Q("Arts & Culture", "Kuchipudi classical dance originated in:", ["Andhra Pradesh", "Kerala", "Odisha", "Manipur"], 0, "Kuchipudi takes its name from a village in Andhra Pradesh."),
  Q("Arts & Culture", "The Konark Sun Temple is located in:", ["Odisha", "Tamil Nadu", "Gujarat", "Karnataka"], 0, "It is in Konark, Odisha, built in the 13th century under the Eastern Ganga dynasty."),

  Q("West Bengal Specific", "Which river is called the 'Sorrow of Bengal'?", ["Damodar", "Teesta", "Hooghly", "Ajay"], 0, "The Damodar was known for destructive floods before dams were built."),
  Q("West Bengal Specific", "Who wrote the novel 'Anandamath'?", ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Sarat Chandra Chattopadhyay", "Michael Madhusudan Dutt"], 0, "Bankim Chandra wrote Anandamath (1882), which contains 'Vande Mataram'."),

  Q("Indian Polity", "Article 21 of the Indian Constitution guarantees:", ["Protection of life and personal liberty", "Equality before law", "Freedom of speech", "Right to education"], 0, "Article 21: no person shall be deprived of life or personal liberty except by procedure established by law."),
  Q("Indian Polity", "The Governor of a state is appointed by:", ["The President", "The Chief Minister", "The Prime Minister", "The Chief Justice"], 0, "Under Article 155, the President appoints the Governor."),

  Q("Indian Economy", "The Reserve Bank of India was established in:", ["1935", "1947", "1949", "1969"], 0, "RBI began operations on 1 April 1935 under the RBI Act, 1934."),
  Q("Indian Economy", "GST came into effect in India on:", ["1 July 2017", "1 April 2017", "1 January 2018", "15 August 2016"], 0, "GST was rolled out on 1 July 2017."),

  Q("Physics", "The SI unit of force is:", ["Newton", "Joule", "Pascal", "Watt"], 0, "Force is measured in newtons (kg·m/s²)."),
  Q("Physics", "The speed of light in vacuum is approximately:", ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁵ m/s"], 0, "It is about 299,792,458 m/s."),

  Q("Chemistry", "The chemical symbol of gold is:", ["Au", "Ag", "Gd", "Go"], 0, "Au comes from the Latin 'aurum'."),
  Q("Chemistry", "The pH of pure water at 25°C is:", ["7", "0", "14", "1"], 0, "Pure water is neutral, with pH 7."),

  Q("Biology", "Which organelle is called the 'powerhouse of the cell'?", ["Mitochondria", "Ribosome", "Golgi body", "Nucleus"], 0, "Mitochondria produce most of the cell's ATP."),
  Q("Biology", "Deficiency of which vitamin causes scurvy?", ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"], 0, "Scurvy is caused by lack of vitamin C (ascorbic acid)."),

  Q("Environmental Studies", "The Montreal Protocol deals with:", ["Ozone-depleting substances", "Greenhouse gas emissions", "Biodiversity", "Hazardous waste"], 0, "Adopted in 1987 to phase out substances that deplete the ozone layer."),
  Q("Environmental Studies", "The Sundarbans is best described as a:", ["Mangrove forest", "Tropical rainforest", "Alpine forest", "Thorn forest"], 0, "It is the world's largest mangrove forest, in the Ganga–Brahmaputra delta."),

  Q("Static GK", "What is the capital of Australia?", ["Canberra", "Sydney", "Melbourne", "Perth"], 0, "Canberra is the capital; Sydney is the largest city."),
  Q("Static GK", "The national animal of India is:", ["Tiger", "Lion", "Elephant", "Leopard"], 0, "The Bengal tiger is the national animal."),

  Q("Current Affairs", "Which country hosted the G20 Leaders' Summit in 2023?", ["India", "Indonesia", "Brazil", "Italy"], 0, "India hosted it in New Delhi in September 2023."),
  Q("Current Affairs", "In which year did Chandrayaan-3 soft-land on the Moon?", ["2023", "2019", "2021", "2024"], 0, "Chandrayaan-3's lander touched down near the lunar south pole on 23 August 2023."),

  Q("General Mental Ability", "Find the next number: 2, 6, 12, 20, ?", ["30", "28", "32", "26"], 0, "Differences are 4, 6, 8, so the next difference is 10: 20 + 10 = 30."),
  Q("General Mental Ability", "What is 20% of 250?", ["50", "40", "25", "60"], 0, "250 × 20/100 = 50.")
], { name: "Sample Practice Paper", durationMin: 36, marks: { correct: 1, wrong: 0.25 } });
