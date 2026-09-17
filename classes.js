// classes.js — single source of truth for all course content.
// Loaded as a <script> (a global) rather than fetched, so the site works from file://.
// Media is intentionally placeholdered: leave youtubeId / gifUrl empty until real links are added.
// Content grounded in the class videos (Whisper transcripts) + instructor outline.
window.COURSE = {
  title: "Zero to Hero Salsa by DancerU",
  summary:
    "A collection of our course videos, neatly organized for ease of review — with Herman and Jules! Each week has two videos: an explanation that breaks down what was taught, and a demo danced to music. Browse the summary below, then open any week to watch its videos and study the moves it covers.",
  classes: [
    {
      week: 1,
      title: "Salsa Basics & Timing",
      summary:
        "The on1 basic and side basic, your first right turn with a J-prep, the cross-body lead, and how partner connection works.",
      videos: {
        explanation: { youtubeId: "jb2xDzPry0k", title: "Explanation" },
        demo: { youtubeId: "EKEz1i2W-To", title: "Demo" }
      },
      moves: [
        {
          name: "Basic Step",
          kind: "Footwork",
          description:
            "The on1 basic: step on 1-2-3, 5-6-7 — quick, quick, slow. Stay on the balls of your feet and push off the floor as you step; the heel can touch, but the ball drives the movement.",
          gifUrl: ""
        },
        {
          name: "Side Basic",
          kind: "Footwork",
          description:
            "The same timing as the basic, stepping side to side instead of forward and back. Danced solo and in partner work as a home position between moves.",
          gifUrl: ""
        },
        {
          name: "Right Turn (J-Prep)",
          kind: "Partner work",
          description:
            "Your first turn, signalled with a J-shaped prep: prep, pulse, turn. Collect on 3, keep the eye line low, and turn over 5-6-7 with the pulse on 6 telling the follow when to go.",
          gifUrl: ""
        },
        {
          name: "Cross-Body Lead",
          kind: "Partner work",
          description:
            "The lead gets out of the way on 1-2-3 and the follow crosses to the other side on 5-6-7. Led with the torso and frame centered on the path — not by pulling with the hands.",
          gifUrl: ""
        },
        {
          name: "Level-3 Connection",
          kind: "Concept",
          description:
            "Tension on a 1-to-10 scale: 1 is barely touching, 10 is pulling each other over. Aim for 3 — less than half. In open position, leads offer Spider-Man hands like shelves and follows hook on with relaxed wrists; leads lift and follows hang, both at level 3.",
          gifUrl: ""
        },
        {
          name: "Right-to-Right Combo",
          kind: "Bonus",
          description:
            "A bonus combo from a right-to-right handhold, chaining right turns back to back over three phrases of 1-2-3, 5-6-7.",
          gifUrl: ""
        }
      ]
    },
    {
      week: 2,
      title: "Left Turn & Inside Turn",
      summary:
        "The left turn in footwork, and the follow's inside turn led out of a cross-body.",
      videos: {
        explanation: { youtubeId: "IjB1O1c_Wwk", title: "Explanation" },
        demo: { youtubeId: "tdCCpjfH1xk", title: "Demo" }
      },
      moves: [
        {
          name: "Left Turn",
          kind: "Footwork",
          description:
            "The left (counter-clockwise) turn danced solo on the basic timing — the mirror of week 1's right turn, keeping the 1-2-3, 5-6-7 count through the rotation.",
          gifUrl: ""
        },
        {
          name: "Inside Turn",
          kind: "Partner work",
          description:
            "Starts exactly like a cross-body lead. On 3 the hand stays close to the lead's body, preps out on 5, then goes up and over — a slight pull on 6, hand toward the lead's ear, trailing over the follow's head so she stays balanced through the turn.",
          gifUrl: ""
        },
        {
          name: "Follow's Turn Frame",
          kind: "Concept",
          description:
            "Follows keep the arm in front at a 90-degree angle so the turn can be led — don't expose the armpit, or the lead loses control of the connection.",
          gifUrl: ""
        }
      ]
    },
    {
      week: 3,
      title: "Cumbia & the Outside Turn",
      summary:
        "The cumbia in footwork, and the outside turn in both its left-hand and right-hand variations.",
      videos: {
        explanation: { youtubeId: "iWyujFKvWig", title: "Explanation" },
        demo: { youtubeId: "9F31kXJ0HPc", title: "Demo" }
      },
      moves: [
        {
          name: "Cumbia",
          kind: "Footwork",
          description:
            "The back-crossing basic: the step tucks under you on 1, replace on 2-3, then the other side on 5. The cumbia break is also the entry that initiates this week's outside turns.",
          gifUrl: ""
        },
        {
          name: "Outside Turn — Left Hand",
          kind: "Partner work",
          description:
            "Initiated from a cumbia break using the frame. The lead's hand is above the follow's eye line by 3, then normal cross-body footwork while turning her to the right; close the door and settle back into the basic.",
          gifUrl: ""
        },
        {
          name: "Outside Turn — Right Hand",
          kind: "Partner work",
          description:
            "Same cumbia entry, led right-to-right. Above the eye line by 3, then directional pulses on 5 and 7 — the energy keeps showing her the direction to turn and keeps her balanced.",
          gifUrl: ""
        }
      ]
    },
    {
      week: 4,
      title: "Mambo Taps & the Shoulder Check",
      summary:
        "Mambo taps in footwork, a review of the outside turn, the shoulder check, and the full right-to-right combo.",
      videos: {
        explanation: { youtubeId: "W5SzlgLd8Xo", title: "Explanation" },
        demo: { youtubeId: "o9Vihu85lhg", title: "Demo" }
      },
      moves: [
        {
          name: "Mambo Taps",
          kind: "Footwork",
          description:
            "Accents on all the odd counts — 1, 3, 5, 7 — tapping and pointing to the foot to accentuate each one over the basic.",
          gifUrl: ""
        },
        {
          name: "Shoulder Check (Rock & Turn)",
          kind: "Partner work",
          description:
            "The follow is checked at the shoulder, rocks, and then turns. If the check doesn't land, it recovers like a normal rock step — rock, then turn.",
          gifUrl: ""
        },
        {
          name: "Right-to-Right Combo",
          kind: "Partner work",
          description:
            "The week's big pattern: J-prep into an inside turn with the right hand, then the lead turns and the follow turns, finishing into a shoulder check.",
          gifUrl: ""
        }
      ]
    },
    {
      week: 5,
      title: "Jazz Box & the Hair Comb",
      summary:
        "The jazz box in footwork, the hair comb into a free spin, four sets of shines, and a new pattern through the sweetheart position.",
      videos: {
        explanation: { youtubeId: "TjiajHBuYvY", title: "Explanation" },
        demo: { youtubeId: "e0-weHEgOPQ", title: "Demo" }
      },
      moves: [
        {
          name: "Jazz Box",
          kind: "Footwork",
          description:
            "A square-pattern shine over 1-2-3, 5-6-7, plus the jazz box slide variation. Style it up — a little grease up the arm, dirty-dancing flavor, arms placed with intention.",
          gifUrl: ""
        },
        {
          name: "Hair Comb into Free Spin",
          kind: "Partner work",
          description:
            "From the shoulder check, commit to the right turn and keep the hands right-to-right. The lead combs the joined hand over the follow's head and releases into a free spin.",
          gifUrl: ""
        },
        {
          name: "Four Sets of Shines",
          kind: "Partner work",
          description:
            "Break away into four phrases of solo footwork, then collect and pull back up into the partner hold on time.",
          gifUrl: ""
        },
        {
          name: "J-Prep Switch → Cumbia → Sweetheart",
          kind: "Partner work",
          description:
            "The new pattern: a J-prep switch into a cumbia, catching up into the sweetheart (side-by-side) position, then a prep and an outside turn out, finished with a hair comb.",
          gifUrl: ""
        }
      ]
    },
    {
      week: 6,
      title: "Suzy Q & the Peek-a-Boo",
      summary:
        "The Suzy Q in footwork, a review of the sweetheart pattern, and the new peek-a-boo into a right-turn hook and hair comb.",
      videos: {
        explanation: { youtubeId: "", title: "Explanation" },
        demo: { youtubeId: "", title: "Demo" }
      },
      moves: [
        {
          name: "Suzy Q",
          kind: "Footwork",
          description:
            "The crossing shine: feet work in a T/V position — front foot forward, back foot turned — stepping across rather than travelling. The hips rotate while the torso and eye line stay forward, which makes the move read bigger.",
          gifUrl: ""
        },
        {
          name: "Sweetheart Pattern Review",
          kind: "Partner work",
          description:
            "Running back week 5's pattern: J-prep switch into cumbia, up to the sweetheart, prep, and outside turn out into the hair comb — this time catching on all four points of connection.",
          gifUrl: ""
        },
        {
          name: "Peek-a-Boo",
          kind: "Partner work",
          description:
            "The new move: the peek-a-boo into a right-turn hook, escaping with a hair comb out.",
          gifUrl: ""
        }
      ]
    },
    {
      week: 7,
      title: "Review Week",
      summary:
        "A consolidation week — running everything from weeks 1-6 on time, together, and to music.",
      videos: {
        explanation: { youtubeId: "", title: "Explanation" },
        demo: { youtubeId: "", title: "Demo" }
      },
      moves: [
        {
          name: "Full Review",
          kind: "Partner work",
          description:
            "Basics, side basic, right and left turns, cross-body lead, inside and outside turns, the shoulder check, and the sweetheart pattern — drilled back to back.",
          gifUrl: ""
        },
        {
          name: "Dancing to Music",
          kind: "Concept",
          description:
            "Putting the whole vocabulary on the 1-2-3, 5-6-7 count with real songs — keeping the timing unbroken as moves chain together.",
          gifUrl: ""
        }
      ]
    },
    {
      week: 8,
      title: "Scissor Step & the Sweetheart Walk-Back",
      summary:
        "The scissor step in footwork, a shoulder-check variant that walks back through the sweetheart, and its continuation into a wrap.",
      videos: {
        explanation: { youtubeId: "", title: "Explanation" },
        demo: { youtubeId: "", title: "Demo" }
      },
      moves: [
        {
          name: "Scissor Step",
          kind: "Footwork",
          description:
            "This week's shine: a crossing scissor action danced over the basic timing, phrase after phrase.",
          gifUrl: ""
        },
        {
          name: "Sweetheart Walk-Back",
          kind: "Partner work",
          description:
            "A shoulder-check variant: basic, J-prep on 1-2-3, switch, into the shoulder check, rock — then the lead curves back and pulls up, walking the follow back through the sweetheart position.",
          gifUrl: ""
        },
        {
          name: "Hair Comb → Wrap → Inside Turn with a Target",
          kind: "Partner work",
          description:
            "The continuation: from any right-to-right ending, hair comb on 1 into a wrap, holding on by curling the fingers. Let her rock on 1, pull back on 2 with enough emphasis to switch and turn her 180. Prep on 5 and place the free hand where she'll see it coming out of the turn — the target.",
          gifUrl: ""
        }
      ]
    },
    {
      week: 9,
      title: "The Gloria & the Open-Break Combo",
      summary:
        "The gloria in footwork, the open break, a long combo built from it, and how to read hand tosses — including the hammerlock.",
      videos: {
        explanation: { youtubeId: "", title: "Explanation" },
        demo: { youtubeId: "", title: "Demo" }
      },
      moves: [
        {
          name: "The Gloria",
          kind: "Footwork",
          description:
            "A syncopated shine: one-and-three-and-five-and-seven over the basic — the 'ands' give it the double-time flavor.",
          gifUrl: ""
        },
        {
          name: "Open Break",
          kind: "Partner work",
          description:
            "Signalled by slightly lifting the hands on 7 — different from a normal open position, so the follow knows something new is coming. The lead pushes into her palms while stepping back on 1. Keep the W shape in the arms; extending them fully loses the connection.",
          gifUrl: ""
        },
        {
          name: "Open-Break Combo",
          kind: "Partner work",
          description:
            "The long pattern: open break, hook into the sweetheart, cumbia outside turn led with the left hand, another open break with a switch, place her hand at the waist and turn on 6-7, a karate-chop release with the forearm into a cross-body lead, then a tap on 5 releasing her into a free spin, and collect — keeping her hand above so it doesn't get trapped.",
          gifUrl: ""
        },
        {
          name: "Hand Tosses & the Hammerlock",
          kind: "Concept",
          description:
            "Reading a toss by its angle: tossed straight down the center, it comes back down-and-up to a center target. Between 45 and 90 degrees behind, the lead wants a hammerlock — the arm settles gently behind the back. Above 90 degrees, it's a toss away: the lead is asking for the other hand.",
          gifUrl: ""
        }
      ]
    },
    {
      week: 10,
      title: "New York Walk & the Copa",
      summary:
        "Lead-and-follow shine patterns in footwork, and two new partner moves: the New York walk and the copa.",
      videos: {
        explanation: { youtubeId: "", title: "Explanation" },
        demo: { youtubeId: "", title: "Demo" }
      },
      moves: [
        {
          name: "Shine Patterns",
          kind: "Footwork",
          description:
            "Lead-and-follow shine work: one partner leads a shine sequence off one basic and the other follows it back.",
          gifUrl: ""
        },
        {
          name: "New York Walk",
          kind: "Partner work",
          description:
            "A travelling side-by-side walk down the slot, danced over 1-2-3, 5-6-7, that opens the pair out to face the same direction before collecting back.",
          gifUrl: ""
        },
        {
          name: "Copa",
          kind: "Partner work",
          description:
            "A sharp check-and-return: the follow is stopped mid-travel and redirected back the way she came — a classic accent that reverses the slot with a snap on 5-6-7.",
          gifUrl: ""
        }
      ]
    },
    {
      week: 11,
      title: "The Full Routine",
      summary:
        "Everything from the course chained into one continuous routine, walked move by move and then danced to music.",
      videos: {
        explanation: { youtubeId: "", title: "Explanation" },
        demo: { youtubeId: "", title: "Demo" }
      },
      moves: [
        {
          name: "Routine, Part 1",
          kind: "Partner work",
          description:
            "Basic, side basic, cross-body lead, inside turn, side basic, outside turn, J-back switch, inside turn — lead turns, follow turns — into a shoulder check, rock, right turn, then four counts of shines.",
          gifUrl: ""
        },
        {
          name: "Routine, Part 2",
          kind: "Partner work",
          description:
            "J-back switch straight into the sweetheart, walk-walk, peek-a-boo, hook into a wrap, rock-pull-switch to the target, into the basket, hammerlock into a left turn, hand toss, collect, New York walk, right turn with a switch, and finish on the copa.",
          gifUrl: ""
        },
        {
          name: "Dancing It to Music",
          kind: "Concept",
          description:
            "Running the full routine on time to a real song — the goal the whole course has been building toward.",
          gifUrl: ""
        }
      ]
    },
    {
      week: 12,
      title: "Graduation & Freestyle",
      summary:
        "Combining everything into freestyle: choosing moves in real time and dancing to the music.",
      videos: {
        explanation: { youtubeId: "", title: "Explanation" },
        demo: { youtubeId: "", title: "Demo" }
      },
      moves: [
        {
          name: "Freestyle Combinations",
          kind: "Partner work",
          description:
            "Chaining the figures from weeks 1-11 in any order in real time, choosing the next move by feel and lead rather than a fixed routine.",
          gifUrl: ""
        },
        {
          name: "Musicality",
          kind: "Concept",
          description:
            "Matching moves to the music: saving turns and accents for the breaks, dancing softer through the verse, and hitting the phrasing of the song rather than dancing over it.",
          gifUrl: ""
        },
        {
          name: "Floorcraft",
          kind: "Concept",
          description:
            "Navigating a shared floor safely: keeping the slot small when it is crowded, protecting your partner, and adjusting travel so figures land in the space you have.",
          gifUrl: ""
        }
      ]
    }
  ]
};
