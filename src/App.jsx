import{useState} from "react"

function App(){

  
  const [nome, setNome] = useState ('Ronaldo')
  const [idade, setIdade] = useState(18)
  const [time, setTime] = useState('Corinthians')
  const [pi] = useState(3.14)

//var idade = 18;
// let time = 'Corinthians';
//const pi = 3.14;

  const Formulario = (props)=>{
    const [valor, setValor] = useState()

      return (
        
          <div>
   <input 
    className="Nome"
    placeholder = {props.sombra}
    onChange={(e)=>{setValor(e.target.value)}}
    type="text" />

    <button
    className="botao"
    onClick={()=>{
      if(valor.length > 0)
      alert(valor)
      else
      alert(props.nome + ' idade é ' + props.idade)}}
    >

  CLIQUE AQUI

    </button>


          </div>


      )


  }

return (

  <div>
    <h3>Pizzaia 2E</h3>

    <Formulario nome ="Ricardo" 
                idade={28}
                sombra ="Digite nome..."/>
    <Formulario nome ="Davi" sombra ="Digite idade..."/>
    <Formulario nome ="Moises" sombra ="Digite time..."/>
    <Formulario nome ="Elias" sombra ="valor de pi"/>


  </div>

)

}


export default App