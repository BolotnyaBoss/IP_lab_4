import React from "react";

import "./Form.css"
function template() {
  return (
    <div className="form d-flex justify-content-center">
      <form className="main_form">
        <label className="label"><a className="link " style={{ fontSize : "200%"}} target="_blank"
                                    href="https://www.chess.com/learn-how-to-play-chess">Here are game rules</a></label>
        <br/>
        <label className="label" htmlFor="username">Username:</label>
        <br/>
        <input type="text" name="username" id="username"/>
        <br/>
        <label className="label" htmlFor="email">Email:</label>
        <br/>
        <input type="email" id="email" name="email"/>
        <br/>
        <label className="label" htmlFor="user-pw">Password:</label>
        <br/>
        <input type="password" name="user-pw" id="user-pw"/>
        <br/>
        <label className="label" htmlFor="age">Your age:</label>
        <br/>
        <input id="age" name="age" type="number" min="0" step="1"/>
        <br/>
        <label className="label" htmlFor="country">Choose your country:</label>
        <br/>
        <input type="text" list="countries" id="country" name="country" autoComplete="on"/>
        <datalist id="countries">
          <option value="Ukraine"/>
          <option value="Poland"/>
          <option value="Germany"/>
          <option value="Other"/>
        </datalist>
        <br/>
        <label className="label" htmlFor="volume">Choose difficultly:</label>
        <br/>
        <span>easy</span>
        <input id="volume" name="difficulty" type="range" min="0" max="10" step="1"/>
        <span>expert</span>
        <br/>
        <label className="label" htmlFor="comment">Comments:</label>
        <br/>
        <textarea rows="2" cols="40" id="comment" name="comment" placeholder="Enter here your comment">
        </textarea>
        <br/>
        <input className="button_1" id="subm" type="submit" value="Submit data"/>
        <input className="button" type="reset" value="Reset data"/>
        <br/>
        <button className="button" onClick={Hello}>Print Hello</button>
      </form>
    </div>
  );
}
function Hello() {
  (document.getElementById("username").value === "") ? alert('Please, enter your username') : alert('Hello ' + document.getElementById("username").value + '!!!');
}

export default template;
