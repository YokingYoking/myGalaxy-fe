import request from "@/utils/request";
export const getHistory = async () => {
    return request.get('/getHistory')
}