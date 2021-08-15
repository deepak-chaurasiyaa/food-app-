async function getData(url) {
  // console.log(url);
  let res = await fetch(url);
  let data = await res.json();
  var s = data.meals;
  //console.log(s);
  var { 0: data1 } = s;
  //console.log(data1);

  return data1;
}

async function appendData(products, parent) {
  let div = document.createElement("div");
  let p = document.createElement("p");
  let img = document.createElement("img");
  img.src = products.strMealThumb;
  p.innerText = products.strArea;
  let p1 = document.createElement("p");
  p1.innerHTML = products.strMeal;
  div.append(img, p, p1);
  parent.append(div);
  //console.log(products, parent);
}

export { getData, appendData };
