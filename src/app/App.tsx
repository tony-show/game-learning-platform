import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import './styles/index.scss'
import { AppRouter } from './providers/router'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div
      className={classNames('app', { hover: true, selected: false }, [
        theme,
        'cls1',
        'cls2',
      ])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to='/'>Главная</Link>
      <Link to='/about'>About</Link>
      <AppRouter />
    </div>
  )
}
export default App
