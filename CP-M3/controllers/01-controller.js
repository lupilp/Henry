const utils = require("../utils");

/// =========================================================================== ///
/// =========================== 🛒 HENRY-BOOKS 🛒 ============================ ///
/// =========================================================================== ///

/*
   1️⃣ ***EJERCICIO 1*** - addBook 1️⃣:
     ❕ CONSIGNA ❕
  1 - utils.books es nuestra "base de datos" improvisada y book es el libro que nos traen para vender,
    - debes validar de que el nuevo libro no se encuentre en nuestra base de datos, utilizando el ID!
  2 - Si el libro no se encuentra, debes guardarlo y retornar la base de datos.
  3 - Si el libro ya se encuentra, debes retornar un error que diga: "ya esta el libro en la base de datos." (investigar el throw Error)
    📢 PUNTOS A TENER EN CUENTA 📢
  - Si el libro ya existe en la base de datos, no debe agregarse.
  - Pueden acceder a los libros a través de utils.books
  - Recordá que el mensaje de error deben ser exactamente como pide el enunciado
  - Encontrar una manera para extraer solo los id de la base de datos y de los libros que te dan por props en la función addBook.
  */

const addBook = (book) => {
  for (var i = 0; i < book.length; i++) {
    const findBook = utils.books.find((b) => b.id === book[i].id);

    if (findBook) {
      throw new Error("ya esta el libro en la base de datos.");
    } else {
      utils.books.push(book[i]);
    }
  }
  return utils.books;
};
// ⚠️ No modificar nada debajo de esta línea ⚠️
module.exports = addBook;
