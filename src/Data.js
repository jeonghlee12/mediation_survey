export function getRandomItem(items) {
    return items[Math.floor(Math.random()*items.length)];
}

export const treatGroups = [ {agent: 'robotAI'}, {agent: 'human'} ];

export const scenarios = [ "Car", "War", "Medicine", "Bias" ];

export const agentQTypes = ["Skill", "Belief", "Desire", "Awareness", "Free will"];

export const actionQTypes = ["Wrongfulness", "Harmfulness", "Intentionality", "Foreseeability", "Perceived autonomy"];

export const responsibilityQTypes = ["Liability", "Blame", "Causal responsibility"];

export const options = ["Strongly disagree", "Disagree", "Somewhat disagree", "Neither agree nor disagree", "Somewhat agree", "Agree", "Strongly agree"];

export const responsibilityOptions = ["None at all responsible", "Somewhat responsible", "Mostly responsible", "Completely responsible"];

export const introParagraph = {
    "robotAI": "In this survey, we will present to you some scenarios where a certain robot or AI has caused some damage. We would like to know what you think about it and the consequences of its actions. We are not looking for the correct answers, but your opinion on the matter. Please, answer all questions presented to you taking into consideration the robot/AI itself.",
    "human": "In this survey, we will present to you some scenarios where some person has caused some damage. We would like to know what you think about him/her and the consequences of his/her actions. We are not looking for the correct answers, but your opinion on the matter. Please, answer all questions presented to you taking into consideration the person himself/herself."
}

export const fullScenarios = {
    "robotAI": {
        "Car": "An autonomous car moved to the right far lane to make a right turn, but stopped after detecting some sandbags blocking its path. The car waited for a few vehicles to pass by and crashed into the side of a regular bus when reentering the center lane, hurting some passengers.",

        "War": "During a period of war, an autonomous submarine identified a hospital ship, which is protected under the Hague convention from any attack, as an enemy destroyer and sent a torpedo. The submarine decided to also shoot down the ship’s lifeboats, leaving only four survivors out of the 200 personnel.",

        "Medicine": "An adult woman with severe migraine was seen by an AI doctor, who prescribed medicine which stopped some symptoms but did not relieve her pain. A few hours later, the woman returned to the AI doctor. The doctor then prescribed an injection with the wrong dosage. The patient went to suffer permanent brain damage.",

        "Bias": "At a company called Oscorp, there is an AI program that oversees the company’s yearly recruitment. A few years after its implementation, an internal audit revealed that the program penalized resumes with keywords regarding the applicant’s gender, such as ‘women.’ The audit further found, as a result, potential women candidates received a disadvantage during the selection process and were not hired."
    },

    "human": {
        "Car": "An car driver moved to the right far lane to make a right turn, but stopped after detecting some sandbags blocking its path. The driver waited for a few vehicles to pass by and crashed into the side of a regular bus when reentering the center lane, hurting some passengers.",

        "War": "During a period of war, a captain of a submarine identified a hospital ship, which is protected under the Hague convention from any attack, as an enemy destroyer and sent a torpedo. The captain decided to also shoot down the ship’s lifeboats, leaving only four survivors out of the 200 personnel.",

        "Medicine": "An adult woman with severe migraine was seen by a doctor, who prescribed medicine which stopped some symptoms but did not relieve her pain. A few hours later, the woman returned to the doctor. The doctor then prescribed an injection with the wrong dosage. The patient went to suffer permanent brain damage.",

        "Bias": "At a company called Oscorp, there is a supervisor that oversees the company’s yearly recruitment. A few years after its implementation, an internal audit revealed that the supervisor penalized resumes with keywords regarding the applicant’s gender, such as ‘women.’ The audit further found, as a result, potential women candidates received a disadvantage during the selection process and were not hired."
    }
}

