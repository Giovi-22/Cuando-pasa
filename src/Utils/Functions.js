import axios from "axios";

let result = [];

export async function getBusByStop(stop_id){
        try {
           result = await axios.get(`http://localhost:3005/paradas${stop_id}`);
           return result;
        } catch (error) {
            throw error;
        }
    }
