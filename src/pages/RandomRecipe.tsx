import { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonImg, IonText, IonIcon } from '@ionic/react';
import { sync } from 'ionicons/icons';

const RandomRecipe: React.FC = () => {
  const [recipe, setRecipe] = useState<any>(null);

  const fetchRandomRecipe = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
    const data = await response.json();
    setRecipe(data.meals[0]);
  };

  useEffect(() => {
    fetchRandomRecipe();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Random Recipe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {recipe ? (
          <>
            <IonTitle>{recipe.strMeal}</IonTitle>
            <IonImg src={recipe.strMealThumb} alt={recipe.strMeal} />
            <IonText>
              <h3>Ingredients:</h3>
              <ul>
                {Array.from({ length: 20 }, (_, i) => i + 1)
                  .map(i => recipe[`strIngredient${i}`])
                  .filter(ing => ing)
                  .map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
              </ul>
            </IonText>
            <IonText>
              <h3>Instructions:</h3>
              <p>{recipe.strInstructions}</p>
            </IonText>
            <IonButton expand="full" onClick={fetchRandomRecipe}>
            <IonIcon slot="start" icon={sync}></IonIcon>
              Get Another Recipe
            </IonButton>
          </>
        ) : (
          <IonText>Loading...</IonText>
        )}
      </IonContent>
    </IonPage>
  );
};

export default RandomRecipe;
