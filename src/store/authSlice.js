import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from '../api/fetchApi'

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetchApi({
        endpoint: 'token/',
        method: 'POST',
        data: credentials,
      });

      const token = response.access;
      localStorage.setItem('token', token);
      return { token };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;






// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


// export const login = createAsyncThunk(
//   'auth/login',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await fetchApi({
//         endpoint: 'token/',
//         method: 'POST',
//         data: credentials,
//       });

//       const token = response.access;

//       localStorage.setItem('token', token);
//       return { token };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     token: localStorage.getItem('token'),
//     isAuthenticated: !!localStorage.getItem('token'),
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.token = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem('token');
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.token = action.payload.token;
//         state.isAuthenticated = true;
//         state.loading = false;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.error = action.payload;
//         state.loading = false;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;





// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const login = createAsyncThunk(
//   'auth/login',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const response = await fetch('http://43.204.218.113/api/v1/token/', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(credentials),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to login');
//       }

//       const data = await response.json();
//       const token = data.access;

//       localStorage.setItem('token', token);
//       return { token };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     token: null,
//     isAuthenticated: false,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.token = null;
//       state.isAuthenticated = false;
//       localStorage.removeItem('token');
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.token = action.payload.token;
//         state.isAuthenticated = true;
//         state.loading = false;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.error = action.payload;
//         state.loading = false;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
