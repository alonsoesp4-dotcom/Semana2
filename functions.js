function abrir(id){
    document.getElementById("menu").classList.add("oculto");
    document.getElementById(id).classList.remove("oculto");
}

function volver(){
    document.getElementById("menu").classList.remove("oculto");
    document.querySelectorAll(".pantalla").forEach(p=>{
        if(p.id !== "menu") p.classList.add("oculto");
    });
}

/* 3.1 */
function p31(){
    let e=edad.value;
    r31.innerHTML=e>=18?"Puede votar":"No puede votar";
}

/* 3.2 */
function p32(){
    let h=Number(h32.value), p=Number(p32v.value);
    let s=(h>40)?(40*p)+((h-40)*p*2):h*p;
    r32.innerHTML="$"+s;
}

/* 3.3 */
function p33(){
    let d=d33.value;
    r33.innerHTML=d<=10?"Tarjeta":d<=100?"Chocolates":d<=250?"Flores":"Anillo";
}

/* 3.4 */
function p34(){
    let h=Number(h34.value),t=0;
    if(h<=2)t=h*5;
    else if(h<=5)t=10+(h-2)*4;
    else if(h<=10)t=22+(h-5)*3;
    else t=37+(h-10)*2;
    r34.innerHTML="$"+t;
}

/* 3.5 */
function p35(){
    let edades=[e1.value,e2.value,e3.value];
    let nombres=[n1.value,n2.value,n3.value];
    let min=edades[0],nom=nombres[0];
    for(let i=1;i<3;i++){
        if(edades[i]<min){min=edades[i];nom=nombres[i];}
    }
    r35.innerHTML=nom+" "+min;
}

/* 3.6 */
function p36(){
    let p=Number(precio36.value);
    let d=p>=200?0.15:p>100?0.12:0.10;
    r36.innerHTML="$"+(p-(p*d));
}

/* 3.7 */
function p37(){
    let e=edad37.value,p=prom37.value;
    r37.innerHTML=(e>18)?
    (p>=9?2000:p>=7.5?1000:p>=6?500:"Sin beca"):
    (p>=9?3000:p>=8?2000:p>=6?100:"Sin beca");
}

/* 3.8 */
function p38(){
    let s=Number(sueldo38.value),a=Number(ant38.value);
    let b1=a>=5?s*0.3:a>2?s*0.2:0;
    let b2=s>=3500?s*0.1:s>1000?s*0.15:s*0.25;
    r38.innerHTML="Bono:"+Math.max(b1,b2);
}

/* 3.9 */
function p39(){
    let b=Number(base39.value),e=Number(edad39.value);
    let c=b+b*0.1+(e>40?b*0.2:0);
    r39.innerHTML="$"+c;
}

/* 3.10 */
function p310(){
    let d=destino310.value;
    let km=d=="cancun"?1800:d=="acapulco"?1200:d=="pv"?800:750;
    r310.innerHTML="$"+(km*2);
}

/* 3.11 */
function p311(){
    let a=Number(ant311.value);
    r311.innerHTML=a>5?1000:a*100;
}

/* 3.12 */
function p312(){
    let h=Number(h312.value);
    let s=h<=40?h*10:h<=45?400+(h-40)*20:h<=50?500+(h-45)*30:"No permitido";
    r312.innerHTML=s;
}

/* 3.13 */
function p313(){
    let a=Number(alumnos313.value);
    let c=a>100?20:a>=50?35:a>=20?40:70;
    r313.innerHTML="$"+(c*a);
}