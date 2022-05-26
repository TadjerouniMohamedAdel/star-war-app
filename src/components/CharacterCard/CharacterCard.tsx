import React from 'react';
import { Placeholder } from 'react-bootstrap';
import useGetCharacter from '../../hooks/useGetCharacter';
import './styles.css';

type Props = {
  url: string;
};
const CharacterCard: React.FC<Props> = ({ url }) => {
  const { isLoading, character } = useGetCharacter(url);
  console.log(isLoading, character);
  return (
    <div className="character-card">
      <div className="imgBox">
        <img src="/actors.png" alt="" />
      </div>
      <div className="info">
        {isLoading ? (
          <>
            <Placeholder as="span" animation="wave">
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder as="span" animation="wave">
              <Placeholder xs={8} />
            </Placeholder>
          </>
        ) : (
          <>
            <span>{character.name}</span>
            <span>
              <i>{character.gender}</i>
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
