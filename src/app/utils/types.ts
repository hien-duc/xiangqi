import { DrawBrush } from "./draw";

export type Color = (typeof colors)[number];

export type Role = (typeof roles)[number];
export type File = (typeof files)[number];
export type Rank = (typeof ranks)[number];
export type Key = "a0" | `${File}${Rank}`;
export type FEN = string;
export type Pos = [number, number];
export interface Piece {
  role: Role;
  color: Color;
}
export interface Drop {
  role: Role;
  key: Key;
}
export type Pieces = Map<Key, Piece>;
export type PiecesDiff = Map<Key, Piece | undefined>;

export type KeyPair = [Key, Key];

export type NumberPair = [number, number];

export type NumberQuad = [number, number, number, number];

export interface Rect {
  left: number;
  top: number;
  width: number;
  height: number;
}

export type Dests = Map<Key, Key[]>;

export interface Elements {
  board: HTMLElement;
  wrap: HTMLElement;
  container: HTMLElement;
  ghost?: HTMLElement;
  svg?: SVGElement;
  customSvg?: SVGElement;
  autoPieces?: HTMLElement;
}
export interface Dom {
  elements: Elements;
  bounds: Memo<DOMRectReadOnly>;
  redraw: () => void;
  redrawNow: (skipSvg?: boolean) => void;
  unbind?: Unbind;
  destroyed?: boolean;
}
export interface Exploding {
  stage: number;
  keys: readonly Key[];
}

export interface MoveMetadata {
  premove: boolean;
  ctrlKey?: boolean;
  holdTime?: number;
  captured?: Piece;
  predrop?: boolean;
}
export interface SetPremoveMetadata {
  ctrlKey?: boolean;
}

export type MouchEvent = Event & Partial<MouseEvent & TouchEvent>;

export interface KeyedNode extends HTMLElement {
  cgKey: Key;
}
export interface PieceNode extends KeyedNode {
  tagName: "PIECE";
  cgPiece: string;
  cgAnimating?: boolean;
  cgFading?: boolean;
  cgDragging?: boolean;
  cgScale?: number;
}
export interface SquareNode extends KeyedNode {
  tagName: "SQUARE";
}

export interface Memo<A> {
  (): A;
  clear: () => void;
}

export interface Timer {
  start: () => void;
  cancel: () => void;
  stop: () => number;
}

export type Redraw = () => void;
export type Unbind = () => void;
export type Milliseconds = number;
export type KHz = number;
export const roles = [
  "king",
  "advisor",
  "chariot",
  "elephant",
  "horse",
  "pawn",
  "cannon",
] as const;
export const colors = ["white", "black"] as const;
export const files = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
] as const;
export const fileNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9"] as const;
export const ranks = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
] as const;

export type BrushColor = "green" | "red" | "blue" | "yellow";

export type SquareClasses = Map<Key, string>;

//home made
// Add to types.ts

export interface MoveIndicator {
  orig: Key;
  dests: Key[];
  piece: Piece;
  brush: DrawBrush;
}

// types.ts
export interface GameState {
  id: string;
  fen: string;
  moves: Move[];
  status: "active" | "complete";
  winner?: "white" | "black" | "draw";
  players: {
    white: string;
    black: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

interface Move {
  from: string;
  to: string;
  piece: string;
  fen: string;
  timestamp: Date;
}