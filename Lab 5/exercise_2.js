var login = prompt("Are you a faculty or a student");


function Normal(){
  let msg = '';
  if (login == 'student') {
  msg = 'Hi';
  }
  else if (login == 'faculty') {
  msg = 'Greetings';
  } else if (login == '') {
  msg = 'No login';
  }
  else {
  msg = '';
  }
  return msg;
}

function terinary_operator(){
  let msg = ''
  return ((login == 'student' ? msg = 'Hi': msg = '' )||(login == 'faculty' ? msg = 'Greetings':msg = '') || (login == '' ? msg = "No login": msg = ''))

}


let msg1 = Normal();
// let msg1 = terinary_operator()

console.log(msg1);
