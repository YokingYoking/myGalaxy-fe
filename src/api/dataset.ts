import request from "@/utils/request";
export const getDataset = async () => {
    return request.get('/getDataset')
}