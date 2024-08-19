//get total
//creat product
//save localstorage
//clear inputs
//read
//count
//delete
//update
//search
//clean data





//get total
let title =document.getElementById('title');
let price =document.getElementById('price');
let taxes =document.getElementById('taxes');
let ads =document.getElementById('ads');
let discount =document.getElementById('discount');
let total =document.getElementById('total');
let count =document.getElementById('count');
let category =document.getElementById('category');
let submit =document.getElementById('submit');
let mode ='create';
let tmp;
// console.log(title,price,taxes,ads,discount,total,count,category,submit)
// get total
function getTotal()
{
if(price.value !="")
{
    let result = (+price.value + +taxes.value + 
        +ads.value)-discount.value;
    
    total.innerHTML=result;
    total.style.background='#520000'
}
else{
    total.innerHTML='';
    total.style.background='#3b2d2d'
}
}
//creat product
let datapro ;
if(localStorage.product != null){
    datapro= [JSON.parse(localStorage.product)]
}
else{
    datapro =[];
}

submit.onclick =function(){
    let newpro ={
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads :ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    }
    if(mode === 'create'){
        if(newpro.count >1){
        for(let i=0;i<newpro.count;i++){
            datapro.push(newpro);
        }
    }else{
        datapro.push(newpro);
    }
}else{
    datapro[tmp]=newpro;
    mode ='create';
    submit.innerHTML= "create";
    count.style.display ='block'
}
    // datapro.push(newpro);
    //save localstorade
    localStorage.setItem('product',JSON.stringify(datapro));
    // console.log(datapro)
    cleardata()
    showdata()
}
// clear inputs
function cleardata(){
    title.value ='';
    price.value ='';
    taxes.value='';
    ads.value='';
    discount.value='';
    total.innerHTML='';
    count.value='';
    category.value='';
}

// read
function showdata(){
    getTotal();
    let table ='';
    for(let i=1 ; i<datapro.length ;i++){
        table +=
        `<tr>
            <td>${i}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button onclick="updatedata(${i})" id="update">update</button></td>
            <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
        </tr>`
    }
    document.getElementById('tbody').innerHTML=table;
    let btndelete = document.getElementById('deleteAll')
    if(datapro.length >0){
        btndelete.innerHTML= 
        `<button onclick='deleteAll()'>deleteAll(${datapro.length})</button>`
    }else{
        btndelete.innerHTML='';
    }

}
showdata()

// delete
function deletedata(i){
datapro.splice(i,1);
localStorage.product =JSON.stringify(datapro);
showdata();
}
function deleteAll(){
    localStorage.clear();
    datapro.splice(1);
    showdata();
}

//count 


// update

function updatedata(i){
    title.value =datapro[i].title;
    price.value =datapro[i].price;
    taxes.value =datapro[i].taxead;
    ads.value =datapro[i].ads;
    discount.value =datapro[i].discount;
    getTotal();
    count.style.display ='none';
    category.value =datapro[i].category;
    submit.innerHTML ="update";
    mode ='update';
    tmp =i;
    scroll({
        top:0,
        behavior:'smooth',
    })
}

let searchmode ='title';
function getsearchmode(id){
    let search =document.getElementById('search');
    if(id =='searchTitle'){
        searchmode ='title';
        search.Placeholder='Search By Title';
    }else{
        searchmode ='category';
        search.Placeholder='Search By category';
    }
    search.focus()
}

function searchData(value){
    let table ='';
    if(searchmode ='title'){
        for(let i=0 ;i<datapro.length;i++){
            if(datapro[i].title.includes(value)){
                table+=
`<tr>
            <td>${i}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button onclick="updatedata(${i})" id="update">update</button></td>
            <td><button onclick="deletedata(${i})" id="delete">delete</button></td>
        </tr>`;            }
        }
    }
}









