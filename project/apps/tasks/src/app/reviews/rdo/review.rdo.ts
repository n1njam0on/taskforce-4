import { Expose } from 'class-transformer';

export class CategoryRdo {
  @Expose()
  public id: string;

  @Expose()
  public message: string;

  @Expose()
  public grade: number;

  @Expose()
  public taskId: number;
}
