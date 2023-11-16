import { Icon } from '../Icon/index';
import './style.css';

export const Option = (props) => {
  return (
    <div className="option">
      <Icon type={props.type} />
      <div>{props.text}</div>
    </div>
  );
};
