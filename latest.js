async function getData(url) {
  //console.log(url);
  let res = await fetch(url);
  let data = await res.json();
  let { categories } = data;
  //console.log(categories);

  return categories;
}

async function appendData(products, parent) {
  products.forEach((element) => {
    let div = document.createElement("div");
    let p = document.createElement("p");
    let img = document.createElement("img");
    img.src = element.strCategoryThumb;
    p.innerText = element.strCategory;
    //   let p1 = document.createElement("p");
    //   p1.innerHTML = products.strMeal;
    div.append(img, p);
    parent.append(div);
    //console.log(products, parent);
  });
}

export { getData, appendData };
