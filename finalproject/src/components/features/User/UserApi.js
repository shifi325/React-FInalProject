import axios from 'axios'

const baseUrl="http://localhost:4000/user"

export const getUsers=async()=>{
    const getResponse = await axios.get(baseUrl)
    return getResponse.data
}

export const getUserByIdA=async(id)=>{
    const getResponse = await axios.get(`${baseUrl}/${id}`)
    return getResponse.data
}

export const postUserA=async(newUser)=>{
    const getResponse = await axios.post(baseUrl,newUser)
    return getResponse.data
}

export const loginA=async(user)=>{
    const getResponse = await axios.post(`${baseUrl}/login`,user)
    console.log(getResponse.data)
    if(getResponse.status==401)
        {
            console.log("i cant find you")
           return null
        }
    return getResponse.data
}
export const checkAdminA=async(user)=>{
    const getResponse = await axios.post(`${baseUrl}/login`,user)
    console.log(getResponse.data)
    if(getResponse.status==401)
        {
            console.log("i cant find you")
           return null
        }
    return getResponse.data
}