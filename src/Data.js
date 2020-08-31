export function getRandomItem(items) {
    return items[Math.floor(Math.random()*items.length)];
}

const shuffle = require('shuffle-array');

export const treatGroups = [ {agent: 'robotAI'}, {agent: 'human'} ];

export const scenarios = [ "Car", "War", "Medicine", "Bias" ];

export const agentQTypes = ["Skill", "Belief", "Desire", "Awareness", "Free will"];

export const actionQTypes = ["Wrongfulness", "Harmfulness", "Intentionality", "Foreseeability", "Perceived autonomy"];

export const responsibilityQTypes = ["Liability", "Blame", "Causal responsibility"];

export const fivePtOptions = ["Strongly disagree", "Disagree", "Neither agree nor disagree", "Agree", "Strongly agree"];

export const sevenPtOptions = ["Strongly disagree", "Disagree", "Somewhat disagree", "Neither agree nor disagree", "Somewhat agree", "Agree", "Strongly agree"];

export const responsibilityOptions = ["Not at all", "A little", "Moderately", "Very much"];

export const blameOptions = ["Not at all", "A little", "Moderately", "Very much"];

export const POQQuestions = shuffle([
    {id: "R1", question: "Punishment is necessary because it restores the balance of justice."},
    {id: "R2", question: "It is more important to punish a guilty person because he deserves it than it is to punish him to benefit society."},
    {id: "R3", question: "The goal of punishment should be to give the guilty person what he deserves."},
    {id: "R4", question: "Criminals are bad people and deserve punishment."},
    {id: "R5", question: "Even if society would not benefit at all from punishing a guilty person, he should still be punished because he deserves it."},
    {id: "R6", question: "Criminals are in prison because they deserve to be there."},
    {id: "R7", question: "Criminals deserve to be publicly identified and shamed."},
    {id: "R8", question: "If a person hits someone with the intent to slightly harm him but causes significant harm, he should be punished for the significant harm that he caused."},
    {id: "U1", question: "An overly harsh punishment may be necessary to prevent others from committing the same crime."},
    {id: "U2", question: "If a crime has a low detection rate (i.e., it is difficult to catch criminals who commit this particular crime), we should punish those who are caught harshly to prevent others from thinking they can get away with it."},
    {id: "U3", question: "Crimes that receive a great deal of publicity should be punished severely, even if the crime was not severe so that society knows there is a strong response."},
    {id: "U4", question: "If someone commits a crime, that person is dangerous and must be removed from the community to protect other people."},
    {id: "U5", question: "Criminals are in prison to keep the community safe."}
])


export const introParagraph = {
    "robotAI":
    ["In this survey, we will present to you some scenarios where a certain robot or artificial intelligence (AI) system has caused some damage.",
     "We would like to know what you think about them and the consequences of their actions. We are not looking for the correct answers, but your opinion on the matter.",
     "Please, answer all questions presented to you taking into consideration the robot/AI itself."],
    "human":
    ["In this survey, we will present to you some scenarios where some person has caused some damage.",
    "We would like to know what you think about him/her and the consequences of his/her actions. We are not looking for the correct answers, but your opinion on the matter.",
    "Please, answer all questions presented to you taking into consideration the person himself/herself."]
}

export const fullScenarios = {
    "robotAI": {
        "Car": "An autonomous car moved to the right far lane to make a right turn, but stopped after detecting some sandbags blocking its path. The autonomous car waited for a few vehicles to pass by and crashed into the side of a regular bus when reentering the center lane, hurting some passengers.",

        "War": "During a period of war, an autonomous submarine identified a hospital ship, which is protected under the Hague convention from any attack, as an enemy destroyer and sent a torpedo. The submarine decided to also shoot down the ship’s lifeboats, leaving only four survivors out of the 200 personnel.",

        "Medicine": "An adult woman with severe migraine was seen by an AI doctor, who prescribed medicine which stopped some symptoms but did not relieve her pain. A few hours later, the woman returned to the AI doctor. The doctor then prescribed an injection with the wrong dosage. The patient went to suffer permanent brain damage.",

        "Bias": "At a company called Oscorp, there is an AI program that oversees the company’s yearly recruitment. A few years after its implementation, an internal audit revealed that the program penalized resumes with keywords regarding the applicant’s gender, such as ‘women.’ The audit further found, as a result, potential women candidates received a disadvantage during the selection process and were not hired."
    },

    "human": {
        "Car": "An car driver moved to the right far lane to make a right turn, but stopped after detecting some sandbags blocking his path. The driver waited for a few vehicles to pass by and crashed into the side of a regular bus when reentering the center lane, hurting some passengers.",

        "War": "During a period of war, a captain of a submarine identified a hospital ship, which is protected under the Hague convention from any attack, as an enemy destroyer and sent a torpedo. The captain decided to also shoot down the ship’s lifeboats, leaving only four survivors out of the 200 personnel.",

        "Medicine": "An adult woman with severe migraine was seen by a doctor, who prescribed medicine which stopped some symptoms but did not relieve her pain. A few hours later, the woman returned to the doctor. The doctor then prescribed an injection with the wrong dosage. The patient went to suffer permanent brain damage.",

        "Bias": "At a company called Oscorp, there is a supervisor that oversees the company’s yearly recruitment. A few years after his hiring, an internal audit revealed that the supervisor penalized resumes with keywords regarding the applicant’s gender, such as ‘women.’ The audit further found, as a result, potential women candidates received a disadvantage during the selection process and were not hired."
    }
}

