//1
const findLongestWord = (words) => {
    // Affectation par décomposition
    let [firstWord, ...restWords] = words;

    // Création d'un tableau d'objets avec .map()
    let wordObjects = words.map(word => ({
        mot: word,
        longueur: word.length
    }));

    // Trouver l'objet avec la plus grande longueur avec .reduce()
    let longest = wordObjects.reduce((longestWord, currentWord) => {
        return currentWord.longueur > longestWord.longueur ? currentWord : longestWord;
    }, { mot: '', longueur: 0 });

    return longest;
};

//2
const wordsArray = ["apple", "banana", "watermelon", "grape"];
console.log(findLongestWord(wordsArray)); 
he
const countOccurrences = (nestedArray) => {
    return nestedArray
        .flat() // Aplatir les sous-tableaux
        .reduce((acc, item) => {
            acc[item] = (acc[item] || 0) + 1; // Compter les occurrences
            return acc;
        }, {});
};

const nestedArray = [["apple", "banana"], ["apple", "orange", "banana"], ["banana", "grape"]];
console.log(countOccurrences(nestedArray));

//3
const calculateTotal = (grades) => {
    return grades
        .map(grade => grade < 50 ? grade + 15 : grade) // Ajouter un bonus si < 50
        .filter(grade => grade > 50) // Garder seulement les notes > 50
        .reduce((total, grade) => total + grade, 0); // Calculer le total
};

// Exemple d'utilisation
const grades = [45, 78, 30, 90, 50];
console.log(calculateTotal(grades));
//4 

// Tab.js
let lastId = 0; // Variable globale pour suivre les IDs

const Tab = [
    { id: ++lastId, name: "John", age: 25 },
    { id: ++lastId, name: "Jane", age: 30 },
];

// Ajouter des entrées au tableau
Tab.push({ id: ++lastId, name: "Doe", age: 22 });
Tab.unshift({ id: ++lastId, name: "Alice", age: 28 });

console.log(Tab);

