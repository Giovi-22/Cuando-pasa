import axios from "axios";



export async function getBusByStop(stop_id){
        let result = [];
        try {
           result = await axios.get(`http://localhost:3005/paradas${stop_id}`);
           return result;
        } catch (error) {
            throw error;
        }
    }
export async function getBusLines(){
    let result = []
    try {
        result = await axios.get("http://localhost:3005/buslines");
        return result;
    } catch (error) {
        throw error;
    }
}
