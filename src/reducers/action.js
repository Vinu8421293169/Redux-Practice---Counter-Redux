import { DEC_COUNT, INC_COUNT } from "./actionTypes";

export function incCount() {
  return {
    type: INC_COUNT
  };
}

export function decCount() {
  return {
    type: DEC_COUNT
  };
}
