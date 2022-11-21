import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import recipeList from "../../data/food.json";

const styles = {
    list: {
        listStyleType: "none",
        textAlign: "center"
    }

   

}

function List() {
    return (
        recipeList.Recipes.map((recipes) => {
            return (
                <div>
                    <ul style={styles.list}>
                        <li> <p>{recipes.title} |{" "} {recipes.rating}</p>
                        <img style={{width:"100px"}} src={recipes.image}></img>
                        <p>{recipes.description} </p>
                        <p> </p>
                        <p> {recipes["have tried"]}</p>
                    </li>
                    
                    </ul>
                </div>
            )
        }
      )
    );
  }
  

export default List;
