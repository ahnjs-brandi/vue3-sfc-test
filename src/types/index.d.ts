export interface Ego {
  name: string;
  icon: string;
}

export interface Job {
  id: number;
  title: string;
  pay: number;
  location: number;
  required: number[];
  description?: string;
}

export interface Location {
  id: number;
  name: string;
  icon: string;
}

export interface LocationObject {
  id: number;
  location: number;
  name: string;
  src?: string;
  width?: number;
  icon?: string;
  targetLocation?: number;
}

export interface Todo {
  id: number;
  title: string;
}
