function addList(etiqueta, texto) {
  let content = document.createElement(etiqueta);
  content.textContent = texto;
  return content;
}

let array = [];

function agregar() {
  let sec = addList("section", "");
  sec.value = "";
  document.body.appendChild(sec);

  let h4 = addList("h4", "Escribe el nombre de la canción");
  sec.appendChild(h4);

  inp = addList("input", "");
  inp.value = "";
  sec.appendChild(inp);

  let addButton = addList("button", "Agregar");
  sec.appendChild(addButton);

  addButton.addEventListener("click", function (e) {
    e.preventDefault();
    console.log(inp.value);

    let num = 5;
    let valor = inp.value;
    let ran = Math.floor(Math.random() * num + 1);
    array.push(valor, ran);
    inp.value = "";

    console.log(array);
    pendiente;

    for (let i = 0; i < array.length; i++) {
      if (array[i] != valor || array.includes(ran) > num) {
        let p = addList(
          "p",
          "Ya se agragaron las 5 canciones o esta repetida."
        );
        sec.appendChild(p);
      } else {
        console.log("sigue agregando mas canciones");
      }
    }
  });
}

agregar();
