import React from 'react';
import Button from 'react-bootstrap/Button';
import {fullScenarios, scenarioQuestions, sevenPtOptions, responsibilityOptions, blameOptions, agentQTypes, actionQTypes, responsibilityQTypes } from './Data.js';

const cars = false;

const defaultQuestionStatus = {
    "Skill": false,
    "Belief": false,
    "Desire": false,
    "Awareness": false,
    "Free will": false,
    "Wrongfulness": false,
    "Harmfulness": false,
    "Intentionality": false,
    "Foreseeability": false,
    "Perceived autonomy": false,
    "Liability": false,
    "Blame": false,
    "Causal responsibility": false
};

class QuestionsScenario extends React.Component {
    constructor(props) {
        super(props)
        const shuffle = require('shuffle-array');
        this.state = {
            onlyCars: cars,
            scenarioOrder: this.props.scenario,
            scenario: (cars)? ["Car"] : this.props.scenario[0],
            scenarioText: fullScenarios[this.props.agent][(cars)? ["Car"] : this.props.scenario[0]],
            questions: {
                        "agent": shuffle(agentQTypes),
                        "action": shuffle(actionQTypes),
                        "responsibility": shuffle(responsibilityQTypes)
                    },
            stages: ["scenario"].concat(shuffle(["agent", "action"])).concat(["responsibility", "attention"]),
            curr_stage_id: 0,
            curr_scenario_id: 0,
            missing: defaultQuestionStatus,
            responses: {},
        }
        this.saveResponseToState = this.saveResponseToState.bind(this);
        this.skipIntro = this.skipIntro.bind(this);
        this.skipStage = this.skipStage.bind(this);
        this.skipScenario = this.skipScenario.bind(this);
    }

    saveResponseToState(id, response) {
        var tmpResponses = this.state.responses;
        tmpResponses[id] = response;
        this.setState({responses: tmpResponses});
    }

    skipIntro() {
        this.setState({curr_stage_id: this.state.curr_stage_id + 1});
        this.props.saveTime("Scenario" + this.state.curr_scenario_id + "_intro_end");
    }

    skipStage()
    {
        if (this.state.curr_stage_id === 3) {
            if (Object.keys(this.state.responses).length === 13) {
                let scenario = this.state.scenario
                this.props.saveDictToState({[scenario]: this.state.responses});
                this.setState({curr_stage_id: 0});
                this.props.saveTime("Scenario" + this.state.curr_scenario_id + "_end");
                if (this.state.onlyCars || (this.state.curr_scenario_id === 1)) {
                    this.setState({responses: {}});
                    this.setState({curr_stage_id: this.state.curr_stage_id + 1});
                }
                else {
                    this.skipScenario();
                }
            } else {
                let questionlist = {...defaultQuestionStatus};
                for (const x of this.state.questions[this.state.stages[this.state.curr_stage_id]]) {
                    if (!(x in this.state.responses)) {
                        questionlist[x] = true;
                    }
                }
                this.setState({missing: questionlist});
                alert("You must answer all questions.");
            }
        } else if (this.state.curr_stage_id === 4) {
            this.props.saveDictToState({"Attention Check": this.state.responses});
            this.setState({curr_stage_id: 0});
            this.props.saveTime("Scenario_AttentionCheck_end");
            this.skipScenario();
        } else {
            if ((Object.keys(this.state.responses).length === 5 * this.state.curr_stage_id) && (Object.keys(this.state.responses).length > 0)) {
                this.setState({curr_stage_id: this.state.curr_stage_id + 1});
                this.props.saveTime("Scenario" + this.state.curr_scenario_id + "_" + this.state.curr_stage_id + "_end");
            } else {
                let questionlist = {...defaultQuestionStatus};
                for (const x of this.state.questions[this.state.stages[this.state.curr_stage_id]]) {
                    if (!(x in this.state.responses)) {
                        questionlist[x] = true;
                    }
                }
                this.setState({missing: questionlist});
                alert("You must answer all questions.");
            }
        }
    }

    skipScenario() {
        if (this.state.onlyCars) {
            this.props.skipStage();
        } else {
            if (this.state.curr_scenario_id === 3) {
                this.props.skipStage();
            } else {
                let scenario_id = this.state.curr_scenario_id + 1;
                let new_scenario = this.state.scenarioOrder[scenario_id];
                let new_scenarioText = fullScenarios[this.props.agent][new_scenario]
                this.setState({curr_scenario_id: scenario_id});
                this.setState({scenario: new_scenario});
                this.setState({scenarioText: new_scenarioText});
                this.setState({responses: {}});
                this.setState({missing: defaultQuestionStatus});
            }
        }
    }

