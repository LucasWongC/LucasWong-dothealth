import './mfinalinput.scss';

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
    </div>
  );
};

export default MFinalInput;
