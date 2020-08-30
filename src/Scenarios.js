import React from 'react';
import Button from 'react-bootstrap/Button';
import QuestionsScenario from './QuestionsScenario.js';
import { introParagraph } from './Data.js';

class Scenarios extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            stages: ["intro", "scenarios"],
            curr_stage_id: 0,
        }
        this.skipIntro = this.skipIntro.bind(this);
    }

    skipIntro() {
        this.setState({curr_stage_id: this.state.curr_stage_id + 1});
        this.props.saveTime("Scenarios_intro_end");
    }

    render() {
        var stage = this.state.stages[this.state.curr_stage_id];
        let content;
        if (stage === "intro") {
            content = <div className='Subtitle'>
                            {introParagraph[this.props.agent][0]}
                            <br/>
                            {introParagraph[this.props.agent][1]}
                            <br/>
                            <div className="RedSpotlight">
                            {introParagraph[this.props.agent][2]}
                            </div>

                            <hr/>
                        <div>
                            <Button variant="secondary" onClick={this.skipIntro}>Next</Button>
                        </div>
                    </div>
        } else {
            content = <QuestionsScenario saveTime={this.props.saveTime} agent={this.props.agent} scenario={this.props.scenario} skipStage={this.props.skipStage} saveDictToState={this.props.saveDictToState}/>
        }
        return (
            <div>
                {content}
            </div>
        );
    }
}

export default Scenarios
