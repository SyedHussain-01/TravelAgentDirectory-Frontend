import routes from "../common/utilities/apiRoutes/routes"
import { Get, Post, Update } from "../common/utilities/services/axiosbase"

export const getAgencies = async () => {
    try {
        const response = await Get(routes.get_agencies)
        return response.data.data;
    } catch (error) {
        console.log(error)
    }
}

export const getSingleAgent = async () => {
    try {
        const response = await Get(routes.get_single_agency)
        return response.data?.data;
    } catch (error) {
        console.log(error)
    }
}

export const updateAgent = async (data) => {
    try {
        const response = await Update(routes.edit_agency, data)
        return response.data?.data;
    } catch (error) {
        console.log(error)
    }
}

export const addAgent = async (data) => {
    try {
        const response = await Post(routes.post_package, data)
        return response.data?.data;
    } catch (error) {
        console.log(error)
    }
}
