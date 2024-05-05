import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userAuthapi = createApi({
  reducerPath: 'userAuthapi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/uploads/student/' }),
  endpoints: (builder) => ({
    registerUser:builder.mutation({
        query:(user=>{
            return{
                url:'register/',
                method:'POST',
                body:user,
                headers:{
                    'Content-type':'application/json',

                }
            }
        })
    })

  }),
})

export const {useRegisterUserMutation} = userAuthapi