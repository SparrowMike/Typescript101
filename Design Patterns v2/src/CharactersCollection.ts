export class CharactersCollection {
    constructor(public data: string) {}

    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return (
            this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
        );
    }

    swap(leftIndex: number, rightIndex: number): void {
        const characters = this.data.split('');
        [characters[leftIndex], characters[rightIndex]] = [characters[rightIndex], characters[leftIndex]]

        this.data = characters.join('')
    }
}