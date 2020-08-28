import React from 'react';
import Button from 'react-bootstrap/Button';
import {fullScenarios, scenarioQuestions, options, responsibilityOptions, agentQTypes, actionQTypes, responsibilityQTypes } from './Data.js';

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
            scenario: this.props.scenario[0],
            scenarioText: fullScenarios[this.props.agent][this.props.scenario[0]],
            questions: {
                        "agent": shuffle(agentQTypes),
                        "action": shuffle(actionQTypes),
                        "responsibility": shuffle(responsibilityQTypes)
                    },
            stages: ["scenario"].concat(shuffle(["agent", "action"])).concat(["responsibility"]),
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
        this.props.saveTime("Scenario N. " + this.state.curr_scenario_id + "_intro_end");
    }

    skipStage()
    {
        if (true) { //(this.state.curr_stage_id == 3) {
            if (true) {//(Object.keys(this.state.responses).length === 13) {
                this.props.saveDictToState({"scenarioId": this.state.scenario});
                this.props.saveDictToState(this.state.responses);
                this.setState({curr_stage_id: 0});
                this.skipScenario();
            } else {
                let questionlist = {...defaultQuestionStatus};
                var x;
                for (x of this.state.questions[this.state.stages[this.state.curr_stage_id]]) {
                    if (!(x in this.state.responses)) {
                        questionlist[x] = true;
                    }
                }
                this.setState({missing: questionlist});
                alert("You must answer all questions.");
            }
        } else {
            if (true) {//((Object.keys(this.state.responses).length === 5 * this.state.curr_stage_id) && (Object.keys(this.state.responses).length > 0)) {
                this.setState({curr_stage_id: this.state.curr_stage_id + 1});
                this.props.saveTime("Scenario N. " + this.state.curr_scenario_id + "_" + this.state.curr_stage_id + "_end");
            } else {
                let questionlist = {...defaultQuestionStatus};
                var x;
                for (x of this.state.questions[this.state.stages[this.state.curr_stage_id]]) {
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
        if (this.state.curr_scenario_id === 3) {
            this.props.skipStage();
        } else {
            let scenario_id = this.state.curr_scenario_id + 1;
            let new_scenario = this.props.scenario[scenario_id];
            let new_scenarioText = fullScenarios[this.props.agent][new_scenario]
            this.setState({curr_scenario_id: scenario_id});
            this.setState({scenario: new_scenario});
            this.setState({scenarioText: new_scenarioText});
            this.setState({responses: {}});
            this.setState({missing: defaultQuestionStatus});
            this.props.saveTime("Scenario N." + this.state.curr_scenario_id + "_end");
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
                    {introduction_text}
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
                        Answer the following questions about the scenario below.
                    </div>
                    {introduction_text}
                    <hr/>
                    <div className="Spotlight Question">
                        Answer the following questions regarding responsibility.
                    </div>
                    <div style={{"margin": "5px"}}>
                        {questionsOrder.map((qType, qIdx) => (
                            <div key={this.state.scenario + stage + qIdx} className="QuestionMargin">
                                <div className="Question" key={qIdx}>
                                    {questions[qType]}<span className={"Reminder " + (this.state.missing[qType] ? `${qType}Reminder` : "")}>*</span>
                                </div>
                                <div>
                                    {responsibilityOptions.map((option, opIdx) => (
                                        <div style={{"display": "inline-block", "margin": "10px"}} key={opIdx}>
                                        <input key={opIdx} type="radio" name={this.state.scenario +
                                            qType} value={option} onClick={() => this.saveResponseToState(qType, option)}/>
                                        <label style={{"display": "block"}}>
                                            {option}
                                        </label>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <Button variant="secondary" onClick={this.skipStage}>Next</Button>
                    </div>
                </div>
        } else {
            questions = scenarioQuestions[stage][this.props.agent][this.state.scenario];
            content =
                <div className="Scenario">
                    <div className="Subtitle Spotlight">
                        Answer the following questions about the scenario below.
                    </div>
                    {introduction_text}
                    <hr/>
                    <div className="Spotlight Question">
                        Answer the following questions regarding the <span className="RedSpotlight Subtitle">{stage}</span>.
                    </div>
                    <div style={{"margin": "5px"}}>
                        {questionsOrder.map((qType, qIdx) => (
                            <div key={this.state.scenario + stage + qIdx} className="QuestionMargin">
                                <div className="Question" key={qIdx}>
                                    {questions[qType]}<span className={"Reminder " + (this.state.missing[qType] ? `${qType}Reminder` : "")}>*</span>
                                </div>
                                <div>
                                    {options.map((option, opIdx) => (
                                        <div style={{"display": "inline-block", "margin": "10px"}} key={opIdx}>
                                        <input key={opIdx} type="radio" name={this.state.scenario +
                                            qType} value={option} onClick={() => this.saveResponseToState(qType, option)}/>
                                        <label style={{"display": "block"}}>
                                            {option}
                                        </label>
                                    </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

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
