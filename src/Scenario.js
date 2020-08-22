import React from 'react';
import Button from 'react-bootstrap/Button';
import QuestionsScenario from './QuestionsScenario.js';
import { introParagraph, agentQTypes, actionQTypes } from './Data.js';

class Scenario extends React.Component {
    constructor(props) {
        super(props)
        const shuffle = require('shuffle-array');
        this.state = {
            questions: {
                        "agent": shuffle(agentQTypes),
                        "action": shuffle(actionQTypes)
                    },
            stages: ["intro", "scenarios"],
            curr_stage_id: 0,
            init_time: null,
        }
        this.skipIntro = this.skipIntro.bind(this);
        this.skipStage = this.skipStage.bind(this);
    }

    componentDidMount() {
        this.setState({init_time: new Date()});
    }

    skipIntro() {
        //const delta_time = (new Date() - this.state.init_time) / 1000;
        //console.log(delta_time);

        const delta_time = 5;

        if (delta_time < 4) {
            alert("Please take some more time to carefully read the statement.");
        } else {
            this.setState({curr_stage_id: this.state.curr_stage_id + 1});
            this.props.saveTime("ScenarioIntro_end");
            this.setState({init_time: new Date()});
        }
    }

    skipStage() {
        this.setState({curr_stage_id: this.state.curr_stage_id + 1});
        this.props.saveTime("Scenario" + this.state.curr_stage_id + "_end");
    }

    render() {
        var stage = this.state.stages[this.state.curr_stage_id];
        let content;
        if (stage === "intro") {
            content = <div className='VerticalCenter'>
                        <main>
                            {introParagraph[this.props.agent]}
                            <hr/>
                        </main>
                        <div>
                            <Button variant="secondary" onClick={this.skipIntro}>Next</Button>
                        </div>
                    </div>
        } else {
            content = <QuestionsScenario saveTime={this.props.saveTime} agent={this.props.agent} scenario={this.props.scenarioOrder} questions={this.state.questions} skipStage={this.skipStage} saveDictToState={this.props.saveDictToState}/>
        }
        return (
            <div>
                {content}
            </div>
        );
    }
}

export default Scenario
