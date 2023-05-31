import React from 'react';

type TitleProp = {
  headLine: string;
};

function Title(prop: TitleProp) {
  const { headLine } = prop;
  return (
    <h2>{headLine}</h2>
  );
}

export default Title;
