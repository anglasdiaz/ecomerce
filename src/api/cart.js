
let newItem=[];
export function setItemLocalStorage(index,item){
    
    newItem.push(item)
    localStorage.setItem(index,JSON.stringify(newItem));
}
export function getItemLocalStorage(){
    
}