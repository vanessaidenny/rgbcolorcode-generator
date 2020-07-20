let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.strokeStyle = 'black';

//head
pincel.fillStyle = 'darkgreen';
pincel.fillRect(40, 15, 115, 100);
pincel.strokeRect(40, 15, 115, 100);
//body
pincel.fillRect(65, 115, 65, 50);
pincel.strokeRect(65, 115, 65, 50);
//feet
pincel.fillRect(50, 145, 50, 50);
pincel.strokeRect(50, 145, 50, 50);
pincel.fillRect(100, 145, 45, 50);
pincel.strokeRect(100, 145, 45, 50);
//eyes
pincel.fillStyle = 'black';
pincel.fillRect(55, 35, 30, 30);
pincel.strokeRect(55, 35, 30, 30);
pincel.fillRect(110, 35, 30, 30);
pincel.strokeRect(110, 35, 30, 30);
//nose
pincel.fillRect(85, 65, 25, 30);
pincel.strokeRect(85, 65, 25, 30);
//mouth
pincel.fillRect(110, 80, 10, 35);
pincel.strokeRect(110, 80, 10, 35);
pincel.fillRect(75, 80, 10, 35);
pincel.strokeRect(75, 80, 10, 35);
