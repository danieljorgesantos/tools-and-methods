import { createAction, props } from "@ngrx/store";

// Create ---------------------------------------------------------------------------
export const ADD_ITEM = createAction(
    "[CRUD] ADD_ITEM",
    props<{ payload: any }>()
  );
  
  export const ADD_ITEM_SUCCESS = createAction(
    "[CRUD] ADD_ITEM_SUCCESS",
    props<{ payload: any }>()
  );
  
  export const ADD_ITEM_ERROR = createAction(
    "[CRUD] ADD_ITEM_ERROR",
    props<{ payload: any }>()
  );
  
  // Read ---------------------------------------------------------------------------
  export const FETCH_ITEMS = createAction(
    "[CRUD] FETCH_ITEMS"
  );
  
  export const FETCH_ITEMS_SUCCESS = createAction(
    "[CRUD] FETCH_ITEMS_SUCCESS",
    props<{ payload: any }>()
  );
  
  export const FETCH_ITEMS_ERROR = createAction(
    "[CRUD] FETCH_ITEMS_ERROR",
    props<{ payload: any }>()
  );
  
  // Update ---------------------------------------------------------------------------
  export const UPDATE_ITEM = createAction(
    "[CRUD] UPDATE_ITEM",
    props<{ payload: any }>()
  );
  
  export const UPDATE_ITEM_SUCCESS = createAction(
    "[CRUD] UPDATE_ITEM_SUCCESS",
    props<{ payload: any }>()
  );
  
  export const UPDATE_ITEM_ERROR = createAction(
    "[CRUD] UPDATE_ITEM_ERROR",
    props<{ payload: any }>()
  );
  
  // Delete ---------------------------------------------------------------------------
  export const DELETE_ITEM = createAction(
    "[CRUD] DELETE_ITEM",
    props<{ payload: any }>()
  );
  
  export const DELETE_ITEM_SUCCESS = createAction(
    "[CRUD] DELETE_ITEM_SUCCESS",
    props<{ payload: any }>()
  );
  
  export const DELETE_ITEM_ERROR = createAction(
    "[CRUD] DELETE_ITEM_ERROR",
    props<{ payload: any }>()
  );