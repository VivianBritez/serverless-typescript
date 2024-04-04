
import { translatorApiService } from "../../aplication/inject";
export const getExternalDataPeople = async (event, context) => {

  try {
 

  const service = await translatorApiService.getTraslatedData()
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Hello World!',
        data: service
      }),
    };
    return response;
  } catch (error) {
   
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Internal Server Error',
      }),
    };
  }
};
