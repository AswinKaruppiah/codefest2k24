import {
  backyard,
  code,
  connection,
  echo,
  flip,
  game,
  img1,
  img2,
  img3,
  img4,
  img5,
  loop,
  paper,
  poster,
  quizzie,
  reel,
  tech,
  ui,
} from ".";

var slider = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
];
const eventinfo = [
  {
    title: "Quizzie-Buzzie",
    type: "Technical",
    icon: quizzie,
    iconBg: "#383E56",
    date: "30th APR '24 - 10am",
    points: [
      "Engage in a battle of wits and tech knowledge as you tackle mind-bending questions in our lightning-fast quiz. From coding concepts to industry insights, Quizzie-Buzzie promises an adrenaline-pumping challenge for tech enthusiasts!",
      "Participants must answer multiple-choice questions within a set time limit.",
      "No use of external resources or devices is allowed during the quiz.",
    ],
  },
  {
    title: "Tech-It-Out",
    type: "Technical",
    icon: tech,
    iconBg: "#E6DEDD",
    date: "30th APR '24 - 10am",
    points: [
      "Step onto the innovation stage and present your tech marvels, be it groundbreaking ideas, cutting-edge research, or visionary startup pitches. Tech-IT-Out is your chance to shine, connect with industry leaders, and turn your concepts into reality.",
      "Presentations must adhere to a strict time limit allocated for each participant or team.",
      "Visual aids such as slideshows or prototypes are encouraged to enhance the presentation.",
    ],
  },
  {
    title: "ParaCoding",
    type: "Technical",
    icon: code,
    iconBg: "#383E56",
    date: "30th APR '24 - 10am",
    points: [
      "Embark on a coding expedition where you'll crack algorithms, debug solutions, and code your way through complex challenges. Paracoding is where the digital world meets problem-solving prowess, testing your coding mettle like never before.",
      " Teams( max 2 members ) will be given a coding problem and a specified timeframe to solve it.",
      "Code submissions must follow the specified programming language and meet the problem's requirements",
    ],
  },
  {
    title: "Flip-Flop",
    type: "Technical",
    icon: flip,
    iconBg: "#E6DEDD",
    date: "30th APR '24 - 10am",
    points: [
      "Decode the mysteries of code in Flip-flop, where Participants unravel intricate algorithms and logic. Dive deep into codebases, understand their inner workings, and showcase your ability to decipher and improve existing code structures.",
      "Participants must analyze and present their understanding of the given code, including its functionality and logic.",
      "Detailed explanations of code segments and algorithms used must be provided during the presentation.",
    ],
  },
  {
    title: "UX/UI",
    type: "Technical",
    icon: ui,
    iconBg: "#383E56",
    date: "30th APR '24 - 10am",
    points: [
      "Immerse yourself in a design frenzy as you sprint to create captivating user interfaces for web and mobile platforms. The UI UX showdown is a playground for design wizards to showcase their creativity, usability, and innovation in crafting seamless digital experiences.",
      " Participants must create wireframes or prototypes for web or app designs within the given time frame.",
      " Designs should focus on user experience principles such as usability, accessibility, and aesthetics.",
    ],
  },
  {
    title: "Dancing on the paper",
    type: "Non-Technical",
    icon: paper,
    iconBg: "#E6DEDD",
    date: "30th APR '24 - 10am",
    points: [
      "Dance to the rhythm of shrinking spaces in this dynamic competition. Navigate the shrinking dance floor with style, agility, and creativity, aiming to outperform and outlast fellow competitors until the last beat drops!",
      "Participants must remain within the designated dance area and adapt to shrinking space as rounds progress.",
      "Judges will evaluate contestants based on creativity, synchronization, and overall performance.",
    ],
  },
  {
    title: "Reel-O-mania",
    type: "Non-Technical",
    icon: reel,
    iconBg: "#383E56",
    date: "30th APR '24 - 10am",
    points: [
      "Ignite your editing genius in Reel-O-mania, where raw video clips transform into cinematic masterpieces. From storytelling to visual effects, let your editing prowess dazzle the audience and leave them wanting more.",
      "Edited video reels must be submitted within the specified time limit.",
      "Participants must use the provided video clips exclusively and avoid incorporating external content.",
    ],
  },
  {
    title: "Poster Design",
    type: "Non-Technical",
    icon: poster,
    iconBg: "#E6DEDD",
    date: "30th APR '24 - 10am",
    points: [
      "Unleash your artistic flair in a whirlwind poster design challenge. With themes unveiled on the spot, create visually stunning posters that capture attention, convey messages, and showcase your design finesse under pressure.",
      "Handmade posters must be created on-site based on the theme announced.",
      " Participants must bring their own art supplies, and digital editing tools are not permitted.",
    ],
  },
  {
    title: "Loop Action",
    type: "Non-Technical",
    icon: loop,
    iconBg: "#383E56",
    date: "30th APR '24 - 10am",
    points: [
      "Collaborate, strategize, and execute flawlessly in Loop action, where teams navigate a series of synchronized tasks. From coordination to precision, conquer challenges together and emerge as champions of seamless teamwork.",
      "Teams will receive a sequence of tasks that must be completed in the given order.",
      "Actions should be performed accurately and swiftly, with penalties for incorrect or out-of-sequence tasks.",
    ],
  },
  {
    title: "Beat Break",
    type: "Non-Technical",
    icon: echo,
    iconBg: "#E6DEDD",
    date: " 30th APR '24 - 10am",
    points: [
      "The song should be continued when the lyrics fades off.",
      "Each participants can participate individually or atmost 2.",
      "Participants who find max lyrics from the songs will be a winner.",
      "Participants can skip maximum of 3 songs.",
    ],
  },
  {
    title: "Backyard Cricket",
    type: "Non-Technical",
    icon: backyard,
    iconBg: "#383E56",
    date: "30th APR '24 - 10am",
    points: [
      "Experience the thrill of box cricket in a backyard setting with teams of five players each, showcasing your cricketing skills in a friendly yet competitive environment.",
      "Each team must consist of exactly five members, including fielders and batters.",
      "The game will follow standard box cricket rules, with each team getting a set number of overs to bat and bowl.",
    ],
  },
  {
    title: "Go Connection",
    type: "Non-Technical",
    icon: connection,
    iconBg: "#E6DEDD",
    date: "30th APR '24 - 10am",
    points: [
      "Unleash your detective skills in Go Connection, where participants decipher answers by piecing together clues provided, combining logic and intuition to solve the mystery.",
      "Clues will be provided sequentially, and participants must use all given clues to arrive at the correct answer.",
      "Teams or individuals must submit their answers within the specified time limit, and the first correct answer wins the round.",
    ],
  },
  {
    title: "Free Fire",
    type: "Non-Technical",
    icon: game,
    iconBg: "#383E56",
    date: "30th APR '24 - 10am",
    points: [
      "Join us for an adrenaline-pumping Free Fire tournament where players showcase their skills in intense battles! Compete against other gamers, demonstrate your strategies, and aim for victory in this thrilling gaming event.",
      "Free Fire - Solo Mode Only",
      "No Laptaps or System can be used only Mobile phones be used",
      "Room codes will be given on spot",
      "Decisions will be made fair, so no arguments has to be made against organizers",
    ],
  },
];

export { slider, eventinfo };