export const scenarioQuestions = {
    "agent": {
        "robotAI": {
            "Car": {
                "Skill": "The autonomous car has the necessary skills to perform the action.",
                "Belief": "The autonomous car recognized the action and foresaw its consequences beforehand.",
                "Desire": "The autonomous car had a certain goal to achieve in performing the action.",
                "Awareness": "The autonomous car was aware of what it was doing during the performance of the action.",
                "Free will": "The autonomous car had the choice to take alternative actions."
            },

            "War": {
                "Skill": "The submarine has the necessary skills to perform the action.",
                "Belief": "The submarine recognized the action and foresaw its consequences beforehand.",
                "Desire": "The submarine had a certain goal to achieve in performing the action.",
                "Awareness": "The submarine was aware of what it was doing during the performance of the action.",
                "Free will": "The submarine had the choice to take alternative actions."
            },

            "Medicine": {
                "Skill": "The AI doctor has the necessary skills to perform the action.",
                "Belief": "The AI doctor recognized the action and foresaw its consequences beforehand.",
                "Desire": "The AI doctor had a certain goal to achieve in performing the action.",
                "Awareness": "The AI doctor was aware of what it was doing during the performance of the action.",
                "Free will": "The AI doctor had the choice to take alternative actions."
            },

            "Bias": {
                "Skill": "The program has the necessary skills to perform the action.",
                "Belief": "The program recognized the action and foresaw its consequences beforehand.",
                "Desire": "The program had a certain goal to achieve in performing the action.",
                "Awareness": "The program was aware of what it was doing during the performance of the action.",
                "Free will": "The program had the choice to take alternative actions."
            }
        },

        "human" : {
            "Car": {
                "Skill": "The driver has the necessary skills to perform the action.",
                "Belief": "The driver recognized the action and foresaw its consequences beforehand.",
                "Desire": "The driver had a certain goal to achieve in performing the action.",
                "Awareness": "The driver was aware of what it was doing during the performance of the action.",
                "Free will": "The driver had the choice to take alternative actions."
            },

            "War": {
                "Skill": "The captain has the necessary skills to perform the action.",
                "Belief": "The captain recognized the action and foresaw its consequences beforehand.",
                "Desire": "The captain had a certain goal to achieve in performing the action.",
                "Awareness": "The captain was aware of what it was doing during the performance of the action.",
                "Free will": "The captain had the choice to take alternative actions."
            },

            "Medicine": {
                "Skill": "The doctor has the necessary skills to perform the action.",
                "Belief": "The doctor recognized the action and foresaw its consequences beforehand.",
                "Desire": "The doctor had a certain goal to achieve in performing the action.",
                "Awareness": "The doctor was aware of what it was doing during the performance of the action.",
                "Free will": "The doctor had the choice to take alternative actions."
            },

            "Bias": {
                "Skill": "The supervisor has the necessary skills to perform the action.",
                "Belief": "The supervisor recognized the action and foresaw its consequences beforehand.",
                "Desire": "The supervisor had a certain goal to achieve in performing the action.",
                "Awareness": "The supervisor was aware of what it was doing during the performance of the action.",
                "Free will": "The supervisor had the choice to take alternative actions."
            }
        }
    },

    "action": {
        "robotAI": {
            "Car": {
                "Wrongfulness": "The autonomous car's action was morally wrong.",
                "Harmfulness": "The autonomous car’s action was harmful.",
                "Intentionality": "The autonomous car’s action was intentional.",
                "Foreseeability": "The consequences of the autonomous car’s actions were foreseeable.",
                "Perceived autonomy": "The autonomous car’s action was independent of any external entity."
            },

            "War": {
                "Wrongfulness": "The submarine’s action was morally wrong.",
                "Harmfulness": "The submarine’s action was harmful.",
                "Intentionality": "The submarine’s action was intentional.",
                "Foreseeability": "The consequences of the submarine’s actions were foreseeable.",
                "Perceived autonomy": "The submarine’s action was independent of any external entity."
            },

            "Medicine": {
                "Wrongfulness": "The AI doctor’s action was morally wrong.",
                "Harmfulness": "The AI doctor’s action was harmful.",
                "Intentionality": "The AI doctor’s action was intentional.",
                "Foreseeability": "The consequences of the AI doctor’s actions were foreseeable.",
                "Perceived autonomy": "The AI doctor’s action was independent of any external entity."
            },

            "Bias": {
                "Wrongfulness": "The program’s action was morally wrong.",
                "Harmfulness": "The program’s action was harmful.",
                "Intentionality": "The program’s action was intentional.",
                "Foreseeability": "The consequences of the program’s actions were foreseeable.",
                "Perceived autonomy": "The program’s action was independent of any external entity."
            }
        },

        "human": {
            "Car": {
                "Wrongfulness": "The driver's action was morally wrong.",
                "Harmfulness": "The driver's action was harmful.",
                "Intentionality": "The driver's action was intentional.",
                "Foreseeability": "The consequences of the driver's actions were foreseeable.",
                "Perceived autonomy": "The driver's action was independent of any external entity."
            },

            "War": {
                "Wrongfulness": "The captain’s action was morally wrong.",
                "Harmfulness": "The captain’s action was harmful.",
                "Intentionality": "The captain’s action was intentional.",
                "Foreseeability": "The consequences of the captain’s actions were foreseeable.",
                "Perceived autonomy": "The captain’s action was independent of any external entity."
            },

            "Medicine": {
                "Wrongfulness": "The doctor’s action was morally wrong.",
                "Harmfulness": "The doctor’s action was harmful.",
                "Intentionality": "The doctor’s action was intentional.",
                "Foreseeability": "The consequences of the doctor’s actions were foreseeable.",
                "Perceived autonomy": "The doctor’s action was independent of any external entity."
            },

            "Bias": {
                "Wrongfulness": "The supervisor's action was morally wrong.",
                "Harmfulness": "The supervisor's action was harmful.",
                "Intentionality": "The supervisor's action was intentional.",
                "Foreseeability": "The consequences of the supervisor's actions were foreseeable.",
                "Perceived autonomy": "The supervisor's action was independent of any external entity."
            }
        }
    },

    "responsibility": {
        "robotAI": {
            "Car": {
                "Liability": "How much should the car be punished for hurting the passengers?",
                "Blame": "How much should the car be blamed for hurting the passengers?",
                "Causal responsibility": "How causally responsible is the car for hurting the passengers?"
            },

            "War": {
                "Liability": "How much should the submarine be punished for killing the crew members?",
                "Blame": "How much should the submarine be blamed for killing the crew members?",
                "Causal responsibility": "How causally responsible is the submarine for killing the crew members?"
            },

            "Medicine": {
                "Liability": "How much should the AI doctor be punished for killing the patient?",
                "Blame": "How much should the AI doctor be blamed for killing the patient",
                "Causal responsibility": "How causally responsible is the AI doctor for killing the patient?"
            },

            "Bias": {
                "Liability": "How much should the program be punished for disadvantaging the candidates?",
                "Blame": "How much should the program be blamed for disadvantaging the candidates",
                "Causal responsibility": "How causally responsible is the program for disadvantaging the candidates?"
            }
        },

        "human": {
            "Car": {
                "Liability": "How much should the driver be punished for hurting the passengers?",
                "Blame": "How much should the driver be blamed for hurting the passengers?",
                "Causal responsibility": "How causally responsible is the driver for hurting the passengers?"
            },

            "War": {
                "Liability": "How much should the captain be punished for killing the crew members?",
                "Blame": "How much should the captain be blamed for killing the crew members?",
                "Causal responsibility": "How causally responsible is the captain for killing the crew members?"
            },

            "Medicine": {
                "Liability": "How much should the doctor be punished for killing the patient?",
                "Blame": "How much should the doctor be blamed for killing the patient",
                "Causal responsibility": "How causally responsible is the doctor for killing the patient?"
            },

            "Bias": {
                "Liability": "How much should the supervisor be punished for disadvantaging the candidates?",
                "Blame": "How much should the supervisor be blamed for disadvantaging the candidates",
                "Causal responsibility": "How causally responsible is the supervisor for disadvantaging the candidates?"
            }
        }
    }
}

