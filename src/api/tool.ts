import request from "@/utils/request";
export const getTools = async () => {
    return request.get('/getTools')
}