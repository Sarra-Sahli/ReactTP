import { Component } from "react";
import { Button } from "react-bootstrap"; // Ajoutez l'import de Button si nécessaire

class Hello extends Component {
     state = {  monText:"hello you",value:0} 
     //evenement de bouton que ce il fait exctement
handleClick=()=>
{
    this.setState({
        value:this.state.value+1
    })
}
     render() { 
        return (<>    
        {this.state.monTexte}
        {this.state.value}
        Ceci un composant de classe
  
        <Button variant="primary" onClick={this.handleClick}>Incrémenter</Button>
  
        <h2>{this.state.value}</h2>
  
        </>);
  
    }
}
// import { Component } from "react";

// class Hello extends Component {
//     state = {  } 
//     render() { 
//         return (
//             <div>
//                 <h1> Hello 4twin 7</h1>
//             </div>
//         );
//     }
// }
 
 export default Hello;
