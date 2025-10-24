import cls from './MainLayout.module.css'

export const MainLayout = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={ cls.mainLayout }>
      <header>header</header>
      <div className="mainWrapper">
        <main className={ cls.main }>main</main>
        <footer className={ cls.footer }>
          React Question Cards Application | { currentYear } <br />
          by Zhaslanuly Sabyrzhan
        </footer>
      </div>
    </div>
  )
}
