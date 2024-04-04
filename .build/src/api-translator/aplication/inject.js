"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translatorApiService = void 0;
var request_1 = require("../../shared/request");
var service_1 = require("../domain/service");
var swapi_1 = require("../infrastructure/api-external/swapi");
var requestService = new request_1.RequestService();
var swapiService = new swapi_1.GetSwapiData(requestService);
var translatorApiService = new service_1.TranslatorApiService(swapiService);
exports.translatorApiService = translatorApiService;
//# sourceMappingURL=inject.js.map