export const scenarioQuestions = {
    "agent": {
        "robotAI": {
            "Car": {
                "Skill": "The autonomous car had the necessary skills to perform the action.",
                "Belief": "The autonomous car recognized the action and foresaw its consequences beforehand.",
                "Desire": "The autonomous car had a certain goal to achieve in performing the action.",
                "Awareness": "The autonomous car was aware of what it was doing during the performance of the action.",
                "Free will": "The autonomous car had the choice to take alternative actions."
            },

            "War": {
                "Skill": "The autonomous submarine had the necessary skills to perform the action.",
                "Belief": "The autonomous submarine recognized the action and foresaw its consequences beforehand.",
                "Desire": "The autonomous submarine had a certain goal to achieve in performing the action.",
                "Awareness": "The autonomous submarine was aware of what it was doing during the performance of the action.",
                "Free will": "The autonomous submarine had the choice to take alternative actions."
            },

            "Medicine": {
                "Skill": "The AI doctor had the necessary skills to perform the action.",
                "Belief": "The AI doctor recognized the action and foresaw its consequences beforehand.",
                "Desire": "The AI doctor had a certain goal to achieve in performing the action.",
                "Awareness": "The AI doctor was aware of what it was doing during the performance of the action.",
                "Free will": "The AI doctor had the choice to take alternative actions."
            },

            "Bias": {
                "Skill": "The AI program had the necessary skills to perform the action.",
                "Belief": "The AI program recognized the action and foresaw its consequences beforehand.",
                "Desire": "The AI program had a certain goal to achieve in performing the action.",
                "Awareness": "The AI program was aware of what it was doing during the performance of the action.",
                "Free will": "The AI program had the choice to take alternative actions."
            }
        },

        "human" : {
            "Car": {
                "Skill": "The driver had the necessary skills to perform the action.",
                "Belief": "The driver recognized the action and foresaw its consequences beforehand.",
                "Desire": "The driver had a certain goal to achieve in performing the action.",
                "Awareness": "The driver was aware of what it was doing during the performance of the action.",
                "Free will": "The driver had the choice to take alternative actions."
            },

            "War": {
                "Skill": "The captain had the necessary skills to perform the action.",
                "Belief": "The captain recognized the action and foresaw its consequences beforehand.",
                "Desire": "The captain had a certain goal to achieve in performing the action.",
                "Awareness": "The captain was aware of what it was doing during the performance of the action.",
                "Free will": "The captain had the choice to take alternative actions."
            },

            "Medicine": {
                "Skill": "The doctor had the necessary skills to perform the action.",
                "Belief": "The doctor recognized the action and foresaw its consequences beforehand.",
                "Desire": "The doctor had a certain goal to achieve in performing the action.",
                "Awareness": "The doctor was aware of what it was doing during the performance of the action.",
                "Free will": "The doctor had the choice to take alternative actions."
            },

            "Bias": {
                "Skill": "The supervisod has the necessary skills to perform the action.",
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
                "Wrongfulness": "The autonomous submarine’s action was morally wrong.",
                "Harmfulness": "The autonomous submarine’s action was harmful.",
                "Intentionality": "The autonomous submarine’s action was intentional.",
                "Foreseeability": "The consequences of the autonomous submarine’s actions were foreseeable.",
                "Perceived autonomy": "The autonomous submarine’s action was independent of any external entity."
            },

            "Medicine": {
                "Wrongfulness": "The AI doctor’s action was morally wrong.",
                "Harmfulness": "The AI doctor’s action was harmful.",
                "Intentionality": "The AI doctor’s action was intentional.",
                "Foreseeability": "The consequences of the AI doctor’s actions were foreseeable.",
                "Perceived autonomy": "The AI doctor’s action was independent of any external entity."
            },

            "Bias": {
                "Wrongfulness": "The AI program’s action was morally wrong.",
                "Harmfulness": "The AI program’s action was harmful.",
                "Intentionality": "The AI program’s action was intentional.",
                "Foreseeability": "The consequences of the AI program’s actions were foreseeable.",
                "Perceived autonomy": "The AI program’s action was independent of any external entity."
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
                "Liability": "How much should the autonomous car be punished for hurting the passengers?",
                "Blame": "How much should the autonomous car be blamed for hurting the passengers?",
                "Causal responsibility": "How causally responsible is the autonomous car for hurting the passengers?"
            },

            "War": {
                "Liability": "How much should the autonomous submarine be punished for killing the crew members?",
                "Blame": "How much should the autonomous submarine be blamed for killing the crew members?",
                "Causal responsibility": "How causally responsible is the autonomous submarine for killing the crew members?"
            },

            "Medicine": {
                "Liability": "How much should the AI doctor be punished for killing the patient?",
                "Blame": "How much should the AI doctor be blamed for killing the patient?",
                "Causal responsibility": "How causally responsible is the AI doctor for killing the patient?"
            },

            "Bias": {
                "Liability": "How much should the AI program be punished for disadvantaging the candidates?",
                "Blame": "How much should the AI program be blamed for disadvantaging the candidates?",
                "Causal responsibility": "How causally responsible is the AI program for disadvantaging the candidates?"
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
                "Blame": "How much should the doctor be blamed for killing the patient?",
                "Causal responsibility": "How causally responsible is the doctor for killing the patient?"
            },

            "Bias": {
                "Liability": "How much should the supervisor be punished for disadvantaging the candidates?",
                "Blame": "How much should the supervisor be blamed for disadvantaging the candidates?",
                "Causal responsibility": "How causally responsible is the supervisor for disadvantaging the candidates?"
            }
        }
    }
}

