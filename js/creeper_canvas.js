let tela = document.querySelector('canvas');
let pincel = tela.getContext('2d');

pincel.strokeStyle = 'black';

//head
pincel.fillStyle = 'darkgreen';
pincel.fillRect(70, 15, 115, 100);
pincel.strokeRect(70, 15, 115, 100);
//body
pincel.fillRect(95, 115, 65, 50);
pincel.strokeRect(95, 115, 65, 50);
//feet
pincel.fillRect(80, 145, 50, 50);
pincel.strokeRect(80, 145, 50, 50);
pincel.fillRect(130, 145, 45, 50);
pincel.strokeRect(130, 145, 45, 50);
//eyes
pincel.fillStyle = 'black';
pincel.fillRect(85, 35, 30, 30);
pincel.strokeRect(85, 35, 30, 30);
pincel.fillRect(140, 35, 30, 30);
pincel.strokeRect(140, 35, 30, 30);
//nose
pincel.fillRect(115, 65, 25, 30);
pincel.strokeRect(115, 65, 25, 30);
//mouth
pincel.fillRect(140, 80, 10, 35);
pincel.strokeRect(140, 80, 10, 35);
pincel.fillRect(105, 80, 10, 35);
pincel.strokeRect(105, 80, 10, 35);
