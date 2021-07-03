import React, { useState, useEffect } from 'react';

import { IonGrid, IonItem, IonIcon, IonContent, IonPage, IonTitle, IonToolbar, IonButton, IonSlide, IonSlides, IonImg, IonRow, IonCol, IonList, IonItemSliding, IonItemOption, IonNote, IonItemOptions, IonButtons, IonCardContent, IonCard } from '@ionic/react';

import './Home.css';
import { archive, calendar, ellipsisHorizontal, ellipsisVertical, heart, star, trash } from 'ionicons/icons';
// import { db } from 'firebase';

const Home: React.FC = () => {
  const [day, setDay] = useState(0);
  const getToday = new Date();
  console.log(getToday);

  const [nameOfDoctor, setNameOfDoctor] = useState();

  // useEffect(() => {
  //   db.collection("events")
  //     .get()
  //     .then(snap => snap.forEach(sd => {
  //       const result: string = sd.data();
  //       setNameOfDoctor(result)
  //     }))
  //     .catch((error) => {
  //       console.log("Error getting documents: ", error);
  //     });
  // }, []);

  return (
    <IonPage>
      <IonContent className="main">
        <IonTitle className="ion-text-center bold700 title">
          Алексей Карачинский
        </IonTitle>

        <IonGrid className="man-block">
          <IonRow className="ion-align-items-center">
            <IonCol size="6" className="">
              <IonImg
                className="avatar"
                src="https://cdn1.savepice.ru/uploads/2021/6/20/8b18fefa547c512402bbd622f5a2ab05-full.png" />
            </IonCol>
            <IonCol size="6" className="ion-text-center">
              <IonRow className="ion-padding">Длительность консультации</IonRow>
              <IonCol className="bold600">50 минут</IonCol>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonContent className="ion-padding possible-date">
          <IonRow>
            <IonCol className="bold600">
              Возможная дата
            </IonCol>
            <IonCol>
              <IonRow className="ion-justify-content-end">
                <IonImg
                  className="shake"
                  src="https://cdn1.savepice.ru/uploads/2021/6/20/cbce10ad458a3738b664d7c9cfd72034-full.png" />
                <IonImg
                  className="calendar"
                  src="https://cdn1.savepice.ru/uploads/2021/6/20/609f438387323fe4bac4c6f1ad7b9a31-full.png" />
              </IonRow>
            </IonCol>
          </IonRow>

          <IonRow className="dates__content">
            <IonCol>
              <IonRow className="day-date">
                <IonCol className="ion-align-self-center">
                  <IonRow className="ion-justify-content-center">
                    Сегодня
                  </IonRow>
                  <IonRow className="ion-justify-content-center cal-date">
                    21
                  </IonRow>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
        </IonContent>

        <IonContent className="time">
          <IonRow className="time-text bold600">
            Свободное время
          </IonRow>

          <IonRow className="ion-padding">
            <IonCol className="time-digits">
              <IonCol className="ion-padding">
                9:00
              </IonCol>
            </IonCol>
          </IonRow>
        </IonContent>

        <IonCard className="current-date ion-padding">
          <IonGrid className="choosen-dates">
            <IonCol size="6" className="ion-padding">
              <IonRow className="choosen-dates__text">
                Дата
              </IonRow>
              <IonRow className="choosen-dates__digit">
                21 Июня
              </IonRow>
            </IonCol>
            <IonCol className="line"></IonCol>
            <IonCol size="6" className="ion-padding">
              <IonRow className="choosen-dates__text">
                Время
              </IonRow>
              <IonRow className="choosen-dates__digit">
                18:00
              </IonRow>
            </IonCol>
          </IonGrid>

          <IonButton color="primary" className="button">
            ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ВСТРЕЧУ
          </IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
