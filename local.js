let data=[];
const addBtn=document.getElementById("addBtn").addEventListener("click",info);
const clear=document.getElementById("clear")
function info(){
    const itemValue=document.getElementById("itemValue");
    const itemText=itemValue.value;
    const amount=document.getElementById("amount");
    const amountText=amount.value;

    if(itemValue.value.trim()!=0 && !isNaN(amountText)){
    let random=Math.floor(Math.random()*1000000)+"";
    let date=new Date();
    let getDate=date.getDate();
    let getMonth=date.getMonth()+1;
    let getYear=date.getFullYear();
    let storeData={itemText,random,getDate,getMonth,getYear,amountText};
    let allData=[]
    if(localStorage.getItem("all")){
        allData=JSON.parse(localStorage.getItem("all"))
    }
    allData.push(storeData);
    data.push(storeData)
    localStorage.setItem("all",JSON.stringify(allData))
    }
    else{
        alert("information not found!!!")
    }
    showItem()
    itemValue.value="";
    amount.value="";
}

function showItem(){
    let sum=0;
    let show=""
    const local=JSON.parse(localStorage.getItem("all"));
    const showParent=document.getElementById("showParent")
    showParent.innerHTML="";
    for(let i=0;i<local.length;i++){
        const {itemText,random,getDate,getMonth,getYear,amountText}=local[i];
        show +=`
    <div class="bg-gray-200 font-semibold text-lg py-3 px-5 m-3 text-black flex items-center justify-between flex-col md:flex-row">
        <div class="item w-full">
            <p class="text-sm hidden md:block">${i}.</p>
            <p>${itemText}</p>
            <p><span id="taka">${amountText}</span>/=</p>
            <p class="text-sm text-gray-600">${getDate}/${getMonth}/${getYear}</p>
            <button onclick="deleteItem('${random}')"><i class="fa-regular fa-trash-can     text-red-600 hover:text-red-700"></i></button>
        </div>
    </div>
    `
    showParent.innerHTML=show;
    sum=sum+parseInt(amountText);
    let total=document.getElementById("totalParent");
    const taka=document.getElementById("taka");
    const takaText=taka.innerText;
    const takaConvert=parseInt(takaText);
    const totalBtn=document.getElementById("totalBtn");
    totalBtn.onclick=()=>{
    total.innerHTML+=`
    <div id="takaHidden">
    <h1 class="text-white font-bold text-2xl">${sum} tk</h1>
    </div>
    `;
    const takaHidden=document.getElementById("takaHidden");
    takaHidden.classList.toggle("moneyBox")
    }
    }
    
}

const deleteItem=(random)=>{
    const local=JSON.parse(localStorage.getItem("all"));
    const searchDelete= local.filter(item=>item.random!=random);
    localStorage.setItem("all",JSON.stringify(searchDelete))
    location.reload()
    showItem()
}

const clearBtn=()=>{
   const check= confirm("are you sure?");
   if(check){
    localStorage.clear();
    location.reload()
   }
    showItem();
}
showItem();