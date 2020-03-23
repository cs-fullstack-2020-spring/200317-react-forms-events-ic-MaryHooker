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
            {           /////forgot to use the parameter
                // recipeArray:this.state.recipeArray
                //correct way
                recipeArray: newArray
            }
        )
        console.log(`AppContainer ${this.state.recipeArray}`)
    }
   

    render() { 


        return ( 
            <div>
                <h1>Recipe App</h1>
                <Header chefName='Mary'/>
                <RecipeDisplay recipeArray={this.state.recipeArray}/>
                <RecipeForm updateRecipeArray={this.updateRecipeArray}/>
            </div>
         );
    }
}
 
export default AppContainer;