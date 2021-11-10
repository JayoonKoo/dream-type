type Video = {
  title: string;
  author: string;
};
type Optional<T> = {
  [P in keyof T]?: T[P];
};
type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};
type Numllable<T> = {
  [P in keyof T]: T[P] | null;
};
type VideoOptional = Optional<Video>;
type VideoReadOnly = ReadOnly<Video>;

const video: VideoOptional = {};
const videoOpt: Optional<Video> = {};

type Proxy<T> = {
  get(): T;
  set(value: T): void;
};

type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
};
