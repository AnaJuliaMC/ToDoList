import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"


export default function App(){

  return (
    <>
      <Header />
      <Main />
      <Footer autor="Ana" ano="2024"/>
    </>
   
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