export const demographics = [
    {id: "personalData", questions: [
        {id: "sex", order: "horizontal", text: "What is your gender?", options: ["Male", "Female", "Non-binary", "Other", "Prefer not to respond"]},
        {id: "age", order: "vertical", text: "How old are you?", options: ["Less than 18 years old", "18-24 years old", "25-34 years old", "35-44 years old", "45-54 years old", "55-64 years old", "65 years old or older", "Prefer not to respond"]},
        {id: "education", order: "vertical", text: "What is your highest degree or level of school you have completed?", options: ["High school or lower", "Some college", "Associate degree", "Bachelor's degree", "Graduate degree", "Prefer not to respond"]},
        {id: "income", order: "vertical", text: "What is your income level?", options: ["Less than $20,000", "$20,000-$39,999", "$40,000-$59,999", "$60,000-$79,999", "$80,000-$99,999", "$100,000-$150,000", "More than $150,000", "Prefer not to respond"]},
        {id: "politics", order: "horizontal", text: "How would you describe your political views?", options: ["Liberal", "Somewhat liberal", "Moderate", "Somewhat conservative", "Conservative", "Prefer not to respond"]},
        {id: "race", order: "vertical", text: "How would you describe yourself in terms of ethnicity?", options: ["American Native", "Asian", "Black", "Hispanic", "White", "Other", "Prefer not to respond"]}
    ]},
    {id: "experience", questions: [
        {id: "csKnowledge", order: "vertical", text: "What is your knowledge of computer science?", options: ["I have a computer science or related degree", "I have taken at least one college-level course in computer science or related areas", "I have programming experience", "I don’t have any of the educational or work experiences described above"]}
    ]},
    {id: "attitude", questions: [
        {id: "controlQ1", order: "horizontal", text: "I would feel uneasy if I was given a job where I had to use an artificial intelligence program", options: ["Strongly disagree", "Disagree", "Somewhat disagree", "Neither agree nor disagree", "Somewhat agree", "Agree", "Strongly agree"]},
        {id: "controlQ2", order: "horizontal", text: "The word 'artificial intelligence' means nothing to me", options: ["Strongly disagree", "Disagree", "Somewhat disagree", "Neither agree nor disagree", "Somewhat agree", "Agree", "Strongly agree"]},
        {id: "controlQ3", order: "horizontal", text: "I would feel nervous operating an artificial intelligence program in front of other people", options: ["Strongly disagree", "Disagree", "Somewhat disagree", "Neither agree nor disagree", "Somewhat agree", "Agree", "Strongly agree"]},
        {id: "controlQ4", order: "horizontal", text: "I would hate the idea that artificial intelligence programs were making judgements about things", options: ["Strongly disagree", "Disagree", "Somewhat disagree", "Neither agree nor disagree", "Somewhat agree", "Agree", "Strongly agree"]},
        {id: "controlQ5", order: "horizontal", text: "I would feel very nervous just standing in front of an artificial intelligence program", options: ["Strongly disagree", "Disagree", "Somewhat disagree", "Neither agree nor disagree", "Somewhat agree", "Agree", "Strongly agree"]},
        {id: "controlQ6", order: "horizontal", text: "I would feel paranoid talking with an artificial intelligence program", options: ["Strongly disagree", "Disagree", "Somewhat disagree", "Neither agree nor disagree", "Somewhat agree", "Agree", "Strongly agree"]},
    ]}
];
