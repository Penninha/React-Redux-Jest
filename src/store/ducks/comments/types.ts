// Action types
export enum CommentTypes {
  SAVE_COMMENT = "@comments/SAVE_COMMENT"
}

// Data type
export interface Commentary {
  comment: string;
}

// State Type
export interface CommentState {
  readonly data: Commentary[];
}
