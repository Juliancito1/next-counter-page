import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = (state: MiddlewareAPI) => {
  return (next: Dispatch) => (action: Action) => {
    next(action);
    if (action.type === "pokemons/toggleFavorite") {
      const {} = state.getState() as RootState;
    }
  };
};
