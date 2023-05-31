import React from 'react';

type PlanetCardProp = {
  planetName: string,
  planetImage: string
};

function PlanetCard(prop: PlanetCardProp) {
  const { planetImage, planetName } = prop;
  return (
    <div data-testid="planet-card">
      <p data-testid="planet-name">
        { planetName }
      </p>
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
    </div>
  );
}

export default PlanetCard;
