import {Task} from '@project/shared/app-types';

export class TaskEntity implements Task {
    public _id?: string;
    public name: string;
    public description: string;
    public category: string;
    public price: number;
    public creationDate: Date;
    public deadline: Date;
    public picture: string;
    public address: string;
    public tags: string;
    public city: string;
    public userId: string;

    constructor(task: Task) {
        this.fillEntity(task);
    }

    public toObject() {
        return {
            _id: this._id,
            name: this.name,
            description: this.description,
            category: this.category,
            price: this.price,
            creationDate: this.creationDate,
            deadline: this.deadline,
            picture: this.picture,
            address: this.address,
            tags: this.tags,
            city: this.city,
            userId: this.userId
        };
    }

    public fillEntity(task: Task) {
        this._id = task._id;
        this.name = task.name;
        this.description = task.description;
        this.category = task.category;
        this.price = task.price;
        this.creationDate = task.creationDate;
        this.deadline = task.deadline;
        this.picture = task.picture;
        this.address = task.address;
        this.tags = task.tags;
        this.city = task.city;
        this.userId = task.userId;
    }
}