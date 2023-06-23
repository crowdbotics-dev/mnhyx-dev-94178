import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_vnhtutu_list = createAsyncThunk(
  "vnhtutus/api_v1_vnhtutu_list",
  async payload => {
    const response = await apiService.api_v1_vnhtutu_list(payload)
    return response.data
  }
)
export const api_v1_vnhtutu_create = createAsyncThunk(
  "vnhtutus/api_v1_vnhtutu_create",
  async payload => {
    const response = await apiService.api_v1_vnhtutu_create(payload)
    return response.data
  }
)
export const api_v1_vnhtutu_retrieve = createAsyncThunk(
  "vnhtutus/api_v1_vnhtutu_retrieve",
  async payload => {
    const response = await apiService.api_v1_vnhtutu_retrieve(payload)
    return response.data
  }
)
export const api_v1_vnhtutu_update = createAsyncThunk(
  "vnhtutus/api_v1_vnhtutu_update",
  async payload => {
    const response = await apiService.api_v1_vnhtutu_update(payload)
    return response.data
  }
)
export const api_v1_vnhtutu_partial_update = createAsyncThunk(
  "vnhtutus/api_v1_vnhtutu_partial_update",
  async payload => {
    const response = await apiService.api_v1_vnhtutu_partial_update(payload)
    return response.data
  }
)
export const api_v1_vnhtutu_destroy = createAsyncThunk(
  "vnhtutus/api_v1_vnhtutu_destroy",
  async payload => {
    const response = await apiService.api_v1_vnhtutu_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const vnhtutusSlice = createSlice({
  name: "vnhtutus",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_vnhtutu_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vnhtutu_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_vnhtutu_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vnhtutu_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vnhtutu_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_vnhtutu_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vnhtutu_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vnhtutu_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_vnhtutu_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vnhtutu_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vnhtutu_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vnhtutu_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vnhtutu_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vnhtutu_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vnhtutu_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_vnhtutu_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_vnhtutu_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_vnhtutu_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_vnhtutu_list,
  api_v1_vnhtutu_create,
  api_v1_vnhtutu_retrieve,
  api_v1_vnhtutu_update,
  api_v1_vnhtutu_partial_update,
  api_v1_vnhtutu_destroy,
  slice: vnhtutusSlice
}
