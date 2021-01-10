import { createContext, useState, useContext } from 'react'
import Router from 'next/router'

const AppContext = createContext({
  menuOpen: true,
  toggleMenu: () => {},
})

export const AppProvider = (props) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  Router.events.on('routeChangeStart', () => {
    setMenuOpen(false)
  })

  const toggleMenu = () => {
    console.log('test')
    setMenuOpen(!menuOpen)
  }

  const value = {
    toggleMenu,
    menuOpen,
  }

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
