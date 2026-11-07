import { useState } from "react";
import { Shell } from "./components/Shell";

interface Question {
  text: string;
  options: string[];
}

interface Quiz {
  id: string;
  emoji: string;
  title: string;
  subtitle: string;
  color: string;
  questions: Question[];
  results: string[];
}

const QUIZZES: Quiz[] = [
  {
    id: "flaw",
    emoji: "🧠",
    title: "What's your hidden personality flaw?",
    subtitle: "The one you definitely don't see in yourself",
    color: "#7c3aed",
    questions: [
      {
        text: "Someone cancels plans last minute. You:",
        options: [
          "Secretly relieved, you didn't want to go anyway",
          "Immediately start rescheduling — your calendar is sacred",
          "Say 'it's fine!' and then think about it for 3 days",
          "Post a vague story about being let down",
        ],
      },
      {
        text: "You're in a group project. Your role is:",
        options: [
          "Quietly doing everything because no one else will",
          "The ideas person — execution is for others",
          "Keeping the peace even if the idea is bad",
          "Documenting who did what, just in case",
        ],
      },
      {
        text: "When you're wrong, you:",
        options: [
          "Admit it, but bring it up again later as a joke",
          "Pivot — 'that's what I meant originally'",
          "Apologize excessively until it's awkward",
          "Go quiet and process it for a week",
        ],
      },
      {
        text: "Your friend gets something you wanted. You:",
        options: [
          "Congratulate them and feel weird about it later",
          "Immediately tell yourself you didn't want it anyway",
          "Ask a lot of questions about how they got it",
          "Use it as motivation (and a little spite)",
        ],
      },
    ],
    results: [
      "Your hidden flaw is **chronic self-sabotage**. You get close to good things and then mysteriously make them harder. You're not unlucky — you're just scared of actually winning.",
      "Your hidden flaw is **needing to be the smartest in the room**. You listen to respond, not to understand. You've already formed your opinion before someone finishes their sentence.",
      "Your hidden flaw is **people-pleasing to a fault**. You've said 'I'm fine' so many times you've forgotten what not fine even feels like. Your resentment is building a little house inside you.",
      "Your hidden flaw is **keeping score**. You remember every favor, every slight, every time you weren't chosen. You'd never admit it, but the spreadsheet is very detailed.",
    ],
  },
  {
    id: "food",
    emoji: "🍕",
    title: "What food matches your personality?",
    subtitle: "Deeply scientific. Completely accurate.",
    color: "#ea580c",
    questions: [
      {
        text: "Pick a Friday night:",
        options: [
          "Cozy night in with something familiar",
          "Trying that new place everyone's talking about",
          "Spontaneous plans that somehow always work out",
          "Elaborate home-cooked meal with a playlist",
        ],
      },
      {
        text: "Your texts are usually:",
        options: [
          "Short and to the point. Maybe one word.",
          "Long, detailed, with context and follow-ups",
          "Chaotic but charming — full of typos and energy",
          "Thoughtful, warm, often checking in on people",
        ],
      },
      {
        text: "People describe you as:",
        options: [
          "Reliable. Always there, never dramatic.",
          "A lot — but in a good way",
          "Unpredictable but somehow always right",
          "Comforting. Like a hug.",
        ],
      },
      {
        text: "Your biggest flex is:",
        options: [
          "You've never missed a deadline in your life",
          "You can talk to literally anyone",
          "You're always early to trends",
          "People feel better after talking to you",
        ],
      },
    ],
    results: [
      "You are **plain cheese pizza**. Classic, dependable, and somehow always the right answer. People underestimate you until they need you most. You're not boring — you're foundational.",
      "You are **a loaded breakfast burrito**. A lot going on, but it works. You're chaotic in the best way — somehow everything about you fits together even when it shouldn't.",
      "You are **spicy mango with tajín**. You caught on before it was cool. You're bold, unexpected, and people either love you immediately or need a second to adjust — then they're obsessed.",
      "You are **homemade soup**. You're the person people call when they're sad. Warm, nourishing, made with actual care. You are the emotional support food of people.",
    ],
  },
  {
    id: "island",
    emoji: "🏝️",
    title: "What would you actually do stranded on an island?",
    subtitle: "Survival instincts or chaos? Let's find out.",
    color: "#0891b2",
    questions: [
      {
        text: "First thing you do when you realize you're stranded:",
        options: [
          "Sit down and make a pros and cons list",
          "Start yelling for help immediately",
          "Explore the island — this could be an opportunity",
          "Cry for 10 minutes, then get it together",
        ],
      },
      {
        text: "You find a coconut. You:",
        options: [
          "Research how to open it safely (wait, no internet)",
          "Smash it on a rock immediately",
          "Try to befriend it — you're already lonely",
          "Ration it. Day 1 and you're already thinking long-term.",
        ],
      },
      {
        text: "It's night one. You:",
        options: [
          "Build the most structurally sound shelter you can",
          "Sleep on the beach and look at the stars. Romantic, honestly.",
          "Stay awake listening for danger. You don't trust this island.",
          "Make a fire and feel weirdly proud of yourself",
        ],
      },
      {
        text: "Day 3. Rescue seems unlikely. You:",
        options: [
          "Name the island and start making rules",
          "Write SOS in giant rocks on the beach and wait",
          "Convince yourself this is actually fine",
          "Start a journal. This is going in the memoir.",
        ],
      },
    ],
    results: [
      "You'd **accidentally thrive**. You'd be annoyed at first, then start optimizing. By week two you have a schedule, a shelter with a view, and a coconut-based diet plan. Rescue would almost be inconvenient.",
      "You'd **immediately try to vibe with the island**. You'd name the trees, talk to the fish, and make a best friend out of a volleyball. Somehow you'd be fine — emotionally, at least.",
      "You'd **be rescued on day 4** because your SOS signal was so well-organized that a passing plane couldn't miss it. You came prepared, mentally. You always do.",
      "You'd **write the best memoir of all time**. You'd suffer, dramatically, but with incredible self-awareness. The book deal would be worth it. You were never really in danger — you were researching.",
    ],
  },
  {
    id: "readable",
    emoji: "👀",
    title: "How easy are you to read?",
    subtitle: "Spoiler: more than you think.",
    color: "#059669",
    questions: [
      {
        text: "When you're annoyed, people:",
        options: [
          "Always know immediately — your face betrays you",
          "Can tell something's off but can't name it",
          "Have no idea. You're a locked vault.",
          "Find out three days later via a calm conversation",
        ],
      },
      {
        text: "Your resting face is:",
        options: [
          "Apparently very intense — people ask if you're okay",
          "Neutral. A blank canvas.",
          "Friendly — strangers talk to you constantly",
          "Confused. You always look mildly puzzled.",
        ],
      },
      {
        text: "When you like someone, you:",
        options: [
          "Become slightly too helpful and obvious about it",
          "Go quieter, actually. Classic.",
          "Act completely normal — you're a professional",
          "Tell them. Life's short.",
        ],
      },
      {
        text: "Your friends say you're:",
        options: [
          "An open book — sometimes too open",
          "Mysterious in a way that's kind of annoying",
          "Consistent — what you see is what you get",
          "Full of surprises. Just when they think they know you.",
        ],
      },
    ],
    results: [
      "You are **extremely readable**. Your face is a live news ticker. You think you're hiding it — you are not hiding it. Everyone in the room knows exactly how you feel. This is actually kind of charming.",
      "You are **selectively readable**. You choose what people see, and you're good at it. But the people who really know you? They see everything. You've just never noticed them noticing.",
      "You are **genuinely hard to read**. Not in a cold way — in a 'still waters run deep' way. People find you fascinating and slightly intimidating. This is power. Use it wisely.",
      "You are **unpredictably readable**. Sometimes you're a glass house. Other times, a mystery. People can't figure out your pattern, which is somehow the most interesting thing about you.",
    ],
  },
  {
    id: "toxic",
    emoji: "💀",
    title: "What's your toxic trait?",
    subtitle: "We're going there. It's fine.",
    color: "#dc2626",
    questions: [
      {
        text: "An argument ends without resolution. You:",
        options: [
          "Bring it up again in 6 months, casually",
          "Say you're over it. You are not over it.",
          "Win at all costs — logic is on your side",
          "Disappear for a few days. Let them wonder.",
        ],
      },
      {
        text: "Someone doesn't text back for hours. You:",
        options: [
          "Check if they've posted anything since your message",
          "Assume the worst and spiral quietly",
          "Send a follow-up. Then another. Just to check.",
          "Convince yourself you don't care. You care.",
        ],
      },
      {
        text: "You give advice by:",
        options: [
          "Telling people what to do, very confidently",
          "Asking questions until they reach your conclusion",
          "Sharing your own story — which takes a while",
          "Saying 'I told you so' in the nicest possible way",
        ],
      },
      {
        text: "When someone does better than you:",
        options: [
          "You're happy for them. Mostly. Genuinely mostly.",
          "You immediately think about what you could do better",
          "You find a small flaw in their success",
          "You disappear from their life for a bit",
        ],
      },
    ],
    results: [
      "Your toxic trait is **never fully letting things go**. You forgive, technically. But you file it away. Your memory is a perfectly organized archive of every time someone fell short. You're not vindictive — you're just thorough.",
      "Your toxic trait is **needing to be right more than you need resolution**. You're not arguing to be mean — you genuinely believe you're helping. That's what makes it so effective.",
      "Your toxic trait is **making everything about you without realizing it**. Someone vents, you relate. Someone succeeds, you compare. You're not selfish — you're just the main character of your own story, and you forget others are too.",
      "Your toxic trait is **going quiet as a weapon**. You don't yell. You disappear. And somehow that's more powerful — and more unsettling — than anything you could say.",
    ],
  },
  {
    id: "friendship",
    emoji: "❤️",
    title: "What's your friendship style?",
    subtitle: "How you show up for the people you love",
    color: "#db2777",
    questions: [
      {
        text: "A friend is going through something hard. You:",
        options: [
          "Show up with food. No questions asked.",
          "Send a long voice note with everything you're feeling",
          "Go into full problem-solving mode immediately",
          "Check in every day until they're okay",
        ],
      },
      {
        text: "Your friend group knows you as:",
        options: [
          "The one who remembers everyone's important dates",
          "The one who says what everyone else is thinking",
          "The one who shows up — always, no matter what",
          "The one who gives the best advice but takes forever to ask for help",
        ],
      },
      {
        text: "A friend cancels last minute. You:",
        options: [
          "Totally fine — you low-key needed the night in",
          "A little hurt, but you'd never say it",
          "Reroute immediately — you're already texting someone else",
          "Check in to make sure they're okay before anything else",
        ],
      },
      {
        text: "You feel closest to friends when:",
        options: [
          "You're doing something mundane together — errands, driving",
          "You have a deep 2am conversation",
          "You're laughing so hard it hurts",
          "They remember something small you mentioned once",
        ],
      },
    ],
    results: [
      "You're the **'acts of service' friend**. You don't say 'I love you' — you show up with snacks, help them move, and remember their coffee order. Your love language is doing. People feel incredibly held by you.",
      "You're the **'brutally honest with love' friend**. You tell people what they need to hear, not what they want to hear. You're the friend people call when they need the truth. This is rare and valuable.",
      "You're the **'hype person' friend**. You believe in people more than they believe in themselves. Your enthusiasm is contagious. You make people feel like the main character. Everyone needs a you.",
      "You're the **'quietly devoted' friend**. You don't make a show of it, but you're paying attention. You remember. You check in. You're the friend people realize they can't live without — usually right after they take you for granted.",
    ],
  },
  {
    id: "character",
    emoji: "🎭",
    title: "Which fictional character are you secretly like?",
    subtitle: "Not who you want to be. Who you actually are.",
    color: "#7c3aed",
    questions: [
      {
        text: "Your approach to a problem is:",
        options: [
          "Research everything, then act with precision",
          "Wing it with confidence and somehow it works",
          "Feel your way through it — intuition first",
          "Make it everyone's problem until it's solved",
        ],
      },
      {
        text: "In a crisis, you're:",
        options: [
          "Scarily calm. You've already run the scenarios.",
          "The one making jokes to cut the tension",
          "Emotionally present — you hold space for everyone",
          "In charge. Naturally. You didn't ask for this.",
        ],
      },
      {
        text: "Your fatal flaw is:",
        options: [
          "You trust logic over people and miss things",
          "You're reckless with your own wellbeing",
          "You care too much and it costs you",
          "You think you know best. You often do. That's the problem.",
        ],
      },
      {
        text: "People are drawn to you because:",
        options: [
          "You make them feel smarter just being around you",
          "You make everything more fun and alive",
          "You make them feel genuinely seen",
          "You make things happen. You're a force.",
        ],
      },
    ],
    results: [
      "You're secretly **Hermione Granger** — not because you're a nerd (okay, partly), but because you care so deeply about doing things right that you sometimes forget to just be. You've prepared for every outcome except the one where you let yourself rest.",
      "You're secretly **Flynn Rider** — charming, adaptable, a little unserious on the outside, deeply feeling on the inside. You use humor as armor and most people never see past it.",
      "You're secretly **Ted Lasso** — relentlessly kind in a world that doesn't always deserve it. You lead with empathy and it confuses people. Your optimism isn't naive — it's a choice you make every day.",
      "You're secretly **Leslie Knope** — you care about things with an intensity that baffles people. You will make this work. You will make all of it work. Nobody asked you to carry this much, but here you are.",
    ],
  },
  {
    id: "battery",
    emoji: "🧪",
    title: "What's your social battery type?",
    subtitle: "How you actually recharge (vs. what you tell people)",
    color: "#0891b2",
    questions: [
      {
        text: "After a big social event, you need:",
        options: [
          "48 hours alone minimum. Non-negotiable.",
          "One hour of quiet and then you're good",
          "Another social event — you're just warming up",
          "Depends entirely on who was there",
        ],
      },
      {
        text: "Your ideal Saturday is:",
        options: [
          "Alone, doing exactly what you want, no schedule",
          "One good friend, low-key plans",
          "A whole group, something fun, loud",
          "Whatever happens — you adapt",
        ],
      },
      {
        text: "Small talk makes you feel:",
        options: [
          "Physically tired. It costs you something real.",
          "Fine, but you're waiting for the real conversation",
          "Energized — you love the warmup",
          "Anxious until you find your footing",
        ],
      },
      {
        text: "You cancel plans because:",
        options: [
          "You knew when you made them you might need out",
          "Something better came up — solo edition",
          "Never. You don't cancel. You show up.",
          "The vibe felt off and you couldn't explain it",
        ],
      },
    ],
    results: [
      "You're a **hard introvert**. Not shy — just deeply private with your energy. You love people, but socializing is a resource you spend, not gain. You need real alone time to feel like yourself again. This is not a flaw. This is self-knowledge.",
      "You're an **ambivert who leans introvert**. You can do the social thing and do it well. But you have a timer running. When it goes off, you're done and you know it. You're very good at leaving at the right moment.",
      "You're a **genuine extrovert**. People energize you — not drain you. You think better out loud, feel better in company, and honestly get a little sad when it's too quiet. Your social battery charges by being used.",
      "You're a **context-dependent social chameleon**. Your battery life depends entirely on the room. Right people? Infinite energy. Wrong vibe? You're running on 4% in 20 minutes. You read energy before you read faces.",
    ],
  },
  {
    id: "medieval",
    emoji: "👑",
    title: "What kind of person would you be in a medieval kingdom?",
    subtitle: "Your true calling, 700 years ago",
    color: "#b45309",
    questions: [
      {
        text: "Your relationship with authority is:",
        options: [
          "You respect it — and secretly want it",
          "You work within it while quietly bending the rules",
          "You question it constantly but pick your battles",
          "You ignore it entirely and somehow get away with it",
        ],
      },
      {
        text: "Your most valuable skill is:",
        options: [
          "Strategy — you think three moves ahead",
          "Persuasion — you can change anyone's mind",
          "Craft — you make things that last",
          "Survival — you always find a way",
        ],
      },
      {
        text: "In a conflict, you:",
        options: [
          "Position yourself before it starts",
          "Talk your way through it",
          "Stay neutral and useful to both sides",
          "Fight if you have to, but you'd rather not",
        ],
      },
      {
        text: "What do you want most?",
        options: [
          "Power and the ability to shape things",
          "Influence without the target on your back",
          "Security and a good life for the people you love",
          "Freedom to move, decide, and disappear if needed",
        ],
      },
    ],
    results: [
      "You'd be the **Royal Advisor** — the real power behind the throne. You'd never want the crown (too visible, too risky), but you'd make every decision that mattered. The ruler would think it was their idea. It wasn't.",
      "You'd be the **Court Diplomat** — charming, strategic, always in the right room at the right time. You'd broker peace deals, arrange marriages, and navigate politics like a chess grandmaster. Everyone would underestimate you. Once.",
      "You'd be the **Master Craftsperson** — the one who built things that lasted centuries. Respected by everyone, loyal to your guild, above the petty politics. You'd have a good life and the quiet satisfaction of making things that mattered.",
      "You'd be the **Traveling Merchant** — impossible to pin down, always with information, always with options. You'd work for whoever paid best and somehow outlive every regime. Survival is its own kind of power.",
    ],
  },
  {
    id: "redflags",
    emoji: "🚩",
    title: "How many red flags do you have?",
    subtitle: "Honest assessment. No judgment. (A little judgment.)",
    color: "#dc2626",
    questions: [
      {
        text: "Your exes would describe you as:",
        options: [
          "Emotionally unavailable but very charming about it",
          "Too much — in ways that were sometimes great",
          "Honestly pretty great, we just weren't right",
          "Complicated. Very complicated.",
        ],
      },
      {
        text: "When someone sets a boundary, you:",
        options: [
          "Respect it immediately, no questions",
          "Respect it but quietly wonder why",
          "Need to understand the reason first",
          "Test it once, just to see",
        ],
      },
      {
        text: "Your attachment style in relationships:",
        options: [
          "Secure — you communicate and trust",
          "Anxious — you need reassurance more than you admit",
          "Avoidant — closeness makes you want to run",
          "Chaotic — it depends on the person and the moon",
        ],
      },
      {
        text: "The last time you were wrong in a relationship, you:",
        options: [
          "Apologized clearly and changed the behavior",
          "Apologized a lot but repeated the behavior",
          "Explained why you weren't actually wrong",
          "Went quiet until it passed",
        ],
      },
    ],
    results: [
      "**Low flag count — 1/5 flags**. You're actually pretty self-aware and emotionally regulated. You're not perfect, but you try, you reflect, and you grow. You're the kind of person people feel safe with. This is rare.",
      "**Moderate flags — 2.5/5 flags**. You have patterns. You know what they are. You're working on them — sometimes. You're lovable and frustrating in equal measure, and the right person finds both things endearing.",
      "**Elevated flags — 3.5/5 flags**. You're a project. A worthwhile one! But a project. You have charm and depth, but also some habits that make people work harder than they should. The good news: awareness is step one.",
      "**High flag count — 4.5/5 flags**. You are a lot. Gloriously, chaotically a lot. The people who stay love you fiercely. The people who leave have a very interesting story to tell. You are unforgettable in every direction.",
    ],
  },
  {
    id: "murder",
    emoji: "🕵️",
    title: "Could you survive a murder mystery?",
    subtitle: "Victim, suspect, or detective? Let's find out.",
    color: "#4338ca",
    questions: [
      {
        text: "At the dinner party, you:",
        options: [
          "Notice everything — who's nervous, who's lying",
          "Make friends with everyone immediately",
          "Stick to one or two people you trust",
          "Eat the food and mind your business",
        ],
      },
      {
        text: "The lights go out. Your first instinct:",
        options: [
          "Don't move. Assess. Listen.",
          "Call out to make sure everyone's okay",
          "Find the person you trust most",
          "Find the exit",
        ],
      },
      {
        text: "You're the prime suspect. You:",
        options: [
          "Immediately present your alibi with evidence",
          "Get flustered and accidentally seem guiltier",
          "Say nothing. Lawyer up.",
          "Turn it around and accuse someone else",
        ],
      },
      {
        text: "You figure out who did it. You:",
        options: [
          "Confront them privately — give them a chance to confess",
          "Announce it dramatically in front of everyone",
          "Tell the authorities and let them handle it",
          "Use it as leverage. Just in case.",
        ],
      },
    ],
    results: [
      "You'd **solve it**. You were watching from the moment you arrived. You noticed the nervous glance, the slightly-too-perfect alibi, the person who asked too many questions. You'd solve it quietly and be right.",
      "You'd **survive but barely**. Your social skills would keep you alive — everyone likes you too much to frame you. But you'd be clueless until the reveal and then immediately claim you suspected them all along.",
      "You'd **be the red herring**. Not the murderer. Not the detective. The one everyone suspects because you're quiet and you disappeared for 20 minutes (you were on the phone). You'd be cleared in act three.",
      "You'd **accidentally become the murderer's ally**. Not on purpose! You just helped them with something that seemed innocent. You'd feel terrible about it. But also, you'd write a great book about it.",
    ],
  },
  {
    id: "beverage",
    emoji: "🧃",
    title: "What beverage is your personality?",
    subtitle: "You are what you drink. Allegedly.",
    color: "#059669",
    questions: [
      {
        text: "Your energy throughout the day is:",
        options: [
          "Consistent and reliable — same level, all day",
          "Slow start, then unstoppable",
          "Peaks and crashes. Chaotic but fun.",
          "Calm, steady, occasionally surprising",
        ],
      },
      {
        text: "People come to you for:",
        options: [
          "Comfort — you make things feel okay",
          "A kick — you get things moving",
          "Fun — you make everything more interesting",
          "Clarity — you cut through the noise",
        ],
      },
      {
        text: "Your aesthetic is:",
        options: [
          "Cozy, warm, familiar",
          "Bold, strong, no-nonsense",
          "Bright, playful, a little extra",
          "Clean, minimal, intentional",
        ],
      },
      {
        text: "Your relationship with mornings:",
        options: [
          "You love them. Up early, productive, peaceful.",
          "You need a ritual before you're human",
          "Mornings are a threat and you treat them accordingly",
          "Mornings are fine. You're fine. Everything is fine.",
        ],
      },
    ],
    results: [
      "You are **chamomile tea**. Warm, calming, the thing people reach for when the world is too much. You don't need to be exciting — you're necessary. People feel better just knowing you exist.",
      "You are **espresso**. Small but powerful. You don't waste time. You get to the point. People either love your intensity or find you overwhelming, and you've made peace with both outcomes.",
      "You are **a mango smoothie with too many things in it**. Chaotic, vibrant, somehow it all works. You're a lot in the best way. People didn't know they needed you until they had you.",
      "You are **sparkling water**. Underestimated. Quietly sophisticated. You're not for everyone, but the people who get you are devoted. You're refreshing in a way that's hard to explain but impossible to replace.",
    ],
  },
];

