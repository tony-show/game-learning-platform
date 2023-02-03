import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'
import './styles/index.scss'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

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
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/' element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
export default App
