
import Header from "./Components/Header.js"
import Magazine from './Components/Magazine'
import Footer from "./Components/Footer"
import { data } from './data';
import { React, useEffect, useRef } from "react"
import "./App.css"

function App() {

  const GroupRef = useRef([])

  const onScroll= (el) =>{
    const styles= GroupRef.current.map((group,i) => {
      const rect= group.getBoundingClientRect();

      return {group, rect }
    }).find((group) => group.rect.bottom >= window.innerHeight * 0.5)

    document.body.style.backgroundColor=`${styles.group.dataset.bgcolor}`
    document.body.style.color=styles.group.dataset.txtcolor
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)
  }, [])


    return (
      <div>
        <Header/>
        <Magazine />
        <Footer />
        {data.map((group, i) => (
          <div  ref={(el) =>(GroupRef.current[i] = el)} style={{ height: "100vh"}}
          data-bgcolor={group.theme.background}>
            <h1>{group.title}</h1>
          </div>
        ))}
      </div>
    )
  }

export default App;
