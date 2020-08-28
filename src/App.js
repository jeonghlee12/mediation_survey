import React from 'react';
import logo from './logo.svg';
import './App.css';
import { treatGroups, scenarios, getRandomItem } from './Data.js'
import Intro from './Intro.js';
import Scenarios from './Scenarios.js'
// import Demographics from './Demographics.js';
import Button from 'react-bootstrap/Button';
import publicIP from 'react-native-public-ip';
import firebase from 'firebase';
import config from './config';

class App extends React.Component {
    constructor(props) {
        super(props)
        const queryString = require('query-string');
        const shuffle = require('shuffle-array');
        const randomTreat = getRandomItem(treatGroups);
        const params = queryString.parse(this.props.location.search);
        this.state = {
            time: {"init": new Date()},
            // assignmentId: params.assignmentId,
            // hitId: params.hitId,
            // turkSubmitTo: params.turkSubmitTo,
            // workerId: params.workerId,
            prolificId: params.PROLIFIC_PID,
            agent: randomTreat.agent,
            scenarioOrder: shuffle(scenarios),
            stages: ["intro", "scenario", "demographics", "end"],
            curr_stage_id: 0,
            responses: {}
        }
        this.saveDictToState = this.saveDictToState.bind(this);
        this.skipStage = this.skipStage.bind(this);
        this.createForm = this.createForm.bind(this);
        this.saveTime = this.saveTime.bind(this);
        this.saveToFirebase = this.saveToFirebase.bind(this);
        this.redirectToSurveyCompletion = this.redirectToSurveyCompletion.bind(this);

        firebase.initializeApp(config);
    }

    saveToFirebase() {
        var allResponses = this.state.responses;
        allResponses.scenario = this.state.scenario;
        allResponses.agent = this.state.agent;
        allResponses.prolificId = this.state.prolificId;
        const times = this.state.time;
        for (var keyTime in times) {
            allResponses[keyTime] = times[keyTime];
        }
        firebase.database().ref("/" + this.state.prolificId).set(allResponses).catch(error => console.log(error)).then(() => this.redirectToSurveyCompletion());
        // this.redirectToSurveyCompletion();
    }

    componentDidMount() {
        publicIP().then(ip => this.setState({responses: {ip: ip}})).catch(this.setState({responses: {ip: null}}));
    }

    saveDictToState(dict) {
        var responsesTmp = this.state.responses;
        for (var key in dict) {
            responsesTmp[key] = dict[key];
        }
        this.setState({responses: responsesTmp});
    }

    skipStage() {
        this.setState({curr_stage_id: this.state.curr_stage_id + 1});
        this.saveTime("Stage_" + this.state.curr_stage_id + "_end");
    }

    saveTime(nameTime) {
        const delta_time = new Date() - this.state.time["init"];
        this.setState({time: {...this.state.time, [nameTime]: delta_time}});
    }

    createForm() {
        var content = [];
        var allResponses = this.state.responses;
        allResponses.scenario = this.state.scenario;
        allResponses.agent = this.state.agent;
        allResponses.assignmentId = this.state.assignmentId;
        const times = this.state.time;
        for (var keyTime in times) {
            allResponses[keyTime] = times[keyTime];
        }
        // this.state.time.forEach((time, timeIdx) => {
        //     allResponses["time" + timeIdx] = time;
        // });
        var i = 0;
        for (var key in allResponses) {
            content = [...content, <input type="hidden" name={key} value={allResponses[key]} key={key + i}/>];
            i++;
        }
        return content;
    }

    redirectToSurveyCompletion() {
        let path = //'https://app.prolific.co/submissions/complete?cc=5D1B9B70';
        window.open(path, "_self");
    }

    render() {
        var stage = this.state.stages[this.state.curr_stage_id];
        let content;
        if (this.state.assignmentId === "ASSIGNMENT_ID_NOT_AVAILABLE") {
            //content = this.createForm();
            content = <Intro skipStage={() => {return true}} Preview={this.state.assignmentId === "ASSIGNMENT_ID_NOT_AVAILABLE"}/>;
        } else {
            if (stage === "intro") {
                content = <Intro skipStage={this.skipStage} Preview={this.state.assignmentId === "ASSIGNMENT_ID_NOT_AVAILABLE"}/>;
            } else if (stage === "scenario") {
                content = <Scenarios agent={this.state.agent} scenarioOrder={this.state.scenarioOrder} skipStage={this.skipStage} saveDictToState={this.saveDictToState} saveTime={this.saveTime}/>;
            // } else if(stage === "demographics") {
            //     content = <Demographics skipStage={this.skipStage} saveDictToState={this.saveDictToState}/>
            } else if (stage === "end") {
                content = <div>
                            <div className="Title">Thank you for participating in our survey!</div>
                            <div className="Subtitle">
                                Please be informed that all people and scenarios presented in this survey were adapted from real cases. <br/>
                                If you have any questions, feel free to contact us at ibs.dscig@gmail.com .
                                <hr/>
                            </div>
                            <div className="QuestionMargin">
                                <span className="Title Spotlight RedSpotlight">Click on the button below to complete the survey.</span>
                                <div className="QuestionMargin">
                                    {/* <form action={this.state.turkSubmitTo + "/mturk/externalSubmit"} method="post">
                                        {this.createForm()}
                                        <Button variant="secondary" as="input" type="submit" key="submitButton" value="Get Reward"/>
                                    </form> */
                                    <Button variant="secondary" onClick={this.saveToFirebase}>Complete Survey</Button>}
                                </div>
                            </div>
                          </div>;
            } else {
                content = <h1>How did you get here?</h1>
            }
        }
        return (
            <div className="App">
                {content}
            </div>
        )
    }
}
export default App;
