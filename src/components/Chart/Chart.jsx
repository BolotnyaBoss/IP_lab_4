import React from "react";
import {Pie, Doughnut} from 'react-chartjs-2';
const state = {
    labels: ['Pawn', 'Bishop', 'Knight', 'Rook', 'Queen', 'King'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: [
                'rgba(62, 126, 126, 0.75)',
                'rgba(48, 161, 142, 0.75)',
                'rgba(38, 171, 191, 0.75)',
                'rgba(76, 192, 224, 0.75)',
                'rgba(12, 101, 153, 0.75)',
                'rgba(47, 214, 172, 0.75)',
            ],
            data: [11, 1, 2, 4, 2, 2]
        }
    ]
}
function template() {
  return (
      <div className="flex-div">
          <Pie
              data={state}
              options={{
                  title:{
                      display:true,
                      text:'Chess figure on board',
                      fontSize:16
                  },
                  legend:{
                      display:true,
                      position:'top'
                  }
              }}
          />
      </div>
  );
};

export default template;
