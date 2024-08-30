import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

import styles from "./App.module.css"

export default function App(){

  return (
    <div className={styles.App}>
      <Header />

      <Main>
        <form action="">
        <input type="text" />
        <button></button>          
        </form>
        {/* <TaskList/> */}
      </Main>
      <Footer autor="Ana"/>
      </div>
   
  )
}





// {
// 	"Cria um componente": {
// 		"prefix": ".componente",
// 		"body": [
// 			"export default function ${1:Componente}(){",
// 			"",
// 			"\treturn (",
// 			"\t\t<>$0</>",
// 			"\t)",
// 			"}",
// 			"",
// 		],
// 		"description": "Cria um componente funcional"
// 	}
// }


// {
// 	"Componente css": {
// 		"prefix": ".componente-css",
// 		"body": [
// 			"import styles from ./${1:Componente}.module.css",
// 			"",
// 			"export default function ${1:Componente}(){",
// 			"",
// 			"\treturn (",
// 			"\t\t<>$0</>",
// 			"\t)",
// 			"}",
// 			"",
// 		],
// 		"description": "Cria um componente funcional com estilo"
// 	}
// }