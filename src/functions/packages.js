import routes from "../common/utilities/apiRoutes/routes"
import { Get } from "../common/utilities/services/axiosbase"

export const getPackage = async (id) => {
    const data = {
        agent_id: id
    } 
    try {
        const response = await Get(routes.get_package, data)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}