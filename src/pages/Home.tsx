import { 
  IonButton,
  IonCol,
  IonContent, 
  IonGrid, 
  IonHeader, 
  IonIcon, 
  IonImg, 
  IonPage, 
  IonRow, 
  IonText, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import './Home.css';
import { bookOutline, searchOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Recipe Explorer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding ion-text-center">
        <IonImg src="/images/recipe_book.jpg" alt="Recipe book" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
        <IonGrid className="ion-margin-top">
          <IonRow className="ion-justify-content-center">
            <IonCol size="12">
              <IonText>
                <h2>Welcome to Recipe Explorer! 🍴</h2>
                <p>Discover new recipes by using our recipe randomizer or search for recipes by ingredients.</p>
              </IonText>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size="10">
              <IonButton shape="round" expand="full" href="/random">
                <IonIcon slot="start" icon={bookOutline}></IonIcon>
                Get a Random Recipe
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow className="ion-justify-content-center">
            <IonCol size="10">
              <IonButton shape="round" expand="full" href="/search">
                <IonIcon slot="start" icon={searchOutline}></IonIcon>
                Search Recipes
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
