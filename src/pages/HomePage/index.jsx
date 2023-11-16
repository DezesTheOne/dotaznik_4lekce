import { Question } from '../../components/Question';
import './style.css';

export const HomePage = () => {
  return (
    <div className="container">
      <Question text="Kdo jinému jámu kopá, sám do ní padá." />
    </div>
  );
};
