import GameCard from "./GameCard"
import { useEffect ,useState} from "react"
import "./home.css"



const Home=()=>{
    const [actionGamesdata,setActionGamesdata]=useState([])
    const [adventureGamesdata,setAdventureGamesdata]=useState([])
    useEffect(()=>{
    fetch("http://localhost:1337/api/actions?populate=*").then(res=>res.json()).
    then(result=>{
        console.log(result.data)
        setActionGamesdata(result.data)
    })
    fetch("http://localhost:1337/api/adventures?populate=*").then(res=>res.json()).
    then(result=>{
        setAdventureGamesdata(result.data)
    })
    },[])
    return(
        <section className="Homecards">
        <h1 className="cardheading">ACTION</h1>
        <section className="allcards">
        {
            actionGamesdata.map((element,index)=>{
                return  <GameCard element={element} key={index} />
            })
        }
        </section>
        <h1 className="cardheading">ADVENTURE</h1>
        <section className="allcards">
        {
           adventureGamesdata.map((element,index)=>{
                return  <GameCard element={element} key={index} />
            })
        }
        </section>
        </section>
   
        

     
    )
}

export default Home