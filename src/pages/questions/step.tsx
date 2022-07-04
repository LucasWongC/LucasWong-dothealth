import React, { useState } from 'react';

import MButton from 'components/mbutton';
import MFinalInput from 'components/mfinalinput';

import './step.scss';
import { useEffect } from 'react';

interface Props {
  question: string;
  answers: string[];
  info: any;
  onPrev: () => void;
  onSubmit: (data: Object, step?: number) => void;
}

type CheckType = {
  [key: string]: boolean;
};

const Step: React.FC<Props> = ({
  question,
  answers,
  info,
  onSubmit,
  onPrev,
  ...props
}) => {
  const [checked, setChecked] = useState<CheckType>({});

  const handlePrev = () => {
    onPrev();
  };

  const handleNext = () => {
    if (Object.keys(checked).length === 0) {
      return;
    }

    onSubmit({ [question]: checked });
  };

  const handleCheck = (ind: number) => {
    const id = ind.toString();

    setChecked((prev: CheckType) => {
      const temp = { ...prev };
      if (temp[id] === undefined) temp[id] = false;
      temp[id] = !temp[id];
      return temp;
    });
  };

  useEffect(() => {
    setChecked(info[question] ?? {});
  }, [question, info]);

  return (
    <div className='step-component'>
      <h5>{question}</h5>
      <div className='answers'>
        {answers.map((answer, ind) => (
          <MFinalInput
            key={`${question}_${ind}`}
            content={answer}
            checked={checked[ind]}
            onClick={() => handleCheck(ind)}
          />
        ))}
      </div>
      <div className='actions'>
        <MButton title='Back' onClick={() => handlePrev()} />
        <MButton title='Next' onClick={() => handleNext()} />
      </div>
    </div>
  );
};

export default Step;
