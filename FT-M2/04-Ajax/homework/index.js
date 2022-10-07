$("#boton").click(() => {
  let list = $("#lista");
  $.get("http://localhost:5000/amigos", (response) => {
    for (let usuario of response) {
      list.append($(`<li>${usuario.name}</li>`));
    }
  });
});

$("#search").click(() => {
  let id = $("#input")[0].value;
  $.get(`http://localhost:5000/amigos/${id}`, (response) => {
    $(`<div>

    <h1 id="${response.name}">${response.name}</h1>
    
</div>`).appendTo("#amigo");
  });
});

$("#delete").click(() => {
  let id = $("#inputDelete")[0].value;
  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    type: "DELETE",
    success: function () {
      alert("Eliminaste a tu amix :(");
    },
  });
});
