import { IonApp,
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonMenu,
    IonMenuToggle,
    IonPage,
    IonTitle,
    IonToolbar, } from '@ionic/react';
  import { journal, menu, settings, addCircleOutline, calendar, } from "ionicons/icons";
  import './Settings.css';
  
  const Settings: React.FC = () => {
    return (
        <IonApp>
        <IonMenu contentId="main-content">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonList>
              <IonMenuToggle autoHide>
                <IonItem button routerLink="/tab1">
                  <IonIcon slot="start" icon={journal}></IonIcon>
                  <IonLabel>My Journal</IonLabel>
                </IonItem>
                <IonItem routerLink="/tab2">
                  <IonIcon slot="start" icon={addCircleOutline}></IonIcon>
                  <IonLabel>Create</IonLabel>
                </IonItem>
                <IonItem routerLink="/tab3">
                  <IonIcon slot="start" icon={calendar}></IonIcon>
                  <IonLabel>Calender</IonLabel>
                </IonItem>
                <IonItem routerLink="/settings">
                  <IonIcon slot="start" icon={settings}></IonIcon>
                  <IonLabel>Settings</IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>
        <IonPage id="main-content">
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuToggle>
                  <IonButton>
                    <IonIcon slot="start" icon={menu}></IonIcon>
                  </IonButton>
                </IonMenuToggle>
              </IonButtons>
              <IonTitle>Settings</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <h1>Settings</h1>
            <p>Adjust your settings here.</p>
          </IonContent>
        </IonPage>
      </IonApp>
    );
  };
  
  export default Settings;