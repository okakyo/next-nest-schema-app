export interface CreateWorkDTO {
  title: string;
  description?: string;
  isShow?: boolean;
}

export type UpdateWorkDTO = Partial<CreateWorkDTO>;