    render() {
        var stage = this.state.stages[this.state.curr_stage_id];
        const introduction_text =
            <main style={{"paddingTop": "5px"}}>
                {this.state.scenarioText}
            </main>;

        let content;
        let questionsOrder = this.state.questions[stage];
        let questions;

        if (stage === "scenario") {
            content =
                <div className="Scenario">
                    <div className="Subtitle Spotlight">
                        Imagine that you read the following story in your local newspaper:
                    </div>
                    <div className="main">
                        {introduction_text}
                    </div>
                    <div style={{"textAlign": "right", "fontSize": "10pt"}}>
                        {this.state.curr_scenario_id + 1}/4
                    </div>
                    <hr/>
                    <div>
                        <Button variant="secondary" onClick={this.skipIntro}>Next</Button>
                    </div>
                </div>
        } else if (stage === "responsibility") {
            questions = scenarioQuestions[stage][this.props.agent][this.state.scenario];
            content =
                <div className="Scenario">
                    <div className="Subtitle Spotlight">
                        Imagine that you read the following story in your local newspaper:
                    </div>
                    <div className="main">
                        {introduction_text}
                    </div>
                    <div style={{"textAlign": "right", "fontSize": "10pt"}}>
                        {this.state.curr_scenario_id + 1}/4
                    </div>
                    <hr/>
                    <div className="Spotlight Subtitle">
                        Regarding the scenario presented above, please answer the following questions.
                    </div>
                    <div style={{"margin": "5px"}}>
                        {questionsOrder.map((qType, qIdx) => (
                            (qType === "Blame") ?
                            <div key={this.state.scenario + stage + qIdx} className="QuestionMargin">
                                <div className="Question" key={qIdx}>
                                    {questions[qType]}<span className={"Reminder " + (this.state.missing[qType] ? `${qType}Reminder` : "")}>*</span>
                                </div>
                                <div>
                                    {blameOptions.map((option, opIdx) => (
                                        <div className="LikertScale" style={{"display": "inline-block"}} key={opIdx}>
                                        <input key={opIdx} type="radio" name={this.state.scenario + qType} value={option} onClick={() => this.saveResponseToState(qType, option)}/>
                                        <label style={{"display": "block"}}>
                                            {option}
                                        </label>
                                    </div>
                                    ))}
                                </div>
                            </div>
                            :
                            <div key={this.state.scenario + stage + qIdx} className="QuestionMargin">
                                <div className="Question" key={qIdx}>
                                    {questions[qType]}<span className={"Reminder " + (this.state.missing[qType] ? `${qType}Reminder` : "")}>*</span>
                                </div>
                                <div>
                                    {responsibilityOptions.map((option, opIdx) => (
                                        <div className="LikertScale" style={{"display": "inline-block"}} key={opIdx}>
                                        <input key={opIdx} type="radio" name={this.state.scenario + qType} value={option} onClick={() => this.saveResponseToState(qType, option)}/>
                                        <label style={{"display": "block"}}>
                                            {option}
                                        </label>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr/>
                    <div>
                        <Button variant="secondary" onClick={this.skipStage}>Next</Button>
                    </div>
                </div>
        } else if (stage === "attention") {
            content =
                <div className="Scenario">
                    <div className="Subtitle Spotlight">
                        Please read the prompt below carefully.
                    </div>
                        <main style={{"paddingTop": "5px"}}>
                            Artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines, unlike the natural intelligence displayed by humans and animals.
                            Leading AI textbooks define the field as the study of "intelligent agents:" any device that perceives its environment and takes actions that maximize its chance of successfully achieving its goals.
                            If you have been paying attention, please select "Strongly disagree" below.
                            Colloquially, the term "artificial intelligence" is often used to describe machines (or computers) that mimic "cognitive" functions that humans associate with the humans, such as "learning" and "problem solving".
                        </main>
                    <hr/>
                    <div className="Spotlight Question">
                        To what extent do you agree with the prompt above?
                    </div>
                    <div style={{"margin": "5px"}}>
                        <div className="QuestionMargin">
                            {sevenPtOptions.map((option, opIdx) => (
                                        <div className="LikertScale" style={{"display": "inline-block"}} key={opIdx}>
                                            <input key={opIdx} type="radio" name={"attention"} value={option} onClick={() => this.saveResponseToState("attention", option)}/>
                                            <label style={{"display": "block"}}>
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                        </div>
                    </div>
                    <hr/>
                    <div>
                        <Button variant="secondary" onClick={this.skipStage}>Next</Button>
                    </div>
                </div>
        } else {
            questions = scenarioQuestions[stage][this.props.agent][this.state.scenario];
            content =
                <div className="Scenario">
                    <div className="Subtitle Spotlight">
                        Imagine that you read the following story in your local newspaper:
                    </div>
                    <div className="main">
                        {introduction_text}
                    </div>
                    <div style={{"textAlign": "right", "fontSize": "10pt"}}>
                        {this.state.curr_scenario_id + 1}/4
                    </div>
                    <hr/>
                    <div className="Spotlight Subtitle">
                        Regarding the scenario presented above, to what extent do you agree with the following statements?
                    </div>
                    <div style={{"margin": "5px"}}>
                        {questionsOrder.map((qType, qIdx) => (
                            <div key={this.state.scenario + stage + qIdx} className="QuestionMargin">
                                <div className="Question" key={qIdx}>
                                    {questions[qType]}<span className={"Reminder " + (this.state.missing[qType] ? `${qType}Reminder` : "")}>*</span>
                                </div>
                                <div>
                                    {sevenPtOptions.map((option, opIdx) => (
                                        <div className="LikertScale" style={{"display": "inline-block"}} key={opIdx}>
                                            <input key={opIdx} type="radio" name={this.state.scenario + qType} value={option} onClick={() => this.saveResponseToState(qType, option)}/>
                                            <label style={{"display": "block"}}>
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr/>
                    <div>
                        <Button variant="secondary" onClick={this.skipStage}>Next</Button>
                    </div>
                </div>
        }
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default QuestionsScenario
