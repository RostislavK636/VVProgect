# Шаблон подключения Firebase

В проект добавлен файл `firebase.template.js`. Его можно использовать как основу для подключения своего Firebase-проекта.

## Как подключить Firebase

1. Откройте Firebase Console: https://console.firebase.google.com/.
2. Создайте проект или выберите существующий.
3. В разделе **Project settings** добавьте Web App.
4. Скопируйте объект `firebaseConfig`.
5. Скопируйте файл `firebase.template.js` в `firebase.js`.
6. Замените значения-заглушки:

```js
const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_PROJECT_ID.firebaseapp.com',
  databaseURL: 'https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: 'YOUR_PROJECT_ID.firebasestorage.app',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  appId: 'YOUR_APP_ID'
};
```

7. В Firebase Console откройте **Authentication**.
8. Включите способ входа **Email/Password**.
9. Установите зависимости и запустите проект:

```bash
npm ci
npm start
```

## Что содержит шаблон

- инициализацию Firebase через `initializeApp`;
- защиту от повторной инициализации через `getApps`;
- экспорт `auth`;
- функцию регистрации `registerUser(email, password)`;
- функцию входа `loginUser(email, password)`;
- обработку основных ошибок Firebase Auth.

Файл `firebase.template.js` не содержит реальных ключей и безопасен для публикации в репозитории.
