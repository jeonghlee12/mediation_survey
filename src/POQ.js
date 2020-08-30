import React from 'react';
import Button from 'react-bootstrap/Button';
import { POQQuestions, fivePtOptions, sevenPtOptions } from './Data.js';

const defaultQuestionStatus = {
    "R1": false,
    "R2": false,
    "R3": false,
    "R4": false,
    "R5": false,
    "R6": false,
    "R7": false,
    "R8": false,
    "U1": false,
    "U2": false,
    "U3": false,
    "U4": false,
    "U5": false
};

class POQ extends React.Component {
    constructor(props) {
        super(props);
        const shuffle = require('shuffle-array');
        this.state = {
            qTypeOrder: shuffle(["retributive", "utilitarian"]),
            missing: defaultQuestionStatus,
            responses: {},
        }
        this.saveResponseToState = this.saveResponseToState.bind(this);
        this.skipStage = this.skipStage.bind(this);
    }

    saveResponseToState(id, response) {
        var tmpResponses = this.state.responses;
        tmpResponses[id] = response;
        this.setState({responses: tmpResponses});
    }

    skipStage() {
        if (Object.keys(this.state.responses).length < 13) {
            let questionlist = {...defaultQuestionStatus};

            for (const qGenre of this.state.qTypeOrder) {
                for (const question of POQQuestions[qGenre]) {
                    if (!(question.id in this.state.responses)) {
                        questionlist[question.id] = true;
                    }
                }
            }

            this.setState({missing: questionlist});
            alert("You must answer all questions.");
        } else {
            this.props.saveDictToState(this.state.responses);
            this.props.skipStage();
        }
    }

    render () {
        let content =
            <div className="ControlQuestions">
                <div className="Subtitle">
                    Please answer the following questions regarding your views on punishment.<br/>
                    <hr/>
                </div>
                <div style={{"margin": "5px"}}>
                    {this.state.qTypeOrder.map((qType) => (
                        <div key={qType}>
                            {POQQuestions[qType].map((q) => (
                                <div key={qType + q.id} className="QuestionMargin">
                                    <div className="Question" key={q.id}>
                                        {q.question}<span className={"Reminder " + (this.state.missing[q.id] ? `${q.id}Reminder` : "")}>*</span>
                                    </div>
                                    <div>
                                        {sevenPtOptions.map((option, opIdx) => (
                                            <div className="LikertScale" style={{"display": "inline-block"}} key={opIdx}>
                                            <input key={opIdx} type="radio" name={q.id} value={option} onClick={() => this.saveResponseToState(q.id, option)}/>
                                            <label style={{"display": "block", "textAlign": "center"}}>
                                                {option}
                                            </label>
                                        </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div>
                    <hr/>
                    <div>
                        <Button variant="secondary" onClick={this.skipStage}>Next</Button>
                    </div>
                </div>
            </div>
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default POQ;
