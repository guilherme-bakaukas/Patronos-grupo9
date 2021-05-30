import { database } from '../firebase'
import firebase from '../firebase'

 export default class DatabaseManager {

    constructor(props) {
        this.usersRefName = "Users"
        this.database = database
    }

    createUserIfNeeded(user) {

        const usersRef = database.ref(this.usersRefName)

        return usersRef.equalTo(user.uid).on('value', snapshot => {
            const fetchedUser = snapshot.val()

            if (fetchedUser == null) {
                return usersRef.set(user.uid)
            }
        })
    }

    addUsertoDatabase(userFunction, user_info ) {

        return database.ref().child(userFunction).push(user_info)
        
    }

    findMatch(materiasMentorado) {

        const nameMaterias = ["Biologia", "Matemática", "Português"]

        const list = []
        const functionRef = database.ref('Mentores')
        functionRef.on('value', (snapshot)=>{
            const allElements = snapshot.val();
            for (let element in allElements){
                list.push(allElements[element])
            }
        })

        console.log(list)
        
        var matches = 0
        var possibles = []

        //console.log(list[0]["materias"])
        for (let key in list){
            console.log(list[key])
            matches = 0
            for (let materia in list[key]["materias"]){
                if (list[key]["materias"][materia]==true && materiasMentorado[materia]==true){
                    matches+=1
                }
            }
            if (matches>0){
                var mentor={...list[key], "matches" : matches}
                possibles.push(mentor)
            }
        }

        console.log(possibles)

        //agora, vamos analisar qual o mentor com o maior numero de matches
        var mentores = []
        var maiores = [0,0,0]

        for (let key in possibles){
            
            var diferencas = [
                (possibles[key]["matches"]-maiores[0]),
                (possibles[key]["matches"]-maiores[1]),
                (possibles[key]["matches"]-maiores[2])
            ]
            
            Array.max = function (array)  {
                return Math.max.apply(Math, array);
            }

            console.log(diferencas)
            var maior = Array.max(diferencas)
            
            var indice_maior = diferencas.indexOf(maior)
            
            maiores[indice_maior] = possibles[key]["matches"]
            mentores[indice_maior] = possibles[key]

        }
        
        console.log(mentores)
        console.log(maiores)

        return mentores
    }

}

  