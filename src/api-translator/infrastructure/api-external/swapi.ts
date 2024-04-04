import { RequestService } from "../../../shared/request";

export class GetSwapiData{
   private requestService: RequestService
   constructor(requestService: RequestService){
      this.requestService = requestService;

   }
     async getData(url : string){
        try {
        const data = await this.requestService.get(url);
        return data;
        } catch (error) {
           throw new Error('Error al obtener la data')
        }
     }
 
}