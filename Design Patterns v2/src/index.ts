import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

// const numbersCollection = new NumbersCollection([50, 5, 10, 3, -5, 0])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)

// const charactersCollection = new CharactersCollection('ScGsabfgfADx')
// const sorter = new Sorter(charactersCollection)
// sorter.sort()
// console.log(charactersCollection.data)

const linkedListCollection = new LinkedList();
linkedListCollection.add(12);
linkedListCollection.add(51);
linkedListCollection.add(-23);
linkedListCollection.add(62);

const sorter = new Sorter(linkedListCollection);
sorter.sort();
linkedListCollection.print()
