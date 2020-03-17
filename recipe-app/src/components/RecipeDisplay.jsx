import React,{Component} from 'react';

class RecipeDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            recipeArray: [],
         }
    }

    render() { 

        return ( 
            
            <div>
                {
                    this.state.recipeArray.map((recipe, index) => {
                        return(
                            <div key = {index}>
                                <p>Title:{recipe}</p>
                                <p>Make Time:{recipe}</p>
                                <p>Serving Size:{recipe}</p>
                            </div>
                        )
                    }

                    )
                }
            </div>
         );
    }
}
 
export default RecipeDisplay;