import React    from "react";
import template from "./ChessDesk.jsx";

class ChessDesk extends React.Component {
  render() {
    return template.call(this);
  }
}

export default ChessDesk;
