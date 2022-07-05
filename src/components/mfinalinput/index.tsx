import './mfinalinput.scss';

import { ReactComponent as CheckIcon } from 'assets/check.svg';

interface Props {
  content: string;
  checked?: boolean;
  onClick?: () => void;
}

const MFinalInput: React.FC<Props> = ({
  content,
  checked = false,
  onClick,
}) => {
  return (
    <div
      className={`final-input ${checked ? 'checked' : ''}`}
      onClick={onClick}
    >
      {content}
      {checked && <CheckIcon />}
    </div>
  );
};

export default MFinalInput;
