import React,{Component} from 'react';
import Header from './Header';
import RecipeDisplay from './RecipeDisplay';
import RecipeForm from './RecipeForm';

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipeArray:[],
         }
    }

    updateRecipeArray = (newArray) =>{
        this.setState(
            {
                recipeArray:this.state.recipeArray
            }
        )
        console.log(`AppContainer ${this.state.recipeArray}`)
    }
   

    render() { 


        return ( 
            <div>
                <h1>Recipe App</h1>
                <Header chefName='Mary'/>
                <RecipeDisplay/>
                <RecipeForm updateRecipeArray={this.updateRecipeArray}/>
            </div>
         );
    }
}
 
export default AppContainer;