import React from 'react';
class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            minutes: 0,
            seconds: 0,
            timer_id: null
        };
        this.setSeconds = this.setSeconds.bind(this);
        this.setMinutes = this.setMinutes.bind(this);
        this.UpdateTimer = this.UpdateTimer.bind(this);
        this.StartTimer = this.StartTimer.bind(this);
    }

    setSeconds(num){
        this.setState({
            seconds: num
        });
    }
    setMinutes(num){
        this.setState({
            minutes: num
        });
    }
    UpdateTimer(){
        let seconds = this.state.seconds;
        seconds--;
        this.setSeconds(seconds);
        if(this.state.seconds < 0){
            let minutes = this.state.minutes;
            minutes--;
            this.setMinutes(minutes);
            this.setSeconds(59);
            if(this.state.minutes < 0){
                this.setSeconds(0);
                this.setMinutes(0);
                clearInterval(this.state.timer_id);
                this.setState({
                    timer_id: null
                });
            }
        }
    }
    StartTimer(){
        if(this.state.timer_id !== null){
            clearInterval(this.state.timer_id);
            this.setState({
                timer_id: null
            });
        }
        const minutes = 0
        const seconds = 10
        this.setSeconds(seconds);
        this.setMinutes(minutes);
        let id = setInterval(this.UpdateTimer, 1000);
        this.setState({
            timer_id: id
        });
    }

    render() {
        return (
            <div className="timer d-flex justify-content-center">
                <div id="start">
                    <div className="d-flex justify-content-center">
                    <button onClick={() => this.StartTimer()}>Start</button>
                    </div>
                    <div className="d-flex justify-content-center">
                    <span id="time" style={{color: 'black',fontSize : "200%"}}>{this.state.minutes} : {this.state.seconds}</span>
                    </div>
                    </div>
            </div>
        );
    }
}

export default Timer;
