import routes from "../common/utilities/apiRoutes/routes"
import { Get } from "../common/utilities/services/axiosbase"

export const getAgencies = async () => {
    try {
        const response = await Get(routes.get_agencies)
        return response.data.data;
    } catch (error) {
        console.log(error)
    }
}