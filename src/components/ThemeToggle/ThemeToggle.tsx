
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/slices/themeSlice';
import { RootState } from '../../store/store';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  const handleToggle = () => {
    dispatch(toggleTheme());
    document.body.classList.toggle('dark-mode');
  };

  return (
    <button className="theme-toggle" onClick={handleToggle}>
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle; 