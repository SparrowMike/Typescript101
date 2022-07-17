import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const numbersCollection = new NumbersCollection([50, 5, 10, 3, -5, 0])
numbersCollection.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('ScGsabfgfADx')
charactersCollection.sort()
console.log(charactersCollection.data)

const linkedListCollection = new LinkedList();
linkedListCollection.add(12);
linkedListCollection.add(51);
linkedListCollection.add(-23);
linkedListCollection.add(62);

linkedListCollection.sort();
linkedListCollection.print()
