import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([5, 2, 3, -1])
numbersCollection.sort()
console.log(numbersCollection)

const charactersCollection = new CharactersCollection('Xssha')
charactersCollection.sort()
console.log(charactersCollection)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(1)
linkedList.add(4)
linkedList.sort()
linkedList.print()