type Screen = "home" | "quiz" | "result";

function renderBoldText(text: string) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("home");
  const [activeQuiz, setActiveQuiz] = useState<Quiz | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [resultIndex, setResultIndex] = useState<number | null>(null);
  const [animating, setAnimating] = useState(false);

  const startQuiz = (quiz: Quiz) => {
    setActiveQuiz(quiz);
    setCurrentQuestion(0);
    setAnswers([]);
    setResultIndex(null);
    setScreen("quiz");
  };

  const handleAnswer = (optionIndex: number) => {
    if (animating) return;
    setAnimating(true);
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    setTimeout(() => {
      if (activeQuiz && currentQuestion < activeQuiz.questions.length - 1) {
        setCurrentQuestion((q) => q + 1);
        setAnimating(false);
      } else {
        const sum = newAnswers.reduce((a, b) => a + b, 0);
        const resultCount = activeQuiz?.results.length ?? 4;
        const idx = Math.floor((sum / (newAnswers.length * 3)) * resultCount);
        setResultIndex(Math.min(idx, resultCount - 1));
        setScreen("result");
        setAnimating(false);
      }
    }, 300);
  };

  const resetToHome = () => {
    setScreen("home");
    setActiveQuiz(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setResultIndex(null);
  };

  return (
    <Shell>
      {screen === "home" && (
        <div className="max-w-2xl mx-auto px-4 py-8">
          <div className="text-center mb-10">
            <h1
              className="text-4xl md:text-5xl font-bold mb-3"
              style={{ fontFamily: "Fraunces, serif", color: "var(--ink)" }}
            >
              Who are you, really?
            </h1>
            <p style={{ color: "var(--muted)" }} className="text-lg">
              Weirdly specific quizzes that somehow nail it every time.
            </p>
          </div>

          <div className="grid gap-3">
            {QUIZZES.map((quiz) => (
              <button
                key={quiz.id}
                onClick={() => startQuiz(quiz)}
                className="w-full text-left p-5 rounded-[1.25rem] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: "var(--panel)",
                  border: "1px solid var(--line)",
                }}
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-3xl w-12 h-12 flex items-center justify-center rounded-xl flex-shrink-0"
                    style={{ background: quiz.color + "20" }}
                  >
                    {quiz.emoji}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div
                      className="font-semibold text-base"
                      style={{ color: "var(--ink)" }}
                    >
                      {quiz.title}
                    </div>
                    <div
                      className="text-sm mt-0.5"
                      style={{ color: "var(--muted)" }}
                    >
                      {quiz.subtitle}
                    </div>
                  </div>
                  <div className="ml-auto flex-shrink-0" style={{ color: "var(--muted)" }}>
                    →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {screen === "quiz" && activeQuiz && (
        <div className="max-w-xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={resetToHome}
              className="text-sm px-3 py-1.5 rounded-lg transition-colors flex-shrink-0"
              style={{
                color: "var(--muted)",
                background: "var(--panel)",
                border: "1px solid var(--line)",
              }}
            >
              ← Back
            </button>
            <div className="flex-1 flex gap-1.5">
              {activeQuiz.questions.map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 flex-1 rounded-full transition-all duration-300"
                  style={{
                    background:
                      i < currentQuestion
                        ? activeQuiz.color
                        : i === currentQuestion
                        ? activeQuiz.color + "60"
                        : "var(--line)",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">{activeQuiz.emoji}</span>
            <span
              className="text-sm font-medium"
              style={{ color: activeQuiz.color }}
            >
              {activeQuiz.title}
            </span>
          </div>

          <div
            className={`transition-opacity duration-300 ${
              animating ? "opacity-0" : "opacity-100"
            }`}
          >
            <h2
              className="text-2xl md:text-3xl font-bold mb-8 leading-snug"
              style={{ fontFamily: "Fraunces, serif", color: "var(--ink)" }}
            >
              {activeQuiz.questions[currentQuestion].text}
            </h2>

            <div className="grid gap-3">
              {activeQuiz.questions[currentQuestion].options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(i)}
                  disabled={animating}
                  className="w-full text-left p-4 rounded-[1rem] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                  style={{
                    background: "var(--panel)",
                    border: "1px solid var(--line)",
                    color: "var(--ink)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = activeQuiz.color;
                    e.currentTarget.style.background = activeQuiz.color + "10";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--line)";
                    e.currentTarget.style.background = "var(--panel)";
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                      style={{
                        background: activeQuiz.color + "20",
                        color: activeQuiz.color,
                      }}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-sm leading-relaxed">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div
            className="text-center mt-6 text-sm"
            style={{ color: "var(--muted)" }}
          >
            Question {currentQuestion + 1} of {activeQuiz.questions.length}
          </div>
        </div>
      )}

      {screen === "result" && activeQuiz && resultIndex !== null && (
        <div className="max-w-xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div
              className="w-20 h-20 rounded-[1.25rem] flex items-center justify-center text-4xl mx-auto mb-4"
              style={{ background: activeQuiz.color + "20" }}
            >
              {activeQuiz.emoji}
            </div>
            <h2
              className="text-2xl font-bold mb-1"
              style={{ fontFamily: "Fraunces, serif", color: "var(--ink)" }}
            >
              {activeQuiz.title}
            </h2>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Your result is in.
            </p>
          </div>

          <div
            className="p-6 rounded-[1.25rem] mb-6"
            style={{
              background: activeQuiz.color + "12",
              border: `2px solid ${activeQuiz.color}40`,
            }}
          >
            <p className="text-lg leading-relaxed" style={{ color: "var(--ink)" }}>
              {renderBoldText(activeQuiz.results[resultIndex])}
            </p>
          </div>

          <div className="grid gap-3">
            <button
              onClick={() => startQuiz(activeQuiz)}
              className="w-full py-3.5 rounded-[0.75rem] font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{ background: activeQuiz.color, color: "#fff" }}
            >
              Retake this quiz
            </button>
            <button
              onClick={resetToHome}
              className="w-full py-3.5 rounded-[0.75rem] font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
              style={{
                background: "var(--panel)",
                border: "1px solid var(--line)",
                color: "var(--ink)",
              }}
            >
              Try another quiz →
            </button>
          </div>

          <div className="mt-8">
            <h3
              className="text-sm font-semibold mb-3 uppercase tracking-wider"
              style={{ color: "var(--muted)" }}
            >
              More quizzes
            </h3>
            <div className="grid gap-2">
              {QUIZZES.filter((q) => q.id !== activeQuiz.id)
                .slice(0, 4)
                .map((quiz) => (
                  <button
                    key={quiz.id}
                    onClick={() => startQuiz(quiz)}
                    className="w-full text-left p-3.5 rounded-[1rem] transition-all duration-200 hover:scale-[1.01]"
                    style={{
                      background: "var(--panel)",
                      border: "1px solid var(--line)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{quiz.emoji}</span>
                      <span className="text-sm font-medium flex-1" style={{ color: "var(--ink)" }}>
                        {quiz.title}
                      </span>
                      <span className="text-xs flex-shrink-0" style={{ color: "var(--muted)" }}>
                        →
                      </span>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>
      )}
    </Shell>
  );
}
