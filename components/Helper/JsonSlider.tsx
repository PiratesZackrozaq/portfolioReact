import React from 'react';
import $ from 'jquery';

const JsonSlider = () => {

    $.ajax('https://randomuser.me/api/?results=5', function (data) {
        displayJSON(data);
    });

    function displayJSON(jsonObject) {
        let jsonContainer = 
                document.getElementById('json-container');
        let pre = document.createElement('pre');
        pre.textContent = JSON.stringify(jsonObject, null, 2);
        jsonContainer.appendChild(pre);
    }
  return (
    <div id='json-container'></div>
  )
}

export default JsonSlider