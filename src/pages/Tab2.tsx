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
  IonTextarea,
  IonTitle,
  IonToolbar, } from '@ionic/react';
import { journal, menu, settings, addCircleOutline, calendar, } from "ionicons/icons";
import './Tab2.css';
import { useState } from 'react';

const Tab2: React.FC = () => {
  const [noteContent, setNoteContent] = useState('');
  const saveNote = () => {
    const existingNotes = JSON.parse(localStorage.getItem('notes') || '[]');
    const newNote = { content: noteContent, date: new Date() };
    localStorage.setItem('notes', JSON.stringify([existingNotes, newNote]));
    alert('Note saved!');
    setNoteContent('');
  };
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
              <IonTitle>Create notes</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <h1>Create your own notes!</h1>
            <p>Here you will create new content.</p>
          <IonItem className="note-item">
            <IonLabel position="floating">Write your note:</IonLabel>
            <IonTextarea className="note-input"
              value={noteContent}
              onIonChange={(e) => setNoteContent(e.detail.value!)}
              placeholder="Start typing..."
            />
          </IonItem>
          <IonButton onClick={saveNote}>
          <IonIcon icon={addCircleOutline}></IonIcon>
            Save Notes
          </IonButton>
        </IonContent>
        </IonPage>
      </IonApp>
  );
};

export default Tab2;
