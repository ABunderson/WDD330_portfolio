const links = [ {label: "Week1 code", url: "week1/index.html"}];

//var parent = document.getElementById("index_list")
//const list_item = document.createElement("li")
//parent.appendChild(list_item);

for(let week = 0; week < links.length; week++){
    for(let item = 0; item < links[week].length; item++){
        console.log(links[week][item])
    }

}