import React,{Component} from 'react';

class RecipeForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipeTitle: '',
            recipeMakeTime: '',
            recipeServingSize: '',
            recipeArray: [],
         }
    }

    handleSubmission = (evt) =>{
        evt.preventDefault();

        this.state.recipeArray.push({
            title: this.state.recipeTitle,
            time: this.state.recipeMakeTime,
            size: this.state.recipeServingSize
        })

        this.setState(
            {
                recipeArray: this.state.recipeArray
            }
        )

        this.props.updateRecipeArray(this.state.recipeArray);

        console.log(`Recipe Form ${this.state.recipeArray}`)
    }

    changeTitle = (event) => {
        this.setState(
            {
                recipeTitle: event.target.value
            }
        )
    }

    changeTime = (event) => {
        this.setState(
            {
                recipeMakeTime: event.target.value 
            }
        )
    }

    changeSize = (event) => {
        this.setState(
            {
                recipeServingSize: event.target.value
            }
        )
    }

    render() { 
        return ( 
            <div>
                <form action="">
                    <fieldset className='border'>
                        <legend className='legend'>New Recipe</legend>

                        <label htmlFor="recipeTitle">Recipe Title:</label>
                        <input type="text" id='recipeTitle' name='recipeTitle' value={this.state.recipeTitle} onChange={this.changeTitle} className='input'/>
                        <br/>
                        <br/>
                        <label htmlFor="recipeTime">Recipe Make Time:</label>
                        <input type="text" id='recipeTime' name='recipeTime' value={this.state.recipeMakeTime} onChange={this.changeTime} className='input'/>
                        <br/>
                        <br/>
                        <label htmlFor="recipeSize">Recipe Serving Size:</label>
                        <input type="text" id='recipeSize' name='recipeSize' value={this.state.recipeServingSize} onChange={this.changeSize} className='input'/>
                        <br/>
                        <br/>
                        <button onClick={this.handleSubmission} className='button'>Submit Recipe</button>

                    </fieldset>
                </form>
            </div>
         );
    }
}
 
export default RecipeForm;