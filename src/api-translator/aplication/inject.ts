import { RequestService } from "../../shared/request";
import { TranslatorApiService } from "../domain/service";
import { GetSwapiData } from "../infrastructure/api-external/swapi";

const requestService = new RequestService()
const swapiService = new GetSwapiData(requestService)
const translatorApiService = new TranslatorApiService(swapiService);

export {translatorApiService}