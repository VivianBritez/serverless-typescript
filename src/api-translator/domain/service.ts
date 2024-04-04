import { GetSwapiData } from "../infrastructure/api-external/swapi";

import {translatedData} from "../infrastructure/api-external/traductor"
export class TranslatorApiService {
    private apiData : GetSwapiData
    constructor(apiData: GetSwapiData) {
        this.apiData = apiData
    }
    async getTraslatedData(): Promise<any> {
        try {
            const data = await this.apiData.getData(process.env.SWAPI_URL || '');
            const translate = await translatedData(data, 'es'); 
            return translate
        } catch (error) {
            console.error('Error al obtener datos - service:', error);
            throw new Error('Error al obtener datos');
        }
    }
}
