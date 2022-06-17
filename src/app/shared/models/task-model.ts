export interface TaskModel {
  taskId: string;
  taskName: string;
  taskDescription: string;
  tags: ITag[];
  dateCreated: Date;
  status: number;
  dateModified?: Date;
  dateCompleted: Date;
  completionRating: number;
}

export interface ITag {
  tagId: string;
  tagName: string;
}

//Interface passing title and task then asign to dailog
export interface DialogParams {
  title: string,
  task: TaskModel
}