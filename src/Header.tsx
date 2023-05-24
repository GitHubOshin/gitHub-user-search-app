import { FC } from 'react'
import '../Header.css'

const Header: FC = () => {
  function handleChangeBgColour() {}
  return (
    <header>
      <h1 className="devfinder">devfinder</h1>
      <div>
        <button onClick={handleChangeBgColour}>Theme</button>
      </div>
    </header>
  )
}
