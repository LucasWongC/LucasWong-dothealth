import React, { useState } from 'react';

import { questions } from 'data/mockup';
import Step from './step';
import MSpinner from 'components/mspinner';

const Questions = () => {
  const [info, setInfo] = useState({ step: 0, answers: {} });
  const [loading, setLoading] = useState(false);

  const handlePrev = () => {
    if (info.step !== 0) {
      setInfo((prev) => ({ ...prev, step: prev.step - 1 }));
    }
  };

  const handleNext = (data: Object, step = 1) => {
    setInfo((prev) => ({ ...prev, answers: { ...prev.answers, ...data } }));

    if (info.step === questions.length - 1) {
      setLoading(true);

      console.log(info);

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else {
      setInfo((prev) => ({ ...prev, step: prev.step + 1 }));
    }
  };

  return (
    <>
      {loading && <MSpinner />}
      <Step
        {...questions[info.step]}
        onSubmit={handleNext}
        onPrev={handlePrev}
        info={info}
        length={questions.length}
      />
    </>
  );
};

export default Questions;
