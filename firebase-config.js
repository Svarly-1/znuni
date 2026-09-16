// ============================================================
// FIREBASE YAPILANDIRMASI
// ============================================================
// Bu dosyayı Firebase Console'dan aldığın bilgilerle doldur.
// README.md dosyasında adım adım nasıl alınacağı anlatılıyor.
//
// Firebase Console > Project Settings > "Your apps" > Config
// altında gördüğün "firebaseConfig" objesini buraya kopyala.
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyALr5WLEBHSnxg7ZBj6Aq1TrzVqsOtVT2g",
  authDomain: "znuni-tracker.firebaseapp.com",
  projectId: "znuni-tracker",
  storageBucket: "znuni-tracker.firebasestorage.app",
  messagingSenderId: "243621937484",
  appId: "1:243621937484:web:c7db29865ae16c6e854fe9"
};

// Firebase'i başlat (app-common.js bu değişkeni kullanıyor)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