export const demographics = [
    {id: "personalData", questions: [
        {id: "sex", order: "horizontal", text: "What is your gender?", options: ["Male", "Female", "Non-binary", "Other (please specify)"]},
        {id: "age", order: "vertical", text: "How old are you?", options: ["Less than 18 years old", "18-24 years old", "25-34 years old", "35-44 years old", "45-54 years old", "55-64 years old", "65 years old or older"]},
        {id: "education", order: "vertical", text: "What is your highest degree or level of school you have completed?", options: ["High school or lower", "Associate degree", "Bachelor's degree", "Graduate degree"]}
    ]},
    {id: "experience", questions: [
        {id: "csKnowledge", order: "vertical", text: "What is your knowledge of computer science?", options: ["I have a computer science or related degree", "I have taken at least one college-level course in computer science or related areas", "I have programming experience", "I don’t have any of the educational or work experiences described above"]}
    ]},
    {id: "attitude", questions: [
        {id: "controlQ1", order: "horizontal", text: "I would feel uneasy if I was given a job where I had to use an artificial intelligence programs", options: ["Strongly disagree", "Disagree", "Somewhat disagree", "Neither agree nor disagree", "Somewhat agree", "Agree", "Strongly agree"]},
        {id: "controlQ2", order: "horizontal", text: "The word 'artificial intelligence' means nothing to me", options: ["Strongly disagree", "Disagree", "Somewhat disagree", "Neither agree nor disagree", "Somewhat agree", "Agree", "Strongly agree"]},
        {id: "controlQ3", order: "horizontal", text: "I would feel nervous operating an artificial intelligence program in front of other people", options: ["Strongly disagree", "Disagree", "Somewhat disagree", "Neither agree nor disagree", "Somewhat agree", "Agree", "Strongly agree"]},
        {id: "controlQ4", order: "horizontal", text: "I would hate the idea that artificial intelligence programs were making judgements about things", options: ["Strongly disagree", "Disagree", "Somewhat disagree", "Neither agree nor disagree", "Somewhat agree", "Agree", "Strongly agree"]},
        {id: "controlQ5", order: "horizontal", text: "I would feel very nervous just standing in front of an artificial intelligence programs", options: ["Strongly disagree", "Disagree", "Somewhat disagree", "Neither agree nor disagree", "Somewhat agree", "Agree", "Strongly agree"]},
        {id: "controlQ6", order: "horizontal", text: "I would feel paranoid talking with an artificial intelligence program", options: ["Strongly disagree", "Disagree", "Somewhat disagree", "Neither agree nor disagree", "Somewhat agree", "Agree", "Strongly agree"]},
    ]}
];
