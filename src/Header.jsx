import chefClaudeLogo from "./images/ChefClaudeIcon.png"
export default function Header(){
    return(
        <header>
        <img src={chefClaudeLogo}></img>
        <h1>Chef Claude V2</h1>
        </header>
    )
}