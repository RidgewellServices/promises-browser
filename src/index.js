import Hello from './hello.js';

var sayHello = function () {
  return Hello.hello();
}

document.getElementById('msgBtn').addEventListener('click', function () {
    var message = sayHello();
    document.getElementById("message").innerHTML = message;
});
