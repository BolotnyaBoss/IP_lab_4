import React from "react";
import "./ChessDesk.css"
function template() {
  return (
    <div className="chess-desk d-flex justify-content-center">
        <table className="chess">
            <tbody>
            <tr>
                <td>
                    <div className='up'>8</div>
                    <img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png"
                         alt="Black-1"/>
                </td>
                <td></td>
                <td><img className="image1"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png"
                         alt="Black-3"/></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bk.png"
                         alt="Black-8"/></td>
            </tr>
            <tr>

                <td>
                    <div className='up'>7</div>
                </td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bq.png"
                         alt="Black-10"/></td>
                <td></td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bn.png"
                         alt="Black-12"/></td>
                <td></td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
                         alt="Black-14"/></td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/br.png"
                         alt="Black-15"/></td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
                         alt="Black-16"/></td>
            </tr>
            <tr>

                <td>
                    <div className='up'>6</div>
                    <img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
                         alt="Black-17"/>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
                         alt="Black-21"/></td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wn.png"
                         alt="Black-22"/></td>
                <td></td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wq.png"
                         alt="Black-24"/></td>
            </tr>
            <tr>

                <td>
                    <div className='up'>5</div>
                </td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bp.png"
                         alt="Black-26"/></td>
                <td></td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/bb.png"
                         alt="Black-28"/></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>

                <td>
                    <div className='up'>4</div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png"
                         alt="Black-39"/></td>
                <td></td>
            </tr>
            <tr>

                <td>
                    <div className='up'>3</div>
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
                         alt="Black-47"/></td>
                <td></td>
            </tr>
            <tr>

                <td>
                    <div className='up'>2</div>
                    <img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
                         alt="Black-49"/>
                </td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
                         alt="Black-50"/></td>
                <td></td>
                <td></td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
                         alt="Black-53"/></td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
                         alt="Black-54"/></td>
                <td></td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wp.png"
                         alt="Black-56"/></td>
            </tr>
            <tr>

                <td>
                    <div className='up'>1</div>
                    <div className='bottom'>a</div>
                </td>
                <td>
                    <div className='bottom'>b</div>
                </td>
                <td>
                    <div className='bottom'>c</div>
                </td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wr.png"
                         alt="Black-60"/>
                    <div className='bottom'>d</div>
                </td>
                <td>
                    <div className='bottom'>e</div>
                </td>
                <td>
                    <div className='bottom'>f</div>
                </td>
                <td><img className="image"
                         src="https://images.chesscomfiles.com/chess-themes/pieces/neo/150/wk.png"
                         alt="Black-63"/>
                    <div className='bottom'>g</div>
                </td>
                <td>
                    <div className='bottom'>h</div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
  );
};

export default template;
