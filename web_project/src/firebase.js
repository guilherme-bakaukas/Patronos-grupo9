import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCJjhQe_2MaVkgpcFuY4awWHGWhJNGVk1Q",
    authDomain: "patronos-project.firebaseapp.com",
    projectId: "patronos-project",
    storageBucket: "patronos-project.appspot.com",
    messagingSenderId: "593144974341",
    appId: "1:593144974341:web:f15c1e2cc26591d38de06c"
})

export const auth = app.auth()
export const database = app.database()
export default app
