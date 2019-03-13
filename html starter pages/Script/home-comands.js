let btn1 = document.getElementById('btn1');
console.log(btn1)
btn1.textContent = 'Read Moore';

//Padding no conteudo prinncipal da pagina:




let demo = document.querySelector('#demo');
console.log(demo);

console.log('minha pagina')


demo.style.display = 'none';









function btn2 (){  
   
    
    if( btn1.textContent == 'Read Moore'){
        btn1.innerHTML= 'Read Less';
        demo.style.display = 'block';

    }else {
        console.log('read less')
        btn1.innerHTML= 'Read Moore';
        demo.style.display = 'none';


    }
    
    
    
}











