const links = [ {"label": "Week 1 code", "url": "week1/index.html"}];



for(let i = 0; i < links.length; i++){
    const parent = document.getElementById("index_list");
    var list_item = document.createElement("li");
    var list_link = document.createElement("a");
    parent.appendChild(list_item);
    list_item.appendChild(list_link);
    list_link.href = links[i]['url'];
    list_link.textContent += links[i]['label'];
}