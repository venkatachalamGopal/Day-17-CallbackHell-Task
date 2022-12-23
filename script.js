m=document.createElement("div")
m.setAttribute("id","back")
document.body.append(m)

k=document.createElement("div");
k.setAttribute("class","dis")

hell=(a,nu)=>{setTimeout(()=>{ if(a>0){
k.innerHTML=(nu);m.append(k)}; if(a==9){
k.innerHTML=(`<div><span style="color:red">Happy
<span style="color:white">Independence
<span style="color:green">Day</div>`); 
k.setAttribute("class","di")}},a*1000)}


nu=0
give=(data,dat)=>{
if(data>-1)
{
    nu++
//console.log(nu)
}


{
num=data-1
if(num>=0)
{
dat(num,nu)
//console.log(num,nu)
give(num,dat)
}
}

}
give(10,hell)



/*o/p
9
8
7
6
5
4
3
2
1
happy indepandence day*/