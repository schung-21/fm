var request = new XMLHttpRequest();
request.open('GET', 'https://api.adviceslip.com/advice', true);

request.onload = function() {
    var data = JSON.parse(this.response);

    document.getElementById('number').innerHTML = data['slip']['id'];
    document.getElementById('advice').innerHTML = '“' + data['slip']['advice'] + '”';
};

request.send();