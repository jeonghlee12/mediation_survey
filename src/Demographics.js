import React from 'react';
import Button from 'react-bootstrap/Button';
import { demographics } from './Data.js';

const defaultQuestionStatus = {
    "sex": false,
    "age": false,
    "education": false,
    "csKnowledge": false,
    "controlQ1": false,
    "controlQ2": false,
    "controlQ3": false,
    "controlQ4": false,
    "controlQ5": false,
    "controlQ6": false
};

class Demographics extends React.Component {
    constructor(props) {
        super(props);
        const shuffle = require('shuffle-array');
        const shuffleQGroups = shuffle(demographics);
        shuffleQGroups.forEach((qGroup) => {
            qGroup.questions = shuffle(qGroup.questions);
        });
        this.state = {
            questionGroups: shuffleQGroups,
            missing: defaultQuestionStatus,
            responses: {},
        }
        this.saveResponseToState = this.saveResponseToState.bind(this);
        this.finalizeStage = this.finalizeStage.bind(this);
    }

    saveResponseToState(id, response) {
        var tmpResponses = this.state.responses;
        tmpResponses[id] = response;
        this.setState({responses: tmpResponses});
    }

    finalizeStage() {
        if (Object.keys(this.state.responses).length < 10) {
            let questionlist = {...defaultQuestionStatus};

            for (const questionGenre of this.state.questionGroups) {
                for (const question of questionGenre.questions) {
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

    render() {
        let content =
            <div className="ControlQuestions">
                <div className="Title">Let us know a little bit more about yourself.</div>
                <main>
                All the information obtained below will be used solely for research purposes.
                All data will be confidential and will not be made available to anyone outside the research team.
                Results will be published only as aggregate statistics, allowing no inference on any particular individual.
                <br/>
                <hr/>
                </main>
                <div style={{"margin": "10px"}}>
                    {this.state.questionGroups.map((qGroup, qGroupIdx) => (
                        <div key={qGroup + qGroupIdx}>
                            {qGroup.questions.map((question, questionIdx) => (
                                <div key={question + questionIdx} className="QuestionMargin">
                                    <div className="Question" key={question + questionIdx}>
                                        <span key={question + questionIdx}>{question.text}</span><span className={"Reminder " + (this.state.missing[question.id] ? `${question.id}Reminder` : "")}>*</span>
                                    </div>
                                    <div key={question + questionIdx + "_"}>
                                        {question.options.map((option, opIdx) => (
                                            (question.order === "horizontal")?
                                            <div className="LikertScale" style={{"display": "inline-block"}} key={opIdx}>
                                                <input key={opIdx} type="radio" name={question.id} value={option} onClick={() => this.saveResponseToState(question.id, option)}/>
                                                <label style={{"display": "block"}}>
                                                    {option}
                                                </label>
                                            </div>
                                            :
                                            <div className="LikertScale" style={{"textAlign": "left"}} key={opIdx}>
                                                <input key={opIdx} type="radio" name={question.id} value={option} onClick={() => this.saveResponseToState(question.id, option)}/>
                                                <label style={{"marginLeft": "5px", "marginTop": "0px", "marginBottom": "0px"}}>
                                                    {option}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        <hr/>
                        </div>
                    ))}
                </div>
                <div>
                    <div>
                        <Button variant="secondary" onClick={this.finalizeStage}>Next</Button>
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

export default Demographics;
