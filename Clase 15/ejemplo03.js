//selecione los elementos en este caso li que tenian la clase item (6)

const items = document.getElementsByClassName('item')

 //for > 

for(let i = 0; i < items.length; i++){
    items[i].style = 'color:blue; padding-left: ' + (10*i) + 'px';
}