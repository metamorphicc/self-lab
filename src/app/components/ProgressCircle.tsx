import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProgressCircle() {
  const percentage = 33;

  return (
    <div className="w-40 h-40 p-4 bg-zinc-900 rounded-3xl shadow-xl flex items-center justify-center">
      <CircularProgressbar
        value={percentage}
        text={`LVL 12`}
        styles={buildStyles({
          // Цвета
          pathColor: `#22d3ee`,     // Основной прогресс (Cyan-400)
          trailColor: `#3f3f46`,    // Цвет "пустой" дорожки (Zinc-700)
          textColor: '#ffffff',     // Цвет текста
          // Анимация и форма
          strokeLinecap: 'round',   // Скругленные края
          pathTransitionDuration: 0.5,
          
          // Текст
          textSize: '16px',
        })}
        background
      />
    </div>
  );
}