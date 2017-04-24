import Hello from './hello.js';

const sayHello = (message) => {
document.getElementById("message").innerHTML = message;
};

document.getElementById('msgBtn').addEventListener('click', () => {
Hello.hello()
.then(res => sayHello(res));
});
