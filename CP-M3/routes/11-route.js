const router = require("express").Router();
const takeBook = require("../controllers/05-controller");
// No modificar arriba de esta línea

/*
  1️⃣1️⃣ ***EJERCICIO 11*** GET /book/:id 1️⃣1️⃣
      ❕ CONSIGNA ❕
    1 - Integrar la función takeBook que desarrollaste previamente para solicitar un libro
    2 - Responder con el resultado de la operación
    3 Si algo falla al crear el producto, debes responder con el mensaje del error + el status code!
    📢 PUNTOS A TENER EN CUENTA 📢
    - Recordá chequear el mensaje del error y devolver la respuesta dependiendo del mismo. 
*/

router.get("/book/:id", (req, res) => {
  const { id } = req.params;
  const { quantity } = req.query;
  try {
    const { book } = takeBook(id, quantity);
    res.status(200).json({ book, returnDate: new Date().toLocaleDateString() });
  } catch (err) {
    // console.log("AQUI:", String(err).slice(7));
    if (
      String(err).slice(7) ===
      "La cantidad de libros solicitados supera el stock"
    ) {
      res
        .status(400)
        .json({ message: "La cantidad solicitada supera el stock" });
    }
    if (String(err).slice(7) === "Libro no encontrado") {
      res.status(404).json({ message: "Libro no encontrado" });
    }
    res.status(400).json({ message: err.message });
  }
});

//No modificar nada debajo de esta linea
module.exports = router;
