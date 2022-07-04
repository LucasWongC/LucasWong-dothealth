import React from 'react';
import './button.scss';

interface Props {
  title: string;
  onClick?: () => void;
}

const MButton: React.FC<Props> = (props) => {
  const { title, onClick } = props;
  return <button onClick={onClick}>{title}</button>;
};
export default MButton;
