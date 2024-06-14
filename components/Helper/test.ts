import $ from 'jquery';

export function change() {
    let request = $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function (data) {
            console.log(data);
        }
    });
}