import React from "react";
import { useDispatch } from "react-redux";
import { createHouse } from "../../redux/actions";

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
// Recordar que los hooks de React deben utilizarse de la forma "React.useState", "React.useEffect", etc.
// Los tests no van a reconocer la ejecución haciendo destructuring de estos métodos.
const CreateHouse = () => {

  const [house, setHouse] = React.useState({
    name: "",
    region: "",
    words: "",
  }
  )

  const handleChange = (event) => {
    setHouse({
      ...house,
      [event.target.name]: event.target.value
    })

  }

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(createHouse(house))

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input type="text" name="name" value={house.name} onChange={handleChange} />
        <label>Region: </label>
        <input type="text" name="region" value={house.region} onChange={handleChange} />
        <label>Words: </label>
        <input type="text" name="words" value={house.words} onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateHouse;
