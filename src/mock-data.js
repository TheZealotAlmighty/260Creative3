let mock = [
    {
        id: 1,
        name: "???",
        image: 'Hero.png',
        age: "17",
        affiliation: "Party",
        description: "The player character in Zack the Zealot.  His family moves into a new " +
            "village at the start of the game.  He gets sent on an errand to pick up some milk, then " +
            "somehow ends up accidentally joining a group of demon hunters known as the Inquisition." + 
            "  His name is determined by the player."
    },
    {
        id: 2,
        name: "Eleanor",
        image: 'Eleanor.png',
        age: "16",
        affiliation: "Party",
        description: "A young girl whose town gets destroyed by a bunch of demon cultists.  She " +
            "the player character near the start of the game, hoping to get help from the Inquisition " +
            "to prevent demon cultists from destroying other villages."
    },
    {
        id: 3,
        name: "Merrick",
        image: 'Merrick.png',
        age: "22",
        affiliation: "Party",
        description: "Merrick is a thief who cares only about money.  He initially meets the party " +
            "after stealing something valuable from them, but is later coerced into joining their " +
            "hunt for the demon cultists.  He has a little sister that he loves dearly and wants " +
            "nothing more than to protect her."
    },
    {
        id: 4,
        name: "Sariah",
        image: 'Sariah.png',
        age: "Chronologically, 623.  Physically, 23",
        affiliation: "Party",
        description: "Sariah was a member of the Inquisition a very long time ago.  She was " +
            "highly respected for her skill in magic, but she grew arrogant and thought she " +
            "was more qualified to lead the Inquisition than Zack the Zealot.  As punishment " +
            "for her arrogance, the Zealot sealed her in a crystal for 600 years, only releasing " +
            "her to aid the party in their quest against the demon cultist."
    },
    {
        id: 5,
        name: "Michelle",
        image: 'Michelle.png',
        age: "14",
        affiliation: "Party",
        description: "Michelle is Merrick's younger sister.  She loves her brother " +
            "unconditionally, but is frustrated that he's gone so often.  Due to often being " +
            "left on her own, and only having younger children to play with, she sometimes " +
            "acts a little young for her age.  She has no idea of the crimes her brother commits."
    },
    {
        id: 6,
        name: "Zack the Zealot",
        image: 'Zealot.png',
        age: "3.6 million years",
        affiliation: "Inquisition",
        description: "Very little is known about Zack, known as the Zealot.  He leads the " +
            "Inquisition, is known for his cruelty and general disdain for human life, and has " +
            "power beyond what anyone can comprehend.  He's not very popular among the people " +
            "due to his extreme ways and complete disregard for human life, but he and his " +
            "Inquisition are the only defense the people have against the demons and cultists, " +
            "so the leaders of the city do nothing about him.  Not like they could, if they tried."
    },
    {
        id: 7,
        name: "Ian the Indecisive",
        image: 'Ian.png',
        age: "324,542",
        affiliation: "Inquisition",
        description: "Somehow Ian managed to befriend the Zealot.  Ian serves as the Zealot's " +
            "right-hand man and typically does more with the Inquisitors than the Zealot does.  " +
            "Ian does not share his friend's cruelty or disregard for human life, and is actually " +
            "quite friendly.  He rarely makes decisions on his own, however, which earned him his title."
    },
    {
        id: 8,
        name: "Argon the Awesome",
        image: 'Argon.png',
        age: "42",
        affiliation: "Inquisition",
        description: "Argon was appointed to lead the Inquisition branch in one of the largest cities " +
            "in the world.  He is responsible for getting the party to accidentally join the " +
            "Inquisition due to general laziness.  He's also the Inquisition's main researcher.  " +
            "Argon came up with his title on his own, and no one cares enough to argue."
    },
    {
        id: 9,
        name: "Larry the Larcener",
        image: 'Larry.png',
        age: '624',
        affiliation: "Demon Cult",
        description: "Larry is the leader of the demon cult, seeking to bring the Demon King " +
            "into the world.  He used to be a member of the Inquisition, and in fact was dating " +
            "Sariah before she got sealed.  After she was sealed away, Larry grew angry with " +
            "the Zealot and turned against him, swearing to end his life.  Larry is called " +
            "the Larcener due to much of his power being stolen from demons."
    },
    {
        id: 10,
        name: "Xander",
        image: "Xander.png",
        age: "Unknown",
        affiliation: "Demons",
        description: "Xander is the feared Demon King.  He rules over all the demons with an " +
            "iron fist.  He seeks power and dominion over not just the world of demons, but the " +
            "world of men as well.  His power is said to be unrivaled, and rumor has it that he " +
            "single-handedly created all the demons."
    },
    {
        id: 11,
        name: "Hela",
        image: "Hela.png",
        age: "3.65 million years",
        affiliation: "Demons",
        description: "Hela is the Demon Queen.  She is most known for her cruelty and sadism.  " +
            "While she is not as powerful as her husband, she is nevertheless feared by many " +
            "and more than capable of punishing any who dare oppose her."
    },
    {
        id: 12,
        name: "Hades",
        image: "Hades.png",
        age: "2.1 million years",
        affiliation: "Demons",
        description: "Hades is one of Xander's four generals.  Hades is very mysterious, " +
            "with very little records of his powers or personality.  One thing that is known " +
            "is that he, unlike the rest of the generals, doesn't seem to delight in bloodshed " +
            "and would much rather observe than fight."
    },
    {
        id: 13,
        name: "Morrigan",
        image: 'Morrigan.png',
        age: "2 million years",
        affiliation: "Demons",
        description: "Morrigan is one of Xander's four generals.  Morrigan has power over dreams, " +
            "often inflicting those around her with horrible nightmares.  She's not especially " +
            "skilled in open combat, however."
    },
    {
        id: 14,
        name: "Beleth",
        image: 'Beleth.png',
        age: "2 million years",
        affiliation: "Demons",
        description: "Beleth is one of Xander's four generals.  Beleth has the power to transform " +
            "weaker beings around him, most often into cats.  Beleth is also highly skilled in " +
            "combat, being one of the more feared generals, however he has a huge weakness to " +
            "cat puns.  Something about them strips him of most of his strength."
    },
    {
        id: 15,
        name: "Minerva",
        image: 'Minerva.png',
        age: "2 million years",
        affiliation: "Demons",
        description: "Minerva is one of Xander's four generals.  Minerva has the power to possess " +
            "the body of anyone she wishes, so long as her power is greater than theirs.  Minerva " +
            "is known to be a coward, running away if the odds are against her."
    },
    {
        id: 16,
        name: "Lenus",
        image: 'Lenus.png',
        age: "Unknown",
        affiliation: "Angels",
        description: "Lenus is the Archangel, and is who most humans worship as their god.  He tries " +
            "to rule with justice and mercy, though trying to figure out a balance between the two " +
            "has driven him to madness.  He single-handedly created all other angels."
    },
    {
        id: 17,
        name: "Monica",
        image: 'Monica.png',
        age: "1.3 million years",
        affiliation: "Angels",
        description: "Monica is the lesser Archangel.  Lenus created her to help him determine " +
            "when to exercise justice and when to show mercy.  He has grown to see her as a daughter, " +
            "though she hates it when people call her the Angel Princess.  She's had some history with " +
            "Ian and the Zealot, though the extent of it is unknown.  She's not known for being " +
            "especially friendly."
    },
    {
        id: 18,
        name: "Jerard",
        image: 'Jerard.png',
        age: "Unknown",
        affiliation: "Other",
        description: "Very little is known about Jerard, other than that he seems to be everywhere " +
            "and know everything."
    }
]