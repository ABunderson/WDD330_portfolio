const links = [{
    "label": "Week 1",
    "url": "week1/index.html"
}, {
    "label": "Week 2",
    "url": "week2/index.html"
}, {
    "label": "Week 3",
    "url": "week3/index.html"
}];

for (let i = 0; i < links.length; i++) {
    
    const parent = document.getElementById("index_list");
    let list_item = document.createElement("li");
    let list_link = document.createElement("a");

    parent.appendChild(list_item);
    list_item.appendChild(list_link);
    list_link.href = links[i]['url'];
    list_link.textContent += links[i]['label'];
}