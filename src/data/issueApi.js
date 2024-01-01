import axios from "axios"

export default class issueApi {
    
    static async getAllIssues() {
        try{
            const response = await axios.get('http://localhost:3000/issues');
            
            return response.data;
        } catch(error) {
            console.log(error);
            throw error;
        }
     }
}