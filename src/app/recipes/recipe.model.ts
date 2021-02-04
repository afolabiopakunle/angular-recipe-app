export class RecipeModel {
    public id?: string;
    public name: string;
    description: string;
    imagePath: string;

    constructor(name: string, desc: string, imagePath: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
    }
}