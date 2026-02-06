import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideStorage, getStorage } from '@angular/fire/storage';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)), // Inicializa Firebase 
    provideFirestore(() => getFirestore()),  // Inicializa Firestore 
    provideAuth(() => getAuth()),  // Inicializa Auth 
    provideStorage(() => getStorage()),  // Inicializa Storage 
    ...appConfig.providers // Desestructuramos los providers del appConfig si es necesario
  ]
}).catch((err) => console.error(err));
