// setInterval(add,6000)
//     function add(){
//         document.getElementById('add').style.display='block'
//         document.getElementById('skip').style.display='block'
//     }
removeadd = () => {
    document.getElementById('add').style.display = 'none';
    document.getElementById('skip').style.display = 'none';
}
setTimeout(add, 6000)
function add() {
    document.getElementById('add').style.display = 'block';
    document.getElementById('skip').style.display = 'block';
}
signin = () => {
    document.getElementById('box1').style.display = "block";
}
close = () => {
    document.getElementById('box').style.display="none";
}
go = () => {
    document.getElementById('box1').style.display = "none";
    document.getElementById('box').style.display = 'block';

}

var username, password, password1;
var regusername;
var userobj;
var regpassword;
var passwordobj;
sign = () => {
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
    password1 = document.getElementById('password1').value;
    if (username == '') {
        alert('Enter user name')
        return false
    }
    if (password == password1 && password != '') {
        document.getElementById('box1').style.display = "none"
        document.getElementById('box').style.display = 'block'
    }
    else {
        alert('please check your conform password.Password must be same')
    }
    regusername = { uname: username };
    // userobj = JSON.stringify(regusername);
    localStorage.setItem('regusername', regusername.uname);

    regpassword = { password: password };
    // passwordobj = JSON.stringify(regpassword);
    localStorage.setItem('regpassword', regpassword.password);
}
letsgo = () => {
    var getuser = localStorage.getItem('regusername');
    var getpassword = localStorage.getItem('regpassword');
    var name ,pass;
    name=document.getElementById('name').value;
    pass=document.getElementById('pass').value
    if (getuser == name && getpassword == pass) {
        document.getElementById('title').innerHTML ="welcome  "+ name;
        document.getElementById('box').style.display="none"

    } 
    else {
        alert('invalid username & password or create a account')
    }
}
var a = 1
show = () => {
    if (a == 1) {
        document.getElementById('password').type = "text";
        document.getElementById('password1').type = "text";
        document.getElementById('show').style.backgroundColor = "blue";

        a = 0;
    }
    else {
        document.getElementById('password').type = "password";
        document.getElementById('password1').type = "password";
        document.getElementById('show').style.backgroundColor = "white";
        a = 1;
    }
}
var b = 1
function aaaa() {
    if (b == 1) {
        document.getElementById('pass').type = "text";
        document.getElementById('show1').style.backgroundColor = "blue";
        b = 0;
    }
    else {
        document.getElementById('pass').type = "password";
        document.getElementById('show').style.backgroundColor = "white";
        b = 1
    }
}
function  addtocart(imagePath){
    const listItem = document.createElement('li');
    const image = document.createElement('img');
    const button=document.createElement('button')

    let conform="conform"
    image.src = imagePath;
    image.alt = 'something went worng';
    button.value=conform;
    listItem.appendChild(image);
    listItem.appendChild(button);
    document.getElementById('cart-items').appendChild(listItem);
}