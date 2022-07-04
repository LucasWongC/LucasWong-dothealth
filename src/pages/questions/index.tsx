import React, { useState } from 'react';

import { questions } from 'data/mockup';
import Step from './step';

const Questions = () => {
  const [curStep, setCurStep] = useState(0);
  const [submitAnswer, setSubmitAnswer] = useState({});

  const handlePrev = () => {
    if (curStep !== 0) {
      setCurStep((prev) => prev - 1);
    }
  };

  const handleNext = (data: Object, step = 1) => {
    setSubmitAnswer((prev) => ({ ...prev, ...data }));

    if (curStep === questions.length - 1) {
    } else {
      setCurStep((prev) => prev + step);
    }
  };

  return (
    <>
      <Step
        {...questions[curStep]}
        onSubmit={handleNext}
        onPrev={handlePrev}
        info={submitAnswer}
      />
    </>
  );
};

export default Questions;
