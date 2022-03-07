var user,paswod,hak;
hak=3
while(hak>0){
user=prompt("kullanıcı ismi");
paswod=Number(prompt("şifre"));
if(user=="ibo",paswod=="123"){
document.write("Hoşgeldin <br>"+user)
break;
}
else{
    hak--;
}
if(user=="sinem",paswod=="9090"){
    document.write("Hoşgeldin <br>"+user)
    break;
    }
    if(user=="mustafa",paswod=="0"){
        document.write("Hoşgeldin <br>"+user)
        break;
        }
if(hak==0){
document.write(user+"<br>"+"Adlı Kullanıcı bloke oldu");
}
}