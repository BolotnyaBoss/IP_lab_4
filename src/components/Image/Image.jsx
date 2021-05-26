import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
function template() {
    function componentDidMount(){
        $.ajax({
            type: "GET",
            url: "https://random.dog/woof.json?ref=apilist.fun",
            success: function(data) {
                $('#image').attr('src', data.url);
            }
        });
    }
  return (
    <div className="">


        <div className="d-flex justify-content-center h-50px w-50px">
            <img className="avatar img-responsive " id="image" alt="random picture"/>
        </div>
        <div className="d-flex justify-content-center">
            <button onClick={componentDidMount} >Get image</button>
        </div>
    </div>
  );
};
export default template;
