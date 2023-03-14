const addBtn=document.getElementById("addBtn").addEventListener("click",info);
const clear=document.getElementById("clear")
function info(){
    const itemValue=document.getElementById("itemValue");
    const itemText=itemValue.value;
    if(itemValue.value.trim()!=0){
    let random=Math.floor(Math.random()*1000000)+"";
    let storeData={itemText,random};
    let allData=[]
    if(localStorage.getItem("all")){
        allData=JSON.parse(localStorage.getItem("all"))
    }
    allData.push(storeData);
    
    localStorage.setItem("all",JSON.stringify(allData))
    }else{
        alert("information not found!!!")
    }
    showItem()
    itemValue.value=""
}

function showItem(){
    let show=""
    const local=JSON.parse(localStorage.getItem("all"));
    const showParent=document.getElementById("showParent")
    showParent.innerHTML="";
    for(let i=0;i<local.length;i++){
        const {itemText,random}=local[i]
        show +=`
    <div class="bg-gray-200 font-semibold text-lg py-3 px-5 m-3 text-black flex items-center justify-between">
        <p class="text-sm">${i}/</p>
        <p class="text-sm">${itemText}</p>
        <p class="text-sm text-gray-600">${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}</p>
        <p class="text-gray-500 text-base">Pin : ${random}</p>
        <button onclick="deleteItem('${random}')"><i class="fa-regular fa-trash-can text-red-600 hover:text-red-700"></i></button>
    </div>
    `
    showParent.innerHTML=show;
    }
}

const deleteItem=(random)=>{
    const local=JSON.parse(localStorage.getItem("all"));
    const searchDelete= local.filter(item=>item.random!=random);
    localStorage.setItem("all",JSON.stringify(searchDelete))
    showItem()
}

const clearBtn=()=>{
   const check= confirm("are you sure?");
   if(check){
    localStorage.clear();
   }
    showItem();
}
showItem();