window.onload=function(){
let examGrade=prompt("notunuzu giriniz:")
let textInfo;
if(examGrade>0 && examGrade<=100)
{
    if(examGrade>=90)
    {
        textInfo="Tebrikler AA İle geçtiniz"
    }
    else if(examGrade>=85)
    {
        textInfo="tebrikler BA ile geçtiniz"
    }
    else if(examGrade>=80)
    {
        textInfo="tebrikler BB ile geçtiniz"
    }
    else if(examGrade>=75)
    {
        textInfo="tebrikler CB ile geçtiniz"
    }
    else if(examGrade>=70)
    {
        textInfo="tebrikler CC ile geçtiniz"
    }
    else if(examGrade>=65)
    {
        textInfo="tebrikler DC ile geçtiniz"
    }
    else if(examGrade>=60)
    {
        textInfo="tebrikler DD ile geçtiniz"
    }
    else if(examGrade>=50)
    {
        textInfo="tebrikler FD ile geçtiniz"
    }
    else
    {
        textInfo="Üzgünüm Malesef Kaldınız"
    }
}
else
{
    textInfo="lütfen 0-100 aralığında bir sayı giriniz"
}
let info=document.querySelector("#info");
info.innerHTML=`${textInfo}`
}