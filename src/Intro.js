import React from 'react';
import Button from 'react-bootstrap/Button';

class Intro extends React.Component {
    render() {
        return (
            <div className="VerticalCenter">
                <div className='Title'>Introduction</div>
                <main>
                    In this survey, we will present you with some situations involving robots and humans. We would like to know what you think about the consequences of their actions.
                    <br/>
                    <strong>We are not looking for the correct answers, but your opinion on the matter.</strong>
                    <p className="Question Spotlight">Please, read all the information provided in this survey carefully.</p>
                    <div>
                        <hr/>
                        <div className="Subtitle">Record of Consent</div>
                        This research aims to understand how people perceive the consequences of the actions of artificial intelligence systems and their human counterparts. This experiment is composed of an online survey that takes less than 20 minutes to complete. Your responses will be used for research purposes only. Your responses may be shared with other researchers; all information, however, will be anonymized and allow no inference on any particular individual.
                        Results will be published only as aggregate statistics, allowing no inference on any particular individual. Your participation is voluntary, and you may withdraw from the study at any time without any penalty. To withdraw, simply close your browser.
                        <div className="Spotlight RedSpotlight Subtitle">
                            Participants who complete the survey will receive financial compensation as an incentive. <br/>
                            <span style={(this.props.Preview)? {"display": "none"} : {}}>
                                If you answer the questions in this survey too quickly (e.g., less than a second per question) without reading, your response will be discarded. Please read the survey carefully.
                            </span>
                        </div>
                        <br/>
                        Please contact the research administrator (ibs.dscig@gmail.com) if you have any questions. Thank you!
                        <br/>
                        <span className="Question">Clicking <span className="Spotlight">next</span> below indicates that you have understood the information and consent to your participation.</span>
                    </div>
                    <hr/>
                </main>
                <div>
                    <Button variant="secondary" onClick={this.props.skipStage}>Next</Button>
                </div>
            </div>
        )
    }
}

export default Intro;
