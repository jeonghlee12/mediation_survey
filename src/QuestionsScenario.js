import React from 'react';
import Button from 'react-bootstrap/Button';
import {fullScenarios, scenarioQuestions, options} from './Data.js';

class QuestionsScenario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            scenario: this.props.scenario[0],
            scenarioText: fullScenarios[this.props.agent][this.props.scenario[0]],
            stages: ["scenario", "agent", "action"],
            curr_stage_id: 0,
            curr_scenario_id: 0,
            init_time: null,
            responses: {},
        }
        this.skipIntro = this.skipIntro.bind(this);
        this.skipStage = this.skipStage.bind(this);
        this.skipScenario = this.skipScenario.bind(this);
        this.saveResponseToState = this.saveResponseToState.bind(this);
    }

    componentDidMount() {
        this.setState({init_time: new Date()});
    }

    skipIntro() {
        // const delta_time = (new Date() - this.state.init_time) / 1000;
        // console.log(delta_time);

        const delta_time = 6;
        if (delta_time < 5) {
            alert("Please take some more time to carefully read the provided scenario.");
        } else {
            this.setState({curr_stage_id: this.state.curr_stage_id + 1});
            this.setState({init_time: new Date()});
            this.props.saveTime("Scenario N." + this.state.curr_scenario_id + "_" + this.state.curr_stage_id + "_end");
        }
    }

    skipStage() {
        console.log(Object.keys(this.state.responses).length);
        if (Object.keys(this.state.responses).length === 10) {
            this.props.saveDictToState({"scenarioId": this.state.scenario});
            this.props.saveDictToState(this.state.responses);
            this.skipScenario();
        } else {
            if ((Object.keys(this.state.responses).length % 5 === 0) && !(Object.keys(this.state.responses).length === 10)) {
                const delta_time = (new Date() - this.state.init_time) / 1000;
                console.log(delta_time);

                if (delta_time > 5) {
                    this.setState({curr_stage_id: this.state.curr_stage_id + 1});
                    this.props.saveTime("Scenario N." + this.props.stage + "_" + this.state.curr_stage_id + "_end");
                    this.setState({init_time: new Date()});
                } else {
                    alert("Please take some more time to carefully read the provided scenario and answer the questions.");
                }
            } else {
                alert("You must answer all questions.");
            }
        }
    }

    skipScenario() {
        if (this.state.curr_scenario_id === 3) {
            this.props.skipStage();
        } else {
            console.log("here");
            console.log(this.state.curr_scenario_id);
            this.setState({curr_scenario_id: this.state.curr_scenario_id + 1});

            console.log(this.state.curr_scenario_id);
            this.setState({scenario: this.props.scenario[this.state.curr_scenario_id + 1]});
            this.setState({scenarioText: fullScenarios[this.props.agent][this.state.scenario]});
            this.setState({responses: {}});
            this.setState({curr_stage_id: 0});
            console.log(this.state.curr_scenario_id);
            this.props.saveTime("Scenario N." + this.state.curr_scenario_id + "_end");
            this.setState({init_time: new Date()});
        }
    }

    saveResponseToState(id, response) {
        var tmpResponses = this.state.responses;
        tmpResponses[id] = response;
        this.setState({responses: tmpResponses});
    }

    render() {
        var stage = this.state.stages[this.state.curr_stage_id];
        const introduction_text =
            <main style={{"paddingTop": "5px"}}>
                {this.state.scenarioText}
            </main>;

        let content;
        let questionsOrder = this.props.questions[stage];
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
        } else {
            questions = scenarioQuestions[stage][this.props.agent][this.state.scenario];
            content =
                <div className="Scenario">
                    <div className="Subtitle Spotlight">
                        Answer the following questions about the scenario below
                    </div>
                    {introduction_text}
                    <hr/>
                    <div className="Spotlight Question">
                        Answer the following questions regarding the <span className="RedSpotlight Subtitle">agent</span>
                    </div>
                    <div style={{"margin": "5px"}}>
                        {questionsOrder.map((qType, qIdx) => (
                            <div key={this.state.scenario + stage + qIdx} className="QuestionMargin">
                                <div className="Question" key={qIdx}>
                                    {questions[qType]}
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
