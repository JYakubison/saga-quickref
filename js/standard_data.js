standard_data = [
    {
        title: "Melee Attack",
        icon: "saber-slash",
        subtitle: "Attack Adjacent Creature",
        description: "Melee Weapon attack on adjacent creature",
        lines: [
            "With a Melee Weapon, you can strike any target in a square you can threaten. Small and Medium characters threaten the squares adjacent to them. Bigger creatures may threaten a larger number of squares, as defined by their Reach (See Reach below). ",
            "When you wield a Melee Weapon two-handed, add double your Strength bonus (If any) to the Damage. This higher Strength modifier does not apply to Light Weapons (Weapons smaller than your size).  ",
            "Sometimes objects not crafted to be weapons can be used: chairs, bottles, crates, and so on. Because these objects are not designed for such use, characters who use Improvised Melee Weapons are treated as not proficient with them and take a -5 penalty on their attack rolls. The GM determines the size and Damage dealt by an Improvised Weapon. "
        ]
    },
    {
        title: "Ranged Attack",
        icon: "laser-blast",
        subtitle: "Attack Distant Creature",
        description: "Ranged Weapon attack on distant creature",
        lines: [
            "With a Ranged Weapon, you can throw or shoot at any target within your Line of Sight if there are no obstructions (Including other characters) between you and the target. The maximum Range or a Ranged Weapon depends on the weapon used. ",
            "A Ranged Weapon can attack a target at Point-Blank, Short, Medium, or Long Range. If you make a Ranged Attack against a target within the weapon's Point-Blank Range, you take no penalty on the attack roll; your penalty on attack rolls increases to -2 at Short Range, -5 at Medium Range, and -10 at Long Range. ",
            "Sometimes objects not crafted to be weapons can be thrown in a dangerous manner: small rocks, vases, pitchers, Lightsabers, and so forth. Because these objects are not designed for such use, characters who use Improvised Thrown Weapons are treated as not proficient with them and take a -5 penalty on their attack rolls. The GM determines the size and Damage dealt by an Improvised Weapon. "
        ]
    },
    {
        title: "Aid Another",
        icon: "hand",
        subtitle: "Assist and ally ",
        description: "Assisting ally with different rolls",
        lines: [
            "As a Standard Action, you can aid an ally's next Skill Check or Attack Roll, or you can interfere with an enemy's attacks. ",
            "You can help another character achieve success on their Skill Check or Ability Check by making the same kind of Skill Check or Ability Check in a cooperative effort. If you roll a 10 or higher on your check, the character you are helping receives a +2 bonus on their own check. You can't Take 10 on a Skill Check or Ability Check to Aid Another. ",
            "In combat, you can Aid Another character's Attack by forcing an opponent to avoid your own Attacks, making it more difficult for them to avoid your ally. Select an opponent and make an Attack against a Reflex Defense of 10. If you succeed, you grant a +2 bonus on a single ally's next Attack Roll against that opponent. ",
            "In combat, you can distract or interfere with an opponent, making their Attacks more difficult. Select an opponent and make an Attack against a Reflex Defense of 10. If you succeed, that opponent takes a -2 penalty on its next Attack Roll. "
        ]
    },
    {
        title: "Attack Object",
        icon: "hammer-break",
        subtitle: "Damage an object",
        description: "Different options to break objects",
        lines: [
            "Sometimes you need to Attack an Object such as a door, a control console, or a held weapon, either to destroy it or bypass it. An unattended, immobile Object has a Reflex Defense of 5 + its Size Modifier. If you hit it, you deal Damage as normal. However, an Object usually has Damage Deduction (DR), which means that any attack that hits it has its Damage reduced by the indicated amount. (Lightsabers ignore an Objects Damage Reduction.) An Object reduced to 0 Hit Points is Disabled. If the Damage that reduces the Object to 0 Hit Points also equals or exceeds the Objects's Damage Threshold, the Object is destroyed instead. ",
            "Like characters, Objects become increasingly debilitated if they take a lot of Damage at once. If an Object takes Damage from a single attack that equals or exceeds its Damage Threshold, it moves -1 step on the Condition Track. An Object that moves -5 steps on the Condition Track is Disabled. ",
            "A Held, Carried, or Worn Object is much harder to hit than an unattended Object, and has a Reflex Defense equal to 10 + the Object's Size Modifier + the Reflex Defense of the holder (Not counting Armor Bonus or Natural Armor Bonus, if any). ",
            "Very large Objects have separate Hit Point totals for different sections. For example, you can break the window of an Airspeeder without destroying the whole speeder. ",
            "The GM may determine that certain weapons just can't deal Damage effectively to certain Objects. For example, you will have a hard time breaking open a blast door with a Cesta or cutting a cable with a Club. The GM may also rule that certain Attacks are especially successful against some Objects. For example, it's easy to sheer or ignite a curtain with a Lightsaber. ",
            "All Objects have a Strength score that represents their innate ability to bear weight (See Encumbrance). An Object supporting weight in excess of its Heavy Load moves -1 step along the Condition Track immediately, and another -1 step each round on the same Initiative count. If an Object is supporting weight in excess of twice its Heavy Load, it is immediately Disabled. ",
            "When you try to break something with sudden force rather than dealing regular Damage, use a Strength check to determine whether you succeed. The DC depends more on the construction of the item than on the material, but it is usually equal to 15 + the Object's Strength modifier. Attempting to break an Object is a Standard Action. If the Object has moved down the Condition Track, apply the condition penalty to the Object's break DC. "
        ]
    },
    {
        title: "Charge",
        icon: "fire-dash",
        subtitle: "Rush and attack",
        description: "Rush a creature and make a melee attack",
        lines: [
            "As a Standard Action you can move your Speed (Minimum 2 squares) in a straight line, and then make a Melee Attack at the end of your movement. You gain a +2 competence bonus on your Attack Roll, but take a -2 penalty to your Reflex Defense until the start of your next turn. ",
            "You cannot Charge through low objects or squares occupied by opponents (Allies do not hinder your Charge), and Charging through Difficult Terrain costs twice as much per square as normal.",
            "You cannot Tumble during your movement as a part of a Charge. After you resolve a Charge Attack, you can take no further Actions this turn (Although other Actions can be taken prior to the Charge). "
        ]
    },
    {
        title: "Disarm",
        icon: "drop-weapon",
        subtitle: "Disarm an opponent",
        description: "Attempt to disarm an opponent",
        lines: [
            "As a Standard Action, you may attempt to Disarm an opponent, forcing them to drop one weapon (Or object) that they are holding. ",
            "Make a normal Melee Attack Roll against your opponent, who gets a +10 bonus to their Reflex Defense during this Action. If your opponent is holding the weapon with more than one hand, you take a -5 penalty on your Attack Roll to Disarm them, per additional hand grasping the weapon. ",
            "If the Attack succeeds, your opponent is Disarmed. If you successfully Disarm your opponent with an Unarmed Attack, you can take the Disarmed weapon (Or object). Otherwise, it falls on the ground at your opponent's feet (Inside their Fighting Space). ",
            "If your Disarm Attack fails, your opponent can immediately make an Attack of Opportunity against you (See Attacks of Opportunity below). ",
            "If you have the Improved Disarm Feat, you get a +5 bonus on your Melee Attack Roll to Disarm an opponent, and your opponent doesn't get to make any Attacks of Opportunity against you if your Disarm attempt fails. ",
            "If you have the Ranged Disarm Talent, you can attempt to Disarm your opponent with a Ranged Attack. If the Attack fails, your opponent doesn't get to make any Attacks of Opportunity against you. "
        ]
    },
    {
        title: "Fight Defensively",
        icon: "armor-upgrade",
        subtitle: "Protect Yourself",
        description: "Concentrate on protecting yourself instead of attacking",
        lines: [
            "As a Standard Action, you can concentrate more on protecting yourself than hurting your enemies. You can take a -5 penalty on your Attack Rolls and gain a +2 dodge bonus to your Reflex Defense until the start of your next turn. ",
            "If you choose to make no Attacks until your next turn (Not even Attacks of Opportunity), you gain a +5 dodge bonus to your Reflex Defense until the start of your next turn. ",
            "If you are Trained in the Acrobatics skill, you instead gain a +5 dodge bonus to your Reflex Defense when you Fight Defensively, or a +10 dodge bonus if you choose to make no Attacks. "
        ]
    },
    {
        title: "Grab",
        icon: "grab",
        subtitle: "Grab a creature",
        description: "Grab an enemy, can lead to a grapple",
        lines: [
            "As a Standard Action, you can make a Grab Attack. A Grab Attack is treated as an Unarmed Attack, except that it doesn't deal Damage and you take a -5 penalty on the Attack Roll. You can only Grab an opponent up to one size category larger than yourself, and only one opponent at a time. ",
            "Until it breaks the Grab, a Grabbed creature takes a -2 penalty on Attack Rolls unless it uses a Natural Weapon or a Light Weapon. Additionally, it cannot Move until it breaks the Grab. ",
            "Breaking the Grab is a Standard Action, and automatically clears one grabber per character level. (The grabbed creature chooses which grabbers it clears if there are any left over.) ",
            ""
        ]
    },


]