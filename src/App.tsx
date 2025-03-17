import { useState } from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import './App.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import RandomRecipe from './pages/RandomRecipe';
import SearchRecipe from './pages/SearchRecipe';
import { homeOutline, home, bookOutline, book, searchOutline, search } from 'ionicons/icons';

setupIonicReact();

const App: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('home'); // Track selected tab

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/" component={Home} />
            <Route exact path="/random" component={RandomRecipe} />
            <Route exact path="/search" component={SearchRecipe} />
            <Route exact path="/home" component={Home} />
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton
              tab="home"
              href="/home"
              onClick={() => setSelectedTab('home')}
              selected={selectedTab === 'home'}
            >
              <IonIcon icon={selectedTab === 'home' ? home : homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="random"
              href="/random"
              onClick={() => setSelectedTab('random')}
              selected={selectedTab === 'random'}
            >
              <IonIcon icon={selectedTab === 'random' ? book : bookOutline} />
              <IonLabel>Random Recipe</IonLabel>
            </IonTabButton>
            <IonTabButton
              tab="search"
              href="/search"
              onClick={() => setSelectedTab('search')}
              selected={selectedTab === 'search'}
            >
              <IonIcon icon={selectedTab === 'search' ? search : searchOutline} />
              <IonLabel>Search</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
