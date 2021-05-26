import './App.css';
import ChessDesk from "./components/ChessDesk/ChessDesk";
import Form from "./components/Form/Form";
import Timer from "./components/Timer/Timer";
import Chart from "./components/Chart/Chart";
import Image from "./components/Image/Image";

function App() {
    return (
        <div className="Page">
            <div>
                <h3 className="header row d-flex justify-content-center mr-auto">
                    This site was created by
                    <a className="link" target="_blank" href="https://github.com/BolotnyaBoss">
                         _Svyatoslav Likhtarchyk
                    </a>
                </h3>
            </div>
            <div className="flex-div ">
                <ChessDesk className="w-100 "/>
            </div>
            <div className="d-flex justify-content-center mr-auto">
                <Timer className="col-3 "/>
            </div>
            <div className="d-flex justify-content-center">
                <Form className=""/>
            </div>
            <div className="flex-div">
                <Image className = "col-3 "/>
            </div>
            <div>
                <Chart className = " row w-25 h-25 mr-5"/>
            </div>
            <div >
                <p className="header row d-flex justify-content-center mr-auto">
                    <a href="https://t.me/bolotnya" target="_blank">
                        © Bolotnya Boss_
                    </a>
                    2021
                </p>
            </div>

        </div>
    );
}

export default App;
