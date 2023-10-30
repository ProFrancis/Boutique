import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
  loading: true,
  error: false,
};

export const productSlice = createSlice({
  name: "product", // Nom du slice 
  initialState, // État initial (initialState)
  reducers: {
    // Action pour indiquer le début de l'opération de chargement.
    fetchStart: (draft) => { // Draft copie de initialState
      draft.loading = true
    },
    // Action pour indiquer la réussite de l'opération
    fetchSuccess: (draft, action) => {
      draft.loading = false; // Met fin à l'indicateur de chargement de l'opération
      draft.data = action.payload // stock les données reçues de notre API 
    },
    fetchDetailSucess: (draft, action) => {
      draft.loading = false; // Met fin à l'indicateur de chargement de l'opération
      draft.data = action.payload // stock les données reçues de notre API 
    },
    // Action pour indicquer l'échec de l'opération.
    fetchFailure: (draft, action) => {
      draft.loading = false; // Met fin à l'indicateur de chargement de l'opération
      draft.error = true // Active l'indicateur d'erreur
    }
  },
});

export const { fetchStart, fetchSuccess, fetchDetailSucess, fetchFailure }  = productSlice.actions;
export default productSlice.reducer
