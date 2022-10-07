import React from 'react';
import { getHouse } from '../../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux'
import CharacterCard from '../CharacterCard/CharacterCard';

// CUIDADOOOO. SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!
// TAMBIEN VAS A TENER QUE USAR HOOKS!
const HouseDetail = (props) => {

  const house = useSelector(state => state.house)

  // console.log(props.match.params.houseId)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getHouse(props.match.params.houseId))
  }, [dispatch])


  return (
    <div>
      <h3>{house.name}</h3>
      <h3>{house.words}</h3>

      <ul>
        {house.characters && house.characters.map((pj) => <li key={pj.id}>

          <CharacterCard

            fullName={pj.fullName}
            id={pj.id}
            family={pj.family}
            title={pj.title}
            houseId={pj.houseId}
            imageUrl={pj.imageUrl}

          />
        </li>)}
      </ul>

    </div>
  );
};

export default HouseDetail;
