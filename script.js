var heading = document.createElement("h1");
heading.innerHTML = "Promise Task 3";
var p = document.createElement("p");
p.innerHTML = "This is task for fetching the Fake store rest API for your e-commerce and displaying the content using promise async and await"
var container = document.createElement("div");
container.className = "container";
var row = document.createElement("div");
row.className = "row";


async function foo() {
    try {
        var data = await fetch("https://fakestoreapi.com/products")
        console.log(data)
        var result = await data.json()
        console.log(result);
        result.forEach((res) => {
            var col = document.createElement("div");
            col.className = "col-lg-4 col-sm-12 "
            col.innerHTML = ` <div class="card" style="width: 18rem;">
        
           <div class="card-header "><h5>ID : ${res.id
           }</h5></div>
           <div class="card-body">
           <img src="${res.image}" class="card-img-top" alt="Image Not Available" style="height: 12rem;">
           <p class="card-text" style="color: black;">${res.title}</p>
           <p class="card-text" style="color: black;">Rating : ${res.rating.rate}</p>
           <h5 class="card-text" >Price : ${res.price}rs</h5>
            </div>
        </div>`
            row.appendChild(col);
        })
    }
    catch (err) {
        console.log("Error");
    }
}
foo()
container.append(row);
document.body.append(heading, p, container);