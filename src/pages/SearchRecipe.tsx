import { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonButton, IonList, IonItem, IonLabel, IonImg, IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';

const SearchRecipe: React.FC = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState<any[]>([]);

  const searchRecipes = async () => {
    if (!query) return;
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`);
    const data = await response.json();
    setRecipes(data.meals || []);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search Recipe</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonInput
          clearInput={true}
          placeholder="Enter ingredient (e.g., chicken)"
          onIonChange={(e) => setQuery(e.detail.value!)}
        />
        <IonButton expand="full" onClick={searchRecipes}>
        <IonIcon slot="start" icon={searchOutline}></IonIcon>
          Search
        </IonButton>
        <IonList>
          {recipes.map((recipe) => (
            <IonItem key={recipe.idMeal}>
              <IonImg slot="start" src={recipe.strMealThumb} style={{ width: 50, height: 50 }} />
              <IonLabel>{recipe.strMeal}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default SearchRecipe